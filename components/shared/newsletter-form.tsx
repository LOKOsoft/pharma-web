"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email address"),
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

export function NewsletterForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({ resolver: zodResolver(newsletterSchema) });

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 3500);
  }

  if (submitted) {
    return (
      <div
        className={cn(
          "flex items-center gap-2 rounded-xl border border-success/20 bg-success/8 px-4 py-3 text-sm font-medium text-success",
          className
        )}
      >
        <CheckCircle2 className="h-4 w-4 shrink-0" />
        You&apos;re subscribed. Welcome aboard!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={className}>
      <div className="flex items-center gap-2">
        <Input
          type="email"
          placeholder="you@clinic.com"
          className="h-11"
          aria-label="Email address"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        <Button
          type="submit"
          size="icon"
          disabled={isSubmitting}
          aria-label="Subscribe"
          className="h-11 w-11 shrink-0"
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      {errors.email && <p className="mt-2 text-xs text-red-500">{errors.email.message}</p>}
    </form>
  );
}
