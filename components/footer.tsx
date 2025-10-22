import { Separator } from "@/components/ui/separator";
import { Instagram } from "lucide-react";
import Link from "next/link";
import { Logo } from "./logo";

const sections = [
  {
    title: "Компания",
    links: [
      { title: "За нас", href: "/#about" },
      { title: "Кариери", href: "/#careers" },
      { title: "Блог", href: "/#blog" },
      { title: "Новини", href: "/#press" },
      { title: "Контакти", href: "/#contact" },
    ],
  },
  {
    title: "Услуги",
    links: [
      { title: "Уеб разработка", href: "/#features" },
      { title: "SEO оптимизация", href: "/#pricing" },
      { title: "Google Maps", href: "/#integrations" },
      { title: "Онлайн реклами", href: "/#demo" },
      { title: "Често задавани въпроси", href: "/#faqs" },
    ],
  },
  {
    title: "Ресурси",
    links: [
      { title: "Документация", href: "/#docs" },
      { title: "Помощ", href: "/#help" },
      { title: "Общност", href: "/#community" },
      { title: "Уроци", href: "/#tutorials" },
      { title: "Статус", href: "/#status" },
    ],
  },
  {
    title: "Правна информация",
    links: [
      { title: "Политика за поверителност", href: "/#privacy" },
      { title: "Условия за ползване", href: "/#terms" },
      { title: "Политика за бисквитки", href: "/#cookies" },
      { title: "Сигурност", href: "/#security" },
      { title: "Лицензи", href: "/#licenses" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-muted dark:bg-card border-t px-6 py-2">
      <div className="mx-auto max-w-screen-xl">
        <div className="pt-8 pb-12">
          <div className="mt-10 grid grid-cols-2 gap-12 sm:grid-cols-4 lg:grid-cols-6">
            <div className="col-span-full lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2">
                <Logo />
              </Link>
              <p className="text-muted-foreground mt-1.5">
                Модерни уебсайтове и онлайн маркетинг за растежа на вашия
                бизнес.
              </p>
            </div>
            {sections.map(({ title, links }) => (
              <div key={title}>
                <h3 className="text-lg font-semibold">{title}</h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {links.map(({ title, href }) => (
                    <li key={title}>
                      <Link
                        href={href}
                        className="text-muted-foreground hover:text-primary"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <div className="flex flex-col-reverse items-center justify-center gap-6 px-2 pt-6 pb-4 sm:flex-row sm:justify-between">
          <p className="text-muted-foreground text-sm font-medium">
            &copy; {new Date().getFullYear()} SinceSeven. Всички права запазени.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://www.instagram.com/sincesevenbg/">
              <Instagram className="text-muted-foreground h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
