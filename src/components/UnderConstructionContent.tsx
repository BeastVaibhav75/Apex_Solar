"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSolarHero from "./AnimatedSolarHero";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function UnderConstructionContent() {
  return (
    <motion.div
      className="relative flex min-h-[100dvh] flex-col"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <motion.div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-solar-yellow/20 blur-3xl" />
        <motion.div
          className="absolute -left-16 bottom-1/4 h-56 w-56 rounded-full bg-solar-blue-light/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <header className="relative z-10 shrink-0 px-6 pt-3 pb-0 sm:px-10">
        <motion.div variants={item}>
          <Image
            src="/Logo_Tp.png"
            alt="Apex Solar Infra Pvt Ltd"
            width={560}
            height={186}
            className="block h-24 w-auto sm:h-28 md:h-32"
            priority
          />
        </motion.div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center gap-4 px-6 pb-12 lg:flex-row lg:items-center lg:gap-8 lg:px-10 lg:pb-0">
        <div className="flex min-h-0 min-w-0 flex-1 flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <motion.span
            variants={item}
            className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-solar-blue/15 bg-white/70 px-5 py-2 text-base font-medium text-solar-blue shadow-sm backdrop-blur-sm sm:text-lg"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-solar-yellow opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-solar-yellow" />
            </span>
            Site under construction
          </motion.span>

          <motion.h1
            variants={item}
            className="max-w-2xl text-5xl font-bold leading-[1.1] tracking-tight text-solar-blue sm:text-6xl lg:text-7xl"
          >
            We&apos;re building something{" "}
            <span className="bg-gradient-to-r from-solar-blue-light to-solar-yellow bg-clip-text text-transparent">
              brighter
            </span>
            .
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-solar-blue/80 sm:text-xl lg:text-2xl"
          >
            Our new website is on the way. Apex Solar provides professional
            solar panel installation, maintenance, and renewable energy
            solutions — we&apos;ll be back online soon.
          </motion.p>

          <motion.div variants={item} className="mt-10 w-full max-w-lg">
            <motion.div className="h-3 overflow-hidden rounded-full bg-solar-blue/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-solar-blue via-solar-blue-light to-solar-yellow animate-progress"
              />
            </motion.div>
            <p className="mt-4 text-base font-medium text-solar-blue/60 sm:text-lg">
              Powering up — check back shortly
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex justify-center lg:justify-start"
          >
            <a
              href="https://wa.me/917988449943"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-solar-blue px-8 py-4 text-base font-semibold text-white shadow-lg shadow-solar-blue/25 transition hover:bg-solar-blue/90 sm:text-lg"
            >
              Contact us
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="flex min-h-0 w-full min-w-0 flex-1 items-center justify-center lg:max-w-4xl xl:max-w-5xl [&_img]:max-h-[40vh] [&_img]:w-auto [&_img]:object-contain lg:[&_img]:max-h-[48vh]"
        >
          <AnimatedSolarHero />
        </motion.div>
      </main>

      <motion.footer
        variants={item}
        className="relative z-10 shrink-0 border-t border-solar-blue/10 bg-white/40 px-6 py-2 text-center text-base text-solar-blue/60 backdrop-blur-sm sm:text-lg"
      >
        © {new Date().getFullYear()} Apex Solar. All rights reserved.
      </motion.footer>
    </motion.div>
  );
}
