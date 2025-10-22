import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Името трябва да бъде поне 2 символа')
    .max(100, 'Името не може да бъде повече от 100 символа'),
  
  email: z
    .email('Моля въведете валиден имейл адрес'),
  
  phone: z
    .string()
    .optional()
    .refine(
      (val: string | undefined) => !val || /^[\d\s\-\+\(\)]{7,20}$/.test(val),
      'Моля въведете валиден телефонен номер'
    ),
  
  company: z
    .string()
    .max(100, 'Името на компанията не може да бъде повече от 100 символа')
    .optional(),
  
  message: z
    .string()
    .min(10, 'Съобщението трябва да бъде поне 10 символа')
    .max(1000, 'Съобщението не може да бъде повече от 1000 символа'),

  terms: z
    .boolean()
    .refine(val => val === true, 'Трябва да приемете общите условия и политиката за поверителност')
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export interface ContactApiResponse {
  message?: string;
  error?: string;
  details?: any[];
}

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  password: string;
  fromEmail: string;
  contactEmail: string;
}