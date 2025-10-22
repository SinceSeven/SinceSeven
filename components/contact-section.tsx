"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useContactForm } from "@/lib/hooks/useContactForm";
import { PrivacyPolicyModal } from "@/components/privacy-policy-modal";
import {
  MailIcon,
  MapPinIcon,
  MessageCircle,
  PhoneIcon,
  Loader2,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const ContactSection = () => {
  const { formData, errors, isLoading, isSuccess, updateField, submitForm } =
    useContactForm();
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm();
  };

  if (isSuccess) {
    return (
      <section
        id="contact"
        className="py-16 bg-gradient-to-b from-background to-accent/20"
      >
        <div className="w-full max-w-7xl mx-auto px-6 xl:px-0">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-green-100 text-green-600 rounded-full mb-6">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-green-600">
              Благодарим ви!
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-md mx-auto">
              Вашето съобщение беше изпратено успешно. Ще се свържем с вас
              възможно най-скоро.
            </p>
            <Button
              onClick={() => window.location.reload()}
              variant="outline"
              className="mt-6"
            >
              Изпратете друго съобщение
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-background to-accent/20"
    >
      <div className="w-full max-w-7xl mx-auto px-6 xl:px-0">
        <div className="text-center mb-16">
          <span className="text-muted-foreground uppercase font-semibold text-sm">
            Свържете се с нас
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Готови сме да помогнем на вашия бизнес!
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Свържете се с нас за безплатна консултация или изпратете запитване
            за вашия проект.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 md:gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            <div>
              <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                <MailIcon />
              </div>
              <h3 className="mt-6 font-semibold text-xl">Имейл</h3>
              <p className="my-2.5 text-muted-foreground">
                Изпратете ни имейл за всякакви въпроси.
              </p>
              <Link
                className="font-medium text-primary hover:underline"
                href="mailto:info@sinceseven.bg"
              >
                info@sinceseven.bg
              </Link>
            </div>
            {/* <div>
              <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                <MessageCircle />
              </div>
              <h3 className="mt-6 font-semibold text-xl">Онлайн чат</h3>
              <p className="my-2.5 text-muted-foreground">
                Свържете се с нас в реално време.
              </p>
              <Link
                className="font-medium text-primary hover:underline"
                href="#contact"
              >
                Започнете разговор
              </Link>
            </div> */}
            {/* <div>
              <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                <MapPinIcon />
              </div>
              <h3 className="mt-6 font-semibold text-xl">Офис</h3>
              <p className="my-2.5 text-muted-foreground">
                Посетете ни за лична среща.
              </p>
              <Link
                className="font-medium text-primary hover:underline"
                href="https://maps.google.com"
                target="_blank"
              >
                София, България <br />
                (по договаряне)
              </Link>
            </div> */}
            <div>
              <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                <PhoneIcon />
              </div>
              <h3 className="mt-6 font-semibold text-xl">Телефон</h3>
              <p className="my-2.5 text-muted-foreground">
                Работни дни от 9:00 до 18:00 ч.
              </p>
              <Link
                className="font-medium text-primary hover:underline"
                href="tel:+359123456789"
              >
                +359 123 456 789
              </Link>
            </div>
          </div>

          <Card className="bg-card shadow-lg border-0">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Име *</Label>
                      <Input
                        placeholder="Вашето име"
                        id="name"
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        className={`mt-2 ${
                          errors.name ? "border-red-500" : ""
                        }`}
                        disabled={isLoading}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email">Имейл *</Label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        id="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className={`mt-2 ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        disabled={isLoading}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Телефон (опционално)</Label>
                      <Input
                        placeholder="+359 888 123 456"
                        id="phone"
                        value={formData.phone || ""}
                        onChange={(e) => updateField("phone", e.target.value)}
                        className={`mt-2 ${
                          errors.phone ? "border-red-500" : ""
                        }`}
                        disabled={isLoading}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="company">Компания (опционално)</Label>
                      <Input
                        placeholder="Вашата компания"
                        id="company"
                        value={formData.company || ""}
                        onChange={(e) => updateField("company", e.target.value)}
                        className={`mt-2 ${
                          errors.company ? "border-red-500" : ""
                        }`}
                        disabled={isLoading}
                      />
                      {errors.company && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.company}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Съобщение *</Label>
                    <Textarea
                      id="message"
                      placeholder="Разкажете ни за вашия проект или въпрос..."
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      className={`mt-2 ${
                        errors.message ? "border-red-500" : ""
                      }`}
                      rows={6}
                      disabled={isLoading}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <div className="flex items-start flex-col gap-2">
                    <div className="flex items-start gap-2">
                      <Checkbox
                        id="terms"
                        disabled={isLoading}
                        checked={formData.terms}
                        className={`mt-2 ${
                          errors.terms ? "border-red-500" : ""
                        }`}
                      />
                      <Label htmlFor="terms" className="text-sm leading-5">
                        Съгласен/на съм с обработката на личните ми данни за
                        целите на тази консултация.
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsPrivacyModalOpen(true);
                          }}
                          className="underline ml-1 text-primary hover:text-primary/80"
                        >
                          Политика за поверителност
                        </button>
                      </Label>
                    </div>

                      {errors.terms && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.terms}
                        </p>
                      )}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="mt-6 w-full"
                  size="lg"
                  onClick={() => console.log("clicikng")}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Изпращане...
                    </>
                  ) : (
                    "Изпратете съобщение"
                  )}
                </Button>
                {errors.general && (
                  <p className="text-red-500 text-sm mt-1">{errors.general}</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
    </section>
  );
};
