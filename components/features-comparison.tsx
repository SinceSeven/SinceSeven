import { CheckIcon, XIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { LogoCloud } from "./logo-cloud";

interface Feature {
  title: string;
  value: {
    sinceSeven: boolean | string;
    competitors: boolean | string;
    diyApproach: boolean | string;
  };
}

const features: Feature[] = [
  {
    title: "Модерен дизайн",
    value: { sinceSeven: true, competitors: true, diyApproach: false },
  },
  {
    title: "SEO оптимизация",
    value: { sinceSeven: true, competitors: false, diyApproach: false },
  },
  {
    title: "Мобилна оптимизация",
    value: { sinceSeven: true, competitors: true, diyApproach: false },
  },
  {
    title: "Google Maps оптимизация",
    value: { sinceSeven: true, competitors: false, diyApproach: true },
  },
  {
    title: "Поддръжка",
    value: { sinceSeven: true, competitors: false, diyApproach: true },
  },
  {
    title: "Анализ и отчети",
    value: { sinceSeven: true, competitors: false, diyApproach: true },
  },
  {
    title: "Гаранция за резултат",
    value: { sinceSeven: true, competitors: false, diyApproach: false },
  },
  {
    title: "24/7 поддръжка",
    value: { sinceSeven: true, competitors: false, diyApproach: false },
  },
  {
    title: "Безплатни актуализации",
    value: { sinceSeven: true, competitors: false, diyApproach: false },
  },
  {
    title: "Време за изпълнение",
    value: {
      sinceSeven: "7-14 дни",
      competitors: "30+ дни",
      diyApproach: "6+ месеца",
    },
  },
];

export function FeaturesComparison() {
  return (
    <div
      id="features"
      className="max-w-(--breakpoint-xl) mx-auto px-6 text-center py-24"
    >
      <strong className="font-semibold text-muted-foreground">
        Нашите предимства
      </strong>
      <h2 className="mt-5 max-w-4xl mx-auto text-4xl sm:text-5xl leading-[1.1] font-semibold tracking-tighter text-balance">
        Защо да изберете SinceSeven за вашия проект
      </h2>
      <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
        Предлагаме иновативни и висококачествени решения, които отговарят на
        уникалните нужди на нашите клиенти.
      </p>

      <div className="mt-16 border p-2 bg-muted border-dashed rounded-lg">
        <Table className="bg-background rounded-md overflow-hidden">
          <TableHeader>
            <TableRow className="[&>th]:py-5 [&>th]:border [&>th]:border-dashed border-dashed text-xl [&>th]:text-center [&>th]:bg-muted/30">
              <TableHead className="w-32 bg-[image:repeating-linear-gradient(315deg,_var(--muted)_0,_var(--muted)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></TableHead>
              <TableHead>SinceSeven</TableHead>
              <TableHead>Конкуренти</TableHead>
              <TableHead>Самостоятелно</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((feature) => (
              <TableRow
                key={feature.title}
                className="[&>td]:py-5 [&>td]:border [&>td]:border-dashed text-lg border-dashed"
              >
                <TableCell className="text-start px-10 font-medium bg-muted/30">
                  {feature.title}
                </TableCell>
                <ValueCell value={feature.value.sinceSeven} />
                <ValueCell value={feature.value.competitors} />
                <ValueCell value={feature.value.diyApproach} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-32 space-y-12">
        <p className="text-3xl font-medium tracking-tight">
          Вече спечелихме доверието на
        </p>
        <LogoCloud />
      </div>
    </div>
  );
}

const ValueCell = ({ value }: { value: boolean | string }) => {
  if (typeof value === "string") {
    return <TableCell>{value}</TableCell>;
  }
  return (
    <TableCell className="text-center">
      {value ? (
        <CheckIcon className="text-green-600 mx-auto" />
      ) : (
        <XIcon className="text-red-600 mx-auto" />
      )}
    </TableCell>
  );
};
