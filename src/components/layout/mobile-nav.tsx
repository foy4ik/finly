"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CtaDialog } from "@/components/finly/cta-dialog";
import { NAV_LINKS } from "@/lib/data";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full lg:hidden"
            aria-label="Открыть меню"
          />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[85%] gap-0 sm:max-w-sm">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="flex items-center gap-2 font-heading text-lg">
            <span className="flex size-7 items-center justify-center rounded-lg bg-forest text-primary-foreground">
              <span className="font-heading text-sm font-semibold">F</span>
            </span>
            Finly
          </SheetTitle>
        </SheetHeader>

        <nav
          className="flex flex-1 flex-col gap-1 p-4"
          aria-label="Мобильная навигация"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-muted"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Separator />

        <div className="flex flex-col gap-2 p-4">
          <CtaDialog mode="signin">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="h-11 w-full rounded-full text-base"
            >
              Войти
            </Button>
          </CtaDialog>
          <CtaDialog mode="signup">
            <Button
              onClick={() => setOpen(false)}
              className="h-11 w-full rounded-full text-base"
            >
              Попробовать бесплатно
            </Button>
          </CtaDialog>
        </div>
      </SheetContent>
    </Sheet>
  );
}
