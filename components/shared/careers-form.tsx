"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { GlassCard } from "@/components/ui/glass-card";

const careersSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  role: z.string().min(2, "Tell us what role you're interested in"),
  resumeUrl: z.string().url("Enter a valid link (LinkedIn, portfolio, or resume)"),
  message: z.string().min(10, "Tell us a bit about yourself (at least 10 characters)"),
});

type CareersValues = z.infer<typeof careersSchema>;

export function CareersForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareersValues>({ resolver: zodResolver(careersSchema) });

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <GlassCard glow className="flex flex-col items-center gap-4 rounded-xl p-12 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="font-heading text-2xl font-bold text-foreground">Application sent</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thanks for reaching out. We&apos;ll review your application and get back to you if
          there&apos;s a fit.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Submit another application
        </Button>
      </GlassCard>
    );
  }

  return (
    <GlassCard glow className="rounded-xl p-8 sm:p-12">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="fullName">Full name</Label>
            <Input
              id="fullName"
              placeholder="Jordan Lee"
              aria-invalid={!!errors.fullName}
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-xs text-red-500">{errors.fullName.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="jordan@email.com"
              aria-invalid={!!errors.email}
              {...register("email")}
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="role">Role you're interested in</Label>
            <Input
              id="role"
              placeholder="Product Designer"
              aria-invalid={!!errors.role}
              {...register("role")}
            />
            {errors.role && <p className="text-xs text-red-500">{errors.role.message}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="resumeUrl">Resume / portfolio link</Label>
            <Input
              id="resumeUrl"
              placeholder="https://linkedin.com/in/jordanlee"
              aria-invalid={!!errors.resumeUrl}
              {...register("resumeUrl")}
            />
            {errors.resumeUrl && (
              <p className="text-xs text-red-500">{errors.resumeUrl.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="message">Tell us about yourself</Label>
          <Textarea
            id="message"
            placeholder="What draws you to 9Doctor, and what would you want to work on?"
            aria-invalid={!!errors.message}
            {...register("message")}
          />
          {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
        </div>

        <Button type="submit" size="lg" disabled={isSubmitting} className="mt-2 w-full sm:w-fit">
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Submit application
            </>
          )}
        </Button>
      </form>
    </GlassCard>
  );
}
