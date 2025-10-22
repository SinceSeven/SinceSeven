'use client';

import { useState } from 'react';
import { ContactFormData, contactFormSchema } from '@/lib/types/contact';
import { sendContactForm } from '@/lib/utils/contact';

export interface UseContactFormReturn {
  formData: ContactFormData;
  errors: Partial<Record<keyof ContactFormData, string>> & { general?: string };
  isLoading: boolean;
  isSuccess: boolean;
  updateField: (field: keyof ContactFormData, value: string) => void;
  submitForm: () => Promise<void>;
  resetForm: () => void;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
  terms: false
};

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<UseContactFormReturn['errors']>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
    
    if (isSuccess) {
      setIsSuccess(false);
    }
  };

  const validateForm = (): boolean => {
    try {
      contactFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error: any) {
      const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
      
      if (error.issues && Array.isArray(error.issues)) {
        error.issues.forEach((issue: any) => {
          if (issue.path && issue.path.length > 0) {
            const fieldName = issue.path[0] as keyof ContactFormData;
            newErrors[fieldName] = issue.message;
          }
        });
      }

      setErrors(newErrors);
      return false;
    }
  };

  const submitForm = async (): Promise<void> => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      await sendContactForm(formData);
      setIsSuccess(true);
      setFormData(initialFormData);
    } catch (error: any) {
      setErrors({
        general: error.message || 'Възникна грешка при изпращането на съобщението'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
    setIsSuccess(false);
    setIsLoading(false);
  };

  return {
    formData,
    errors,
    isLoading,
    isSuccess,
    updateField,
    submitForm,
    resetForm,
  };
}