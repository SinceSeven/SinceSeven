"use client";

import { useEffect, useState } from "react";
import { TrendingUp, Users, Globe, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { scrollToContact } from "../lib/utils/scrolltocontact";

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const websites = [
    {
      title: "E-Commerce Platform",
      color: "from-blue-500/20 to-cyan-500/20",
      accentColor: "bg-blue-500",
    },
    {
      title: "Corporate Website",
      color: "from-purple-500/20 to-pink-500/20",
      accentColor: "bg-purple-500",
    },
    {
      title: "Portfolio Site",
      color: "from-orange-500/20 to-red-500/20",
      accentColor: "bg-orange-500",
    },
  ];

  return (
    <div className="min-h-[calc(100svh-4rem)] py-16 max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <strong className="font-semibold text-muted-foreground/90 text-sm sm:text-base">
        Развивайте бизнеса си онлайн
      </strong>
      <h1 className="mt-4 sm:mt-5 max-w-3xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-semibold tracking-tighter">
        Модерни уебсайтове и онлайн маркетинг от SinceSeven
      </h1>
      <div className="mt-4 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-muted-foreground">
        <p>
          Помагаме на бизнесите да се развиват онлайн с модерни уебсайтове, SEO
          оптимизация, Google Maps оптимизация и ефективни онлайн рекламни
          кампании.
        </p>
      </div>
      <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 justify-center">
        <Button onClick={scrollToContact} size="lg">
          Заявка за оферта
        </Button>
      </div>

      <div className="mt-12 sm:mt-16 relative w-full max-w-5xl mx-auto h-[400px] sm:h-[500px] md:h-[600px]">
        <div className="absolute top-6 left-2 sm:left-6 md:left-10 animate-float z-10">
          <div className="bg-card border border-border rounded-lg p-3 sm:p-4 shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-bold">+247%</p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  SEO Growth
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute top-20 right-2 sm:right-6 md:right-10 animate-float z-10"
          style={{ animationDelay: "1s" }}
        >
          <div className="bg-card border border-border rounded-lg p-3 sm:p-4 shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-bold">12.5K</p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  New Visitors
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[95%] md:w-[600px]">
          <div className="bg-card border border-border rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-muted border-b border-border px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3">
              <div className="flex gap-1 sm:gap-2">
                <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500" />
                <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500" />
                <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 bg-background rounded px-2 py-1 text-[10px] sm:text-xs text-muted-foreground flex items-center gap-1 sm:gap-2 truncate">
                <Globe className="h-2 w-2 sm:h-3 sm:w-3" />
                <span>yourwebsite.com</span>
              </div>
            </div>

            <div className="relative h-[220px] sm:h-[300px] md:h-[400px] overflow-hidden">
              {websites.map((site, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === activeIndex
                      ? "opacity-100 translate-x-0"
                      : index < activeIndex
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  <div
                    className={`h-full bg-gradient-to-br ${site.color} p-4 sm:p-8`}
                  >
                    <div className="flex items-center justify-between mb-4 sm:mb-8">
                      <div
                        className={`h-6 w-24 sm:h-8 sm:w-32 ${site.accentColor} rounded`}
                      />
                      <div className="flex gap-2 sm:gap-4">
                        <div className="h-1.5 w-12 sm:h-2 sm:w-16 bg-foreground/20 rounded" />
                        <div className="h-1.5 w-12 sm:h-2 sm:w-16 bg-foreground/20 rounded" />
                        <div className="h-1.5 w-12 sm:h-2 sm:w-16 bg-foreground/20 rounded" />
                      </div>
                    </div>

                    <div className="space-y-2 sm:space-y-4">
                      <div className="h-3 w-3/4 sm:h-4 bg-foreground/30 rounded" />
                      <div className="h-3 w-1/2 sm:h-4 bg-foreground/20 rounded" />
                      <div className="h-10 w-36 sm:h-12 sm:w-40 bg-foreground/40 rounded mt-4 sm:mt-6" />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mt-4 sm:mt-8">
                      <div className="h-20 sm:h-24 bg-background/50 rounded-lg backdrop-blur-sm" />
                      <div className="h-20 sm:h-24 bg-background/50 rounded-lg backdrop-blur-sm" />
                      <div className="hidden sm:block h-20 sm:h-24 bg-background/50 rounded-lg backdrop-blur-sm" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-2 sm:mt-4">
              {websites.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-6 sm:w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30"
                  }`}
                  aria-label={`View website ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-6 left-2 sm:left-6 md:left-10 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <div className="bg-card border border-border rounded-lg p-2 sm:p-3 shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-1 sm:gap-2">
              <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
              <p className="text-[10px] sm:text-xs font-medium">Fast Loading</p>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-14 right-2 sm:right-6 md:right-10 animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="bg-card border border-border rounded-lg p-2 sm:p-3 shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-[10px] sm:text-xs font-medium">Live Updates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
