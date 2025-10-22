"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Shield, Lock, Eye, FileText } from "lucide-react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal = ({
  isOpen,
  onClose,
}: PrivacyPolicyModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative bg-background rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden border border-border/50">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-primary/5 via-background to-background px-8 py-6 border-b border-border/50">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground text-balance">
                  Политика за поверителност
                </h2>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Вашата поверителност е наш приоритет
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full h-9 w-9 hover:bg-muted shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(85vh-180px)] px-8 py-6">
          <div className="space-y-8">
            {/* Introduction */}
            <div className="space-y-3">
              <p className="text-base text-foreground/90 leading-relaxed">
                SinceSeven се ангажира да защитава вашата лична информация и да
                зачита правото ви на поверителност.
              </p>
            </div>

            {/* Data Collection Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Какви данни събираме
                </h3>
              </div>
              <ul className="space-y-2.5 ml-11">
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="leading-relaxed">
                    Име и електронна поща (задължителни)
                  </span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="leading-relaxed">
                    Телефонен номер (по избор)
                  </span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="leading-relaxed">
                    Име на компания (по избор)
                  </span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="leading-relaxed">Съобщение/запитване</span>
                </li>
              </ul>
            </div>

            {/* Data Usage Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Eye className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Как използваме данните
                </h3>
              </div>
              <ul className="space-y-2.5 ml-11">
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="leading-relaxed">
                    За да отговорим на вашите запитвания
                  </span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="leading-relaxed">
                    За да ви предоставим консултация
                  </span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="leading-relaxed">
                    За да ви изпратим информация за нашите услуги
                  </span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="leading-relaxed">
                    За подобряване на качеството на услугите ни
                  </span>
                </li>
              </ul>
            </div>

            {/* Data Protection Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Lock className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Защита на данните
                </h3>
              </div>
              <ul className="space-y-2.5 ml-11">
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="leading-relaxed">
                    Всички данни се предават и съхраняват сигурно
                  </span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="leading-relaxed">
                    Достъп до данните имат само оторизирани лица
                  </span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="leading-relaxed">
                    Не споделяме данните с трети страни без ваше съгласие
                  </span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="leading-relaxed">
                    Можете да поискате изтриване на данните си по всяко време
                  </span>
                </li>
              </ul>
            </div>

            {/* Rights Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Вашите права
                </h3>
              </div>
              <ul className="space-y-2.5 ml-11">
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="leading-relaxed">
                    Право на достъп до вашите лични данни
                  </span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="leading-relaxed">
                    Право на корекция на неточни данни
                  </span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="leading-relaxed">
                    Право на изтриване на данните
                  </span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="leading-relaxed">
                    Право на ограничаване на обработката
                  </span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="leading-relaxed">
                    Право на преносимост на данните
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="rounded-xl bg-muted/50 p-6 space-y-3 border border-border/50">
              <p className="text-sm font-medium text-foreground">
                Контакт за въпроси
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                За всякакви въпроси относно тази политика за поверителност, моля
                свържете се с нас на{" "}
                <a
                  href="mailto:info@sinceseven.bg"
                  className="text-primary hover:underline font-medium"
                >
                  info@sinceseven.bg
                </a>
              </p>
              <p className="text-xs text-muted-foreground pt-2">
                Последна актуализация: Октомври 2025
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-8 py-5 border-t border-border/50 bg-muted/30">
          <Button onClick={onClose} size="lg" className="px-8">
            Разбрах
          </Button>
        </div>
      </div>
    </div>
  );
};
