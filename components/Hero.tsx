import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-6xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:px-12 md:pb-20 md:pt-32"
    >
      <div className="animate-rise-in flex flex-col items-start">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-2 text-sm font-medium text-primary">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40 motion-reduce:hidden" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          Available for opportunities
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Hello, I&apos;m Patrick Nandom
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl">
          I build digital
          <br />
          products with
          <br />
          <span className="text-primary">purpose.</span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          Full-stack web and mobile developer turning thoughtful ideas into
          reliable, accessible experiences—from the first interface to the
          systems behind it.
        </p>

        <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href="#projects"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Explore my work <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <Link
            href="/résumé.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-card/70 px-6 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            View résumé
          </Link>
          <Link
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-semibold text-muted-foreground transition hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:hidden"
          >
            Get in touch
          </Link>
        </div>

        <div className="mt-9 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin size={16} className="text-primary" aria-hidden="true" />
          Based in Nigeria, working worldwide
        </div>

        <Link
          href="#about"
          className="mt-12 hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground transition hover:text-primary sm:inline-flex"
        >
          Scroll to explore <ArrowDown size={14} aria-hidden="true" />
        </Link>
      </div>

      <div className="animate-rise-in animation-delay-100 relative mx-auto w-full max-w-sm md:max-w-md">
        <div
          aria-hidden="true"
          className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-primary/10 blur-2xl sm:-right-8 sm:-top-8 sm:h-40 sm:w-40"
        />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-secondary shadow-[0_24px_70px_-35px_rgba(20,50,37,0.45)]">
          <Image
            src="/patrick_nandom.jpeg"
            alt="Portrait of Patrick Nandom"
            fill
            priority
            sizes="(max-width: 768px) 85vw, 36vw"
            className="object-cover object-[center_30%]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent p-6 pt-20 text-white sm:p-8 sm:pt-24">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/75">
              Developer · Builder · Learner
            </p>
            <p className="mt-2 text-xl font-medium tracking-tight sm:text-2xl">
              Bringing ideas to life.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-5 -left-3 rounded-2xl border border-border/80 bg-card/95 px-4 py-3 shadow-lg backdrop-blur sm:-left-8 sm:px-5">
          <p className="text-xs font-medium text-muted-foreground">
            Building with
          </p>
          <p className="mt-1 text-sm font-semibold text-foreground">
            React · Next.js · Flutter
          </p>
        </div>
      </div>
    </section>
  );
}
