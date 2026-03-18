import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import TechStack from "@/components/TechStack";
import { StatCard } from "@/components/ui/stat-card";
import { Clock, Laptop, Layers, Smartphone, Star, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    {
      icon: <Laptop size={24} />,
      title: "Website Development",
      subtitle: "Frontend & Backend",
      description:
        "I build responsive, web applications using modern frameworks. I deliver full-stack solutions that are fast, secure, and user-friendly.",
      tags: [
        "Javascript",
        "React",
        "NextJs",
        "TypeScript",
        "NodeJs",
        "Spring Boot",
      ],
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile App Development",
      subtitle: "Flutter",
      description:
        "I create cross-platform mobile applications that work on iOS and Android. Using Flutter & Dart.",
      tags: ["Flutter", "Dart"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen items-center justify-center px-4 sm:px-6 md:px-12">
      <Hero />

      <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-center w-full max-w-7xl">
        My Programming Languages and Frameworks
      </h3>

      <div className="w-full max-w-7xl">
        <TechStack />
      </div>

      <div
        id="about"
        className="flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 py-12 md:py-20"
      >
        <SectionTitle title="About Me" />

        <div className="mt-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="flex flex-col gap-4">
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed dark:text-white">
              I&apos;m a full-stack developer with a background in computer
              science, passionate about building modern web and mobile
              applications that are both functional and user-friendly. I enjoy
              transforming ideas into real products, whether it&apos;s crafting
              responsive interfaces on the frontend or developing reliable
              systems on the backend.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed dark:text-white">
              My experience across the stack allows me to approach problems from
              different perspectives and build solutions that are scalable and
              maintainable. I&apos;m constantly learning and exploring new
              technologies to improve how I design and build software.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                num: "1+ yr",
                desc: "Professional full-stack development experience",
              },
              {
                num: "B.Sc.",
                desc: "Computer Science ABU Zaria, Nigeria",
              },
              {
                num: "∞",
                desc: "Always learning currently exploring AI engineering",
              },
            ].map((stat) => (
              <div
                key={stat.num}
                className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4 sm:p-5"
              >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-gray-900 flex items-center justify-center text-white text-xs font-bold">
                  {stat.num}
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-snug pt-1">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
        <StatCard
          icon={<Layers size={28} />}
          value={4}
          label="Projects Completed"
        />

        <StatCard icon={<Users size={28} />} value={0} label="Happy Clients" />

        <StatCard
          icon={<Clock size={28} />}
          value={1}
          label="Years of Experience"
        />
        <StatCard
          suffix="%"
          icon={<Star size={28} />}
          value={0}
          label="Client Satisfaction"
        />
      </div>

      <div
        id="services"
        className="flex flex-col items-center justify-center w-full max-w-7xl"
      >
        <SectionTitle title="Services" className="mt-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 mt-10">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>

      <div id="projects" className="flex flex-col items-center justify-center">
        <SectionTitle title="Featured Projects" className="mt-8" />
        <p className="mt-10 ">In progress...</p>
      </div>
      <div
        id="experience"
        className="flex flex-col items-center justify-center"
      >
        <SectionTitle title="Work Experience" className="mt-8" />
        <p className="mt-10 ">In progress...</p>
      </div>

      <div id="contact" className="flex flex-col items-center justify-center">
        <SectionTitle title="Get In Touch" className="mt-8" />
        <p className="text-gray-400 my-8">
          Have a project in mind? Let&apos;s discuss how we can work together to
          bring your ideas to life.
        </p>
        <ContactForm />
      </div>

      <hr className="w-full max-w-7xl border-t border-gray-400 mt-20 mb-6 mx-auto" />
      <div className="flex flex-wrap justify-center gap-6 text-gray-700 font-medium mb-12 w-full max-w-7xl">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-blue-600 transition"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
