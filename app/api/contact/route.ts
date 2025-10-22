import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactFormSchema, type ContactFormData } from '@/lib/types/contact';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const validationResult = contactFormSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Invalid form data',
          details: validationResult.error.issues 
        },
        { status: 400 }
      );
    }

    const formData: ContactFormData = validationResult.data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const businessEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          Ново съобщение от контактната форма
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #495057; margin-top: 0;">Данни за контакт:</h3>
          <p><strong>Име:</strong> ${formData.name}</p>
          <p><strong>Имейл:</strong> ${formData.email}</p>
          ${formData.phone ? `<p><strong>Телефон:</strong> ${formData.phone}</p>` : ''}
          ${formData.company ? `<p><strong>Компания:</strong> ${formData.company}</p>` : ''}
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
          <h3 style="color: #495057; margin-top: 0;">Съобщение:</h3>
          <p style="line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
        </div>

        <div style="margin-top: 20px; padding: 15px; background-color: #d4edda; border-radius: 8px; color: #155724;">
          <p style="margin: 0;"><strong>Време на изпращане:</strong> ${new Date().toLocaleString('bg-BG')}</p>
        </div>
      </div>
    `;

    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          Благодарим ви за съобщението!
        </h2>
        
        <p>Здравейте ${formData.name},</p>
        
        <p>Получихме вашето съобщение и ще се свържем с вас възможно най-скоро.</p>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #495057; margin-top: 0;">Вашето съобщение:</h3>
          <p style="line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
        </div>

        <p>Ако имате спешни въпроси, можете да се свържете с нас директно.</p>
        
        <div style="margin-top: 30px; padding: 20px; background-color: #007bff; color: white; border-radius: 8px;">
          <h3 style="margin-top: 0; color: white;">SinceSeven</h3>
          <p style="margin-bottom: 0;">Модерни уебсайтове и онлайн маркетинг</p>
        </div>
      </div>
    `;

    const contactEmails = process.env.CONTACT_EMAIL?.split(',').map(email => email.trim()) || [];
    
    if (contactEmails.length === 0) {
      throw new Error('No contact email configured');
    }

    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to: contactEmails,
      subject: `Ново съобщение от ${formData.name} - ${formData.email}`,
      html: businessEmailHtml,
      replyTo: formData.email,
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to: formData.email,
      subject: 'Получихме вашето съобщение - SinceSeven',
      html: customerEmailHtml,
    });

    return NextResponse.json(
      { message: 'Съобщението беше изпратено успешно!' },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: 'Възникна грешка при изпращането на съобщението. Моля опитайте отново.' },
      { status: 500 }
    );
  }
}