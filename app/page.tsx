import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import TechStack from "@/components/TechStack";
import Link from "next/link";

export default function Home() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
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
      <div id="about">
        <SectionTitle title="About Me" />
        <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          I&apos;m a full-stack developer with a background in computer science,
          passionate about building modern web and mobile applications that are
          both functional and user-friendly. I enjoy transforming ideas into
          real products, whether it&apos;s crafting responsive interfaces on the
          frontend or developing reliable systems on the backend.
        </p>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          My experience across the stack allows me to approach problems from
          different perspectives and build solutions that are scalable and
          maintainable. I&apos;m constantly learning and exploring new
          technologies to improve how I design and build software.
        </p>
      </div>

      <div id="services" className="flex flex-col items-center justify-center">
        <SectionTitle title="Services" className="mt-8" />
        <p className="mt-10 ">In progress...</p>
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

      <hr className="w-full lg:w-4/5 border-t border-gray-400 mt-20 mb-6 mx-auto" />
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
