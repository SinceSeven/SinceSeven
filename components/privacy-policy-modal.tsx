"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Политика за поверителност
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="rounded-full h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <h3 className="text-lg font-semibold mb-3">
              Защита на личните данни
            </h3>
            <p className="mb-4">
              SinceSeven се ангажира да защитава вашата лична информация и да
              зачита правото ви на поверителност.
            </p>

            <h4 className="font-semibold mb-2">Какви данни събираме:</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Име и електронна поща (задължителни)</li>
              <li>Телефонен номер (по избор)</li>
              <li>Име на компания (по избор)</li>
              <li>Съобщение/запитване</li>
            </ul>

            <h4 className="font-semibold mb-2">Как използваме данните:</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>За да отговорим на вашите запитвания</li>
              <li>За да ви предоставим консултация</li>
              <li>За да ви изпратим информация за нашите услуги</li>
              <li>За подобряване на качеството на услугите ни</li>
            </ul>

            <h4 className="font-semibold mb-2">Защита на данните:</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Всички данни се предават и съхраняват сигурно</li>
              <li>Достъп до данните имат само оторизирани лица</li>
              <li>Не споделяме данните с трети страни без ваше съгласие</li>
              <li>Можете да поискате изтриване на данните си по всяко време</li>
            </ul>

            <h4 className="font-semibold mb-2">Вашите права:</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Право на достъп до вашите лични данни</li>
              <li>Право на корекция на неточни данни</li>
              <li>Право на изтриване на данните</li>
              <li>Право на ограничаване на обработката</li>
              <li>Право на преносимост на данните</li>
            </ul>

            <p className="mb-4">
              <strong>Контакт:</strong> За всякакви въпроси относно тази
              политика за поверителност, моля свържете се с нас на{" "}
              <a
                href="mailto:info@sinceseven.bg"
                className="text-primary hover:underline"
              >
                info@sinceseven.bg
              </a>
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Последна актуализация: Октомври 2025
            </p>
          </div>
        </div>

        <div className="flex justify-end p-6 border-t border-gray-200 dark:border-gray-700">
          <Button onClick={onClose}>Разбрах</Button>
        </div>
      </div>
    </div>
  );
};
