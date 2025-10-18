import { cn } from "@/lib/utils";
import {
  CircleDollarSign,
  Clock,
  LucideIcon,
  Package,
  PackageX,
  Plane,
  ShieldPlus,
  Users,
  Waypoints,
} from "lucide-react";

type FrequentlyAskedQuestion = {
  question: string;
  answer: string;
  icon: LucideIcon;
};

const faqs: FrequentlyAskedQuestion[] = [
  {
    question: "Колко време отнема да се направи уебсайт?",
    answer:
      "Типично изпълнението отнема 7-14 работни дни в зависимост от сложността на проекта и изискванията.",
    icon: Clock,
  },
  {
    question: "Предлагате ли SEO оптимизация?",
    answer:
      "Да, всички наши уебсайтове включват основна SEO оптимизация. Предлагаме и разширени SEO услуги.",
    icon: Package,
  },
  {
    question: "Поддържате ли уебсайтовете след изпълнението?",
    answer:
      "Да, предлагаме безплатна поддръжка за първите 3 месеца и опции за дългосрочна поддръжка.",
    icon: ShieldPlus,
  },
  {
    question: "Как мога да проследя резултатите от SEO?",
    answer:
      "Предоставяме месечни отчети с позиции в търсачките, трафик и други важни метрики.",
    icon: Waypoints,
  },
  {
    question: "Какви са вашите цени?",
    answer: "Цените варират според проекта. Свържете се с нас за персонализирана оферта.",
    icon: CircleDollarSign,
  },
  {
    question: "Мога ли да променям съдържанието сам?",
    answer:
      "Да, всички уебсайтове идват с лесна за използване администрация, където можете да правите промени.",
    icon: Users,
  },
  {
    question: "Защитени ли са моите данни?",
    answer:
      "Да, използваме най-новите стандарти за сигурност, за да гарантираме защитата на вашите данни.",
    icon: ShieldPlus,
  },
  {
    question: "Предлагате ли обучение?",
    answer:
      "Да, предоставяме безплатно обучение за използване на вашия нов уебсайт и администрацията.",
    icon: Users,
  },
];

export function FAQ() {
  return (
    <div id="faq" className="bg-muted">
      <div className="max-w-(--breakpoint-xl) mx-auto px-6 text-center py-24">
        <h2 className="mt-5 max-w-4xl mx-auto text-4xl sm:text-5xl leading-[1.1] font-semibold tracking-tighter text-balance">
          Често задавани въпроси
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Намерете отговори на най-честите въпроси за нашите услуги.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "relative p-6 border bg-card -ms-px -mt-px text-start overflow-hidden",
                "first:rounded-t-lg md:first:rounded-tr-none md:nth-[2]:rounded-tr-lg md:nth-last-[2]:rounded-bl-lg last:rounded-b-lg md:last:rounded-bl-none"
              )}
            >
              <div
                className="absolute inset-0 -ms-px -mt-0.5 z-0"
                style={{
                  backgroundImage: `
        linear-gradient(to right, oklch(from var(--card-foreground) l c h / 0.07) 1px, transparent 1px),
        linear-gradient(to bottom, oklch(from var(--card-foreground) l c h / 0.07) 1px, transparent 1px)
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
            radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
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
            radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
      `,
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in",
                }}
              />

              <div className="isolate">
                <div className="flex items-center gap-2 text-lg font-medium">
                  <faq.icon className="text-primary mr-2.5 size-5 shrink-0" />
                  {faq.question}
                </div>
                <div className="mt-2 pl-10 text-base text-start text-foreground/80">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
