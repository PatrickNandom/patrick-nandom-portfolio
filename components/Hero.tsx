import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
        {/* Status */}
        <p className="flex items-center gap-2 text-green-600 text-sm mb-4">
          <span className="w-2 h-2 bg-green-600 rounded-full"></span>
          Available for work
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
          I&apos;m Patrick Nandom
          <br />I build <span className="font-extrabold">impactful</span>{" "}
          websites and apps.
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-xl">
          Full-stack web and mobile developer passionate about building
          scalable, accessible, and human-centered digital products.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <Link
            href="#projects"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition dark:bg-white dark:text-gray-900"
          >
            View Projects
          </Link>

          <Link
            href="#contact"
            className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition dark:border-gray-600 dark:hover:bg-gray-800"
          >
            Contact Me →
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:justify-end">
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700">
          <Image
            src="/patrick.jpeg"
            alt="Patrick Nandom"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
