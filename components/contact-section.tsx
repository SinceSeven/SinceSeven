"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useContactForm } from "@/lib/hooks/useContactForm";
import { PrivacyPolicyModal } from "@/components/privacy-policy-modal";
import { Loader2, CheckCircle, Shield } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import phoneIcon from "../public/icons/3dicons-call-ringing-dynamic-color.png";
import emailIcon from "../public/icons/3dicons-mail-dynamic-color.png";

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
        <div className="w-full max-w-3xl mx-auto px-6 text-center">
          <div className="mx-auto w-16 h-16 flex items-center justify-center bg-green-100 text-green-600 rounded-full mb-6">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-green-600">
            Благодарим ви!
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Вашето съобщение беше изпратено успешно. Ще се свържем с вас
            възможно най-скоро.
          </p>
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            className="mt-6 w-full sm:w-auto"
          >
            Изпратете друго съобщение
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 bg-primary/4">
      <div className="w-full max-w-7xl mx-auto px-6 xl:px-0">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-muted-foreground uppercase font-semibold text-sm">
            Свържете се с нас
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            Готови сме да помогнем на вашия бизнес!
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Свържете се с нас за безплатна консултация или изпратете запитване
            за вашия проект.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-start">
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-8 mt-6">
            <div className="rounded-lg border bg-muted p-1 relative">
              <div className="relative px-6 py-8 bg-card rounded-md border flex flex-col items-center">
                <Image src={emailIcon} alt="Email Icon" className="h-16 w-16" />
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-center">
                  Имейл
                </h3>
                <p className="mt-3 text-center text-muted-foreground">
                  Изпратете ни имейл за всякакви въпроси.
                </p>
                <Link
                  href="mailto:info@sinceseven.bg"
                  className="mt-3 text-center font-medium text-primary hover:underline break-words"
                >
                  info@sinceseven.bg
                </Link>
                <PatternDashedTop />
              </div>
            </div>

            <div className="rounded-lg border bg-muted p-1 relative">
              <div className="relative px-6 py-8 bg-card rounded-md border flex flex-col items-center">
                <Image src={phoneIcon} alt="Phone Icon" className="h-16 w-16" />
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-center">
                  Телефон
                </h3>
                <p className="mt-3 text-center text-muted-foreground">
                  Работни дни от 9:00 до 18:00 ч.
                </p>
                <Link
                  href="tel:+359123456789"
                  className="mt-3 text-center font-medium text-primary hover:underline"
                >
                  +359 123 456 789
                </Link>
                <PatternDashedTop />
              </div>
            </div>
          </div>

          <Card className="bg-card shadow-lg border-0">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 md:gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                    <Checkbox
                      id="terms"
                      disabled={isLoading}
                      checked={formData.terms}
                      onCheckedChange={(checked: boolean) =>
                        updateField("terms", checked)
                      }
                      className={`mt-2 ${errors.terms ? "border-red-500" : ""}`}
                    />
                    <span className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                      Съгласен/на съм с обработката на личните ми данни за
                      целите на тази консултация.
                      <Button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsPrivacyModalOpen(true);
                        }}
                        className="ml-0 sm:ml-2 mt-2 sm:mt-0 flex items-center hover:text-gray-900"
                      >
                        <Shield className="h-4 w-4 mr-1" />
                        Политика за поверителност
                      </Button>
                    </span>
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

      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </section>
  );
};
const PatternDashedTop = () => {
  return (
    <div
      className="absolute inset-0 -top-px -left-px z-0"
      style={{
        backgroundImage: `
        linear-gradient(to right, var(--border) 1px, transparent 1px),
        linear-gradient(to bottom, var(--border) 1px, transparent 1px)
      `,
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 0 0",
        maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
        WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 50% at 50% 0%, #000 60%, transparent 100%)
      `,
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    />
  );
};
