import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
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
    <main className="flex flex-col min-h-screen items-center justify-center px-4 sm:px-6 md:px-12">
      <Hero />
      <h3 className="mt-12 text-2xl sm:text-2xl md:text-3xl font-bold text-center md:text-left w-full max-w-7xl">
        My Programming Languages and Frameworks
      </h3>

      <hr className="w-full lg:w-4/5 border-t border-gray-400 my-6 mx-auto" />

      <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-gray-700 font-medium mb-12 w-full max-w-7xl">
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
      <Footer />
    </main>
  );
}
