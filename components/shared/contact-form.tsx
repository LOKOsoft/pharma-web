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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GlassCard } from "@/components/ui/glass-card";

const contactSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  organization: z.string().min(2, "Enter your organization name"),
  role: z.string().min(1, "Select your role"),
  message: z.string().min(10, "Tell us a bit more (at least 10 characters)"),
});

type ContactValues = z.infer<typeof contactSchema>;

const roles = [
  "Hospital Administrator",
  "Clinic Owner",
  "Doctor / Physician",
  "Receptionist / Front Desk",
  "Pharmacist",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  const role = watch("role");

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <GlassCard glow className="flex flex-col items-center gap-4 p-12 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="font-heading text-2xl font-bold text-foreground">Message sent</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thanks for reaching out. Our team will get back to you within one business day to
          schedule your personalized demo.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </GlassCard>
    );
  }

  return (
    <GlassCard glow className="p-8 sm:p-10">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="fullName">Full name</Label>
            <Input
              id="fullName"
              placeholder="Dr. Ananya Bose"
              aria-invalid={!!errors.fullName}
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-xs text-red-500">{errors.fullName.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Work email</Label>
            <Input
              id="email"
              type="email"
              placeholder="amelia@hospital.com"
              aria-invalid={!!errors.email}
              {...register("email")}
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="organization">Organization</Label>
            <Input
              id="organization"
              placeholder="Northbridge General Hospital"
              aria-invalid={!!errors.organization}
              {...register("organization")}
            />
            {errors.organization && (
              <p className="text-xs text-red-500">{errors.organization.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="role">Your role</Label>
            <Select value={role} onValueChange={(value) => setValue("role", value, { shouldValidate: true })}>
              <SelectTrigger id="role" aria-invalid={!!errors.role}>
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((r) => (
                  <SelectItem key={r} value={r}>
                    {r}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.role && <p className="text-xs text-red-500">{errors.role.message}</p>}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="message">How can we help?</Label>
          <Textarea
            id="message"
            placeholder="Tell us about your practice and what you're looking for..."
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
              Send Message
            </>
          )}
        </Button>
      </form>
    </GlassCard>
  );
}
