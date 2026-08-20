"use client";

import { useState, type FormEvent, type ReactElement, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, ShieldCheck, Sparkles } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Mode = "signup" | "signin";

type CtaDialogProps = {
  children: ReactNode;
  mode?: Mode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

type FormStatus = "idle" | "loading" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const COPY: Record<Mode, { title: string; description: string; cta: string }> = {
  signup: {
    title: "Начните пользоваться Finly",
    description:
      "Оставьте почту — пришлём ссылку для входа. Без пароля, без карты, отменить можно в любой момент.",
    cta: "Отправить ссылку",
  },
  signin: {
    title: "Вход в Finly",
    description:
      "Введите почту, привязанную к аккаунту, — пришлём одноразовую ссылку для входа.",
    cta: "Прислать ссылку для входа",
  },
};

export function CtaDialog({ children, mode = "signup", open, onOpenChange }: CtaDialogProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isControlled = open !== undefined;
  const dialogOpen = isControlled ? open : internalOpen;

  const copy = COPY[mode];

  function resetForm() {
    setEmail("");
    setStatus("idle");
    setErrorMessage("");
  }

  function handleOpenChange(next: boolean) {
    if (!isControlled) setInternalOpen(next);
    onOpenChange?.(next);
    if (!next) {
      // let the close animation finish before wiping state
      window.setTimeout(resetForm, 200);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = email.trim();
    if (!trimmed) {
      setStatus("error");
      setErrorMessage("Введите почту, чтобы продолжить.");
      return;
    }
    if (!EMAIL_PATTERN.test(trimmed)) {
      setStatus("error");
      setErrorMessage("Похоже, в адресе почты есть опечатка.");
      return;
    }

    setStatus("loading");
    window.setTimeout(() => {
      setStatus("success");
    }, 1100);
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger render={children as ReactElement} />
      <DialogContent className="sm:max-w-md p-0 overflow-hidden gap-0">
        <div className="p-6">
          <AnimatePresence mode="wait" initial={false}>
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center gap-4 py-6 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.05 }}
                  className="flex size-14 items-center justify-center rounded-full bg-mint text-forest"
                >
                  <CheckCircle2 className="size-7" />
                </motion.div>
                <div className="space-y-1.5">
                  <DialogTitle className="text-lg">Ссылка отправлена</DialogTitle>
                  <DialogDescription className="text-balance">
                    Мы отправили письмо на{" "}
                    <span className="font-medium text-foreground">{email}</span>. Перейдите по
                    ссылке из письма, чтобы {mode === "signup" ? "создать аккаунт" : "войти"}.
                  </DialogDescription>
                </div>
                <Button
                  className="mt-2 h-10 w-full rounded-full"
                  onClick={() => handleOpenChange(false)}
                >
                  Понятно
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <DialogHeader className="items-start gap-1.5">
                  <div className="mb-1 flex size-10 items-center justify-center rounded-full bg-mint text-forest">
                    <Sparkles className="size-5" />
                  </div>
                  <DialogTitle className="text-xl">{copy.title}</DialogTitle>
                  <DialogDescription>{copy.description}</DialogDescription>
                </DialogHeader>

                <form className="mt-5 flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="cta-email">Email</Label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="cta-email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={email}
                        disabled={status === "loading"}
                        aria-invalid={status === "error"}
                        aria-describedby={status === "error" ? "cta-email-error" : undefined}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === "error") setStatus("idle");
                        }}
                        className={cn("h-11 rounded-xl pl-9 text-base")}
                      />
                    </div>
                    <AnimatePresence>
                      {status === "error" && (
                        <motion.p
                          id="cta-email-error"
                          role="alert"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-sm text-destructive"
                        >
                          {errorMessage}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="h-11 w-full rounded-full text-base"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Отправляем…
                      </>
                    ) : (
                      copy.cta
                    )}
                  </Button>

                  <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                    <ShieldCheck className="size-3.5" />
                    Без пароля и без привязки карты
                  </p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
