"use client";

import {
  ArrowUpRightIcon,
  Globe,
  Search,
  MapPin,
  Megaphone,
} from "lucide-react";
import { Button } from "./ui/button";
import { CtaBanner } from "./cta-banner";
import dynamic from "next/dynamic";

const Icon3DCanvas = dynamic(
  () => import("./icon3DCanvas").then((mod) => mod.Icon3DCanvas),
  { ssr: false }
);
const industries = [
  {
    icon: Globe,
    title: "Уеб разработка",
    description:
      "Създаваме модерни, бързи и отзивчиви уебсайтове, които впечатляват вашите клиенти.",
  },
  {
    icon: Search,
    title: "SEO оптимизация",
    description:
      "Подобряваме позициите ви в търсачките за повече органичен трафик и клиенти.",
  },
  {
    icon: () => <Icon3DCanvas name="pinmap" size={70} animationType="wave" />,
    title: "Google Maps оптимизация",
    description:
      "Оптимизираме вашето присъствие в Google Maps за местни търсения и клиенти.",
  },
  {
    icon: () => <Icon3DCanvas name="setting" size={70} animationType="wave" />,
    title: "Онлайн реклами",
    description:
      "Ефективни Google Ads и Facebook рекламни кампании за максимален ROI.",
  },
];

export function Industries() {
  return (
    <div id="industries" className="bg-primary/4">
      <div className="max-w-(--breakpoint-xl) mx-auto px-6 text-center py-24">
        <strong className="font-semibold text-muted-foreground">
          Нашите услуги
        </strong>
        <h2 className="mt-5 max-w-4xl mx-auto text-4xl sm:text-5xl leading-[1.1] font-semibold tracking-tighter text-balance">
          Пълен спектър от услуги за онлайн успеха на вашия бизнес
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          От модерен уебсайт до ефективни маркетингови кампании - всичко на едно
          място.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="rounded-lg border bg-muted p-1"
            >
              <div className="relative px-6 py-10 bg-card rounded-md border h-full overflow-hidden">
                <div className="relative z-1 flex flex-col items-center">
                  <industry.icon
                    className="size-12 text-primary"
                    strokeWidth={1.75}
                  />
                  <h3 className="mt-8 text-xl font-semibold tracking-tight">
                    {industry.title}
                  </h3>
                  <p className="mt-3">{industry.description}</p>

                  <Button className="mt-6">
                    Научете повече <ArrowUpRightIcon />
                  </Button>
                </div>

                <PatternDashedTop />
              </div>
            </div>
          ))}
        </div>

        <CtaBanner className="mt-24" />
      </div>
    </div>
  );
}
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
