"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";

type RevealDirection = "up" | "down" | "left" | "right" | "scale" | "none";

export interface RevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

const offset = 28;

const variantsFor = (direction: RevealDirection): Variants => {
  switch (direction) {
    case "up":
      return { hidden: { opacity: 0, y: offset }, show: { opacity: 1, y: 0 } };
    case "down":
      return { hidden: { opacity: 0, y: -offset }, show: { opacity: 1, y: 0 } };
    case "left":
      return { hidden: { opacity: 0, x: offset }, show: { opacity: 1, x: 0 } };
    case "right":
      return { hidden: { opacity: 0, x: -offset }, show: { opacity: 1, x: 0 } };
    case "scale":
      return { hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1 } };
    default:
      return { hidden: { opacity: 0 }, show: { opacity: 1 } };
  }
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
  once = true,
  amount = 0.25,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variantsFor(direction)}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
  amount = 0.2,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  direction = "up",
  duration = 0.6,
  className,
}: {
  children: React.ReactNode;
  direction?: RevealDirection;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={variantsFor(direction)}
      transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
