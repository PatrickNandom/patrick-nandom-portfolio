import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import TechStack from "@/components/TechStack";
import WorkExperience from "@/components/WorkExperience";
import { Laptop, Smartphone } from "lucide-react";

const services = [
  {
    icon: <Laptop size={22} aria-hidden="true" />,
    title: "Website Development",
    subtitle: "Frontend & backend",
    description:
      "I build responsive web applications with modern frameworks, bringing together thoughtful interfaces and reliable full-stack solutions.",
    tags: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
    ],
  },
  {
    icon: <Smartphone size={22} aria-hidden="true" />,
    title: "Mobile App Development",
    subtitle: "Cross-platform · Flutter",
    description:
      "I create cross-platform mobile applications for iOS and Android using Flutter and Dart.",
    tags: ["Flutter", "Dart"],
  },
];

const highlights = [
  {
    number: "1+ yr",
    title: "Professional experience",
    detail: "Building full-stack products with development teams.",
  },
  {
    number: "B.Sc.",
    title: "Computer Science",
    detail: "Ahmadu Bello University, Zaria, Nigeria.",
  },
  {
    number: "Always",
    title: "Learning and exploring",
    detail: "Currently exploring AI engineering.",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
        <section
          id="about"
          className="grid gap-10 border-t border-border/80 py-20 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:py-28"
        >
          <div>
            <SectionTitle
              eyebrow="A little about me"
              title="Thoughtful engineering, built around people."
            />
          </div>
          <div>
            <div className="space-y-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              <p>
                I&apos;m a full-stack developer with a background in computer
                science, passionate about building modern web and mobile
                applications that are both functional and user-friendly. I
                enjoy transforming ideas into real products, whether it&apos;s
                crafting responsive interfaces on the frontend or developing
                reliable systems on the backend.
              </p>
              <p>
                My experience across the stack allows me to approach problems
                from different perspectives and build solutions that are
                scalable and maintainable. I&apos;m constantly learning and
                exploring new technologies to improve how I design and build
                software.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <article
                  key={highlight.title}
                  className="rounded-2xl border border-border/80 bg-card/70 p-4"
                >
                  <p className="text-xl font-semibold tracking-tight text-primary">
                    {highlight.number}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {highlight.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="border-t border-border/80 py-20 md:py-28"
        >
          <div className="mb-9 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionTitle
              eyebrow="My toolkit"
              title="The right tools for the job."
            />
            <p className="max-w-sm text-sm leading-6 text-muted-foreground md:pb-1">
              Technologies I use to design, build, and ship dependable digital
              products.
            </p>
          </div>
          <TechStack />
        </section>

        <section
          id="services"
          className="border-t border-border/80 py-20 md:py-28"
        >
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionTitle
              eyebrow="How I can help"
              title="From idea to a product people can use."
            />
            <p className="max-w-sm text-sm leading-6 text-muted-foreground md:pb-1">
              Web and mobile development grounded in practical engineering and
              thoughtful design.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="border-t border-border/80 py-20 md:py-28"
        >
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionTitle
              eyebrow="Selected work"
              title="Projects, in progress."
            />
            <p className="max-w-sm text-sm leading-6 text-muted-foreground md:pb-1">
              I&apos;m preparing project write-ups. In the meantime, you can
              explore my code and experiments on GitHub.
            </p>
          </div>
          <a
            href="https://github.com/PatrickNandom"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col gap-6 overflow-hidden rounded-3xl border border-border/80 bg-card/75 p-6 transition hover:border-primary/30 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between sm:p-8"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Open source · GitHub
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Follow what I&apos;m building
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                Visit my profile to see repositories, experiments, and the
                technologies I work with.
              </p>
            </div>
            <span className="inline-flex min-h-11 w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition group-hover:-translate-y-0.5">
              Visit GitHub <span aria-hidden="true">↗</span>
            </span>
          </a>
        </section>

        <section
          id="experience"
          className="border-t border-border/80 py-20 md:py-28"
        >
          <div className="grid gap-4 md:grid-cols-[0.75fr_1.25fr] md:gap-12">
            <div>
              <SectionTitle
                eyebrow="Career journey"
                title="Experience that keeps me growing."
              />
            </div>
            <WorkExperience />
          </div>
        </section>

        <section
          id="contact"
          className="grid gap-10 border-t border-border/80 py-20 md:grid-cols-[0.8fr_1.2fr] md:gap-14 md:py-28"
        >
          <div>
            <SectionTitle
              eyebrow="Have something in mind?"
              title="Let’s make it happen."
            />
            <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
              Have a project in mind? Let&apos;s discuss how we can work
              together to bring your ideas to life.
            </p>
            <a
              href="mailto:patricknandom82@gmail.com"
              className="mt-7 inline-flex rounded-full py-2 text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition hover:decoration-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              patricknandom82@gmail.com
            </a>
          </div>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
