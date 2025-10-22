"use client";

import Image from "next/image";
import Link from "next/link";
import tornado from "../public/icons/tornado.webp";
import stetoskop from "../public/icons/stetoskop.png";
import lavender from "../public/icons/lavender.png";
import ovestate from "../public/icons/ovestate.png";

const logos = [
  {
    icon: tornado,
    title: "Tornado.com",
    description: "Професионално почистване на домове и офиси",
    url: "https://www.tornadosrv.com",
  },
  {
    icon: stetoskop,
    title: "Stetoskop.bg",
    description: "За професионалисти, които чуват повече.",
    url: "https://stetoskop.bg",
  },
  {
    icon: lavender,
    title: "Lavender.bg",
    description:
      "International supplier of essential and plant oils, waters, absolutes and concretes.",
    url: "https://lavender-bg.webflow.io",
  },
  {
    icon: ovestate,
    title: "OvEstate.bg",
    description: "Всички услуги свързани с имоти",
    url: "https://ov-estate.com",
  },
];

export function LogoCloud() {
  return (
    <div className="bg-primary/4 rounded-lg border border-dashed p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {logos.map((logo) => (
          <Link
            key={logo.title}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border bg-muted p-1 transition hover:scale-[1.02] hover:shadow-lg"
          >
            <div className="relative px-6 py-10 bg-card rounded-md border h-full overflow-hidden flex flex-col items-center text-center">
              <Image
                src={logo.icon}
                alt={logo.title}
                className="size-32 object-contain"
              />
              <h3 className="mt-6 text-xl font-semibold tracking-tight">
                {logo.title}
              </h3>
              <p className="mt-3 text-muted-foreground text-balance">
                {logo.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
