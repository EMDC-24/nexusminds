"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ScanLine,
  Car,
  Database,
  TrendingUp,
  ShieldCheck,
  Upload,
  RefreshCw,
  FileBarChart,
  ArrowRight,
} from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const steps = [
  {
    icon: ScanLine,
    title: "Capture the window sticker",
    text: "Snap or upload the Monroney label. Our computer-vision model reads every line — options, packages, MSRP and factory data — with no manual entry.",
  },
  {
    icon: Car,
    title: "Cross-reference the VIN",
    text: "We decode the VIN and match it against official VIN data, flagging any mismatch between the sticker, the VIN and the vehicle in front of you.",
  },
  {
    icon: Database,
    title: "Pull live valuations",
    text: "Truebook calls J.D. Power, Kelley Blue Book (KBB), NADA and more to pull current market valuations for the exact trim and configuration.",
  },
  {
    icon: TrendingUp,
    title: "Update inventory automatically",
    text: "Revalued figures push straight into your inventory and DMS, so every car on the lot carries an accurate, defensible number.",
  },
];

const features = [
  {
    icon: RefreshCw,
    title: "Real-time revaluation",
    text: "Market values shift daily. Truebook re-prices inventory on a schedule you control.",
  },
  {
    icon: ShieldCheck,
    title: "VIN-level accuracy",
    text: "Sticker, VIN and decode data are reconciled before a single number is written.",
  },
  {
    icon: Upload,
    title: "Bulk processing",
    text: "Value an entire lot by uploading a batch of stickers or a VIN list in one go.",
  },
  {
    icon: FileBarChart,
    title: "Audit-ready trail",
    text: "Every valuation is logged with its source, so deals survive any scrutiny.",
  },
  {
    icon: Database,
    title: "Multi-source data",
    text: "J.D. Power, KBB, NADA and additional feeds combined into one view.",
  },
  {
    icon: Car,
    title: "Dealership-first",
    text: "Built around how lots, sales desks and F&I teams actually work.",
  },
];

const sources = ["J.D. Power", "Kelley Blue Book", "NADA", "Edmunds", "Black Book", "Manheim"];

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`mx-auto max-w-7xl px-6 md:px-10 ${className}`}>
    {children}
  </section>
);

export default function TruebookPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/truebook-hero.jpg"
            alt="Truebook AI"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 text-white">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-light uppercase tracking-[0.25em] text-white/70">
              Nexus Minds · Product
            </span>
            <h1 className="mt-4 text-5xl font-light leading-tighter tracking-tight md:text-7xl">
              Truebook AI
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light text-white/80 md:text-xl">
              AI that reads a car&apos;s window sticker, decodes its VIN, and updates
              valuations from J.D. Power, KBB, and NADA — so dealerships always know
              exactly what their inventory is worth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 text-md font-light text-black"
              >
                Book a demo
              </Link>
              <a
                href="#how"
                className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-md font-light backdrop-blur"
              >
                See how it works
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM / INTRO */}
      <Section className="py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16"
        >
          <div>
            <h2 className="text-3xl font-light leading-tight tracking-tight md:text-5xl">
              Valuations go stale the moment a car hits the lot.
            </h2>
          </div>
          <div className="space-y-5 text-lg font-light text-stone-600">
            <p>
              Most dealerships price inventory from a sticker that was printed months
              before the car arrived — then hope the number still holds. By the time a
              vehicle is on the floor, options get misread, VINs get mistyped, and
              market values have already moved.
            </p>
            <p>
              Truebook AI closes that gap. It treats the window sticker, the VIN and
              live market data as one connected source of truth, and keeps every unit
              priced to what it&apos;s actually worth today.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-stone-950 py-20 text-white md:py-28">
        <Section>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <h2 className="text-3xl font-light leading-tight tracking-tight md:text-5xl">
              How it works
            </h2>
            <p className="mt-4 max-w-2xl text-lg font-light text-white/70">
              Four steps from a sticker on the glass to a revalued unit in your system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#5227FF]/20 text-[#9d7bff]">
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="mb-2 text-sm font-light text-white/50">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-light tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-white/60">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>
      </section>

      {/* FEATURES */}
      <Section className="py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-3xl font-light leading-tight tracking-tight md:text-5xl">
            Built for dealerships
          </h2>
          <p className="mt-4 max-w-2xl text-lg font-light text-stone-600">
            The capabilities that matter on a lot, not a lab.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="rounded-2xl border border-stone-200 bg-white p-7"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 text-stone-800">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-light tracking-tight">{f.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-stone-600">
                {f.text}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* DATA SOURCES */}
      <section className="border-y border-stone-200 bg-stone-50 py-16">
        <Section>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-light tracking-tight md:text-4xl">
              Valuations pulled from the sources you already trust
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {sources.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-stone-300 bg-white px-5 py-2 text-sm font-light text-stone-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </Section>
      </section>

      {/* CTA */}
      <section className="bg-[#5227FF] py-20 text-white md:py-28">
        <Section>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl font-light leading-tight tracking-tight md:text-5xl">
                Put an accurate number on every car you sell.
              </h2>
              <p className="mt-4 text-lg font-light text-white/80">
                See Truebook AI value a unit live, or talk to us about wiring it into
                your inventory stack.
              </p>
            </div>
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full bg-white px-7 py-3 text-md font-light text-black"
            >
              Book a demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </Section>
      </section>

      <Footer />
    </>
  );
}
