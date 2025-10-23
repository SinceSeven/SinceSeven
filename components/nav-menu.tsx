"use client";

import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { scrollToElement } from "@/lib/utils/scrolltocontact";

export const NavMenu = ({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenu>) => {
  const { orientation } = props;
  const triggerStyle = cn(navigationMenuTriggerStyle(), {
    "text-xl": orientation === "vertical",
  });

  return (
    <NavigationMenu viewport={false} {...props}>
      <NavigationMenuList
        className={cn({
          "flex-col items-start gap-4": orientation === "vertical",
        })}
      >
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={triggerStyle}>
            <span className="cursor-pointer" onClick={() => scrollToElement("why-choose-us")}>За нас</span>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={triggerStyle}>
            <span className="cursor-pointer" onClick={() => scrollToElement("industries")}>Услуги</span>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={triggerStyle}>
            <span className="cursor-pointer" onClick={() => scrollToElement("features")}>Предимства</span>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={triggerStyle}>
            <span className="cursor-pointer" onClick={() => scrollToElement("faq")}>Въпроси</span>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={triggerStyle}>
            <span className="cursor-pointer" onClick={() => scrollToElement("testimonials")}>Отзиви</span>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
