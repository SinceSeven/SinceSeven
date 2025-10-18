import {
  ArrowUpRightIcon,
  BinocularsIcon,
  CogIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { LogoCloud } from "./logo-cloud";

const plusPoints = [
  {
    icon: ShieldCheckIcon,
    title: "Модерен дизайн",
    description:
      "Създаваме съвременни и отзивчиви уебсайтове, които впечатляват потребителите.",
  },
  {
    icon: CogIcon,
    title: "SEO оптимизация",
    description: "Подобряваме видимостта ви в търсачките за повече посетители и клиенти.",
  },
  {
    icon: BinocularsIcon,
    title: "Онлайн реклами",
    description: "Ефективни рекламни кампании за максимален резултат от инвестицията.",
  },
];

export function WhyChooseUs() {
  return (
    <div
      id="why-choose-us"
      className="max-w-(--breakpoint-xl) mx-auto px-6 text-center py-24"
    >
      <strong className="font-semibold text-muted-foreground">
        Защо SinceSeven
      </strong>
      <h2 className="mt-5 max-w-4xl mx-auto text-4xl sm:text-5xl leading-[1.1] font-semibold tracking-tighter text-balance">
        Водещи в уеб разработката и онлайн маркетинга с години опит
      </h2>
      <p className="mt-5 text-lg text-muted-foreground">
        Вярваме в силата на модерните технологии за растежа на вашия бизнес.
      </p>

      <div className="mt-12 flex flex-wrap gap-4 justify-center">
        {plusPoints.map((plusPoint) => (
          <div
            key={plusPoint.title}
            className="relative overflow-hidden border rounded-lg px-6 py-10 w-full sm:max-w-xs flex flex-col items-center gap-2 bg-gradient-to-b from-primary/3"
          >
            <BackgroundPattern />

            <plusPoint.icon className="size-14 stroke-[1.5px] text-primary" />
            <h3 className="mt-6 text-xl font-semibold">{plusPoint.title}</h3>
            <p className="text-muted-foreground text-balance">
              {plusPoint.description}
            </p>
            <Button className="mt-6">
              Learn More <ArrowUpRightIcon />
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-32 space-y-12">
        <p className="text-3xl font-medium tracking-tight">
          Доверие от над 100 бизнеса и хиляди доволни клиенти
        </p>
        <LogoCloud />
      </div>
    </div>
  );
}

function BackgroundPattern() {
  return (
    <div
      className="absolute inset-0 -top-px -left-px -z-1"
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
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    />
  );
}
