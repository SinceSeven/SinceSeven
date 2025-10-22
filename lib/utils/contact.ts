import { ContactFormData, ContactApiResponse } from '@/lib/types/contact';

export async function sendContactForm(data: ContactFormData): Promise<ContactApiResponse> {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result: ContactApiResponse = await response.json();

  if (!response.ok) {
    throw new Error(result.error || 'Failed to send message');
  }

  return result;
}