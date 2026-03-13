import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto mt-30 px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col gap-6">
        <p className="flex items-center gap-2 text-green-600 text-sm md:text-base">
          <span className="w-2 h-2 md:w-3 md:h-3 bg-green-600 rounded-full"></span>
          Available for work
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug font-semibold text-gray-900 dark:text-white">
          I&apos;m Patrick Nandom
          <br />I build <span className="font-bold">impactful</span> websites
          and apps.
        </h1>
        <p className="mt-4 md:mt-6 text-gray-600 dark:text-gray-400 max-w-lg text-sm sm:text-base md:text-lg">
          Full-stack web and mobile developer passionate about building
          scalable and accessible digital products.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8">
          <Link
            href="#projects"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg fon\t-medium hover:opacity-90 transition dark:bg-white dark:text-gray-900 text-center"
          >
            View Projects
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition dark:border-gray-600 dark:hover:bg-gray-800 text-center"
          >
            View Resume
          </Link>

          <Link
            href="#contact"
            className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition dark:border-gray-600 dark:hover:bg-gray-800 text-center"
          >
            Contact Me →
          </Link>
        </div>
      </div>

      <div className="flex justify-center md:justify-end relative">
        <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 relative z-0">
          <Image
            src="/patrick_nandom.jpeg"
            alt="Patrick Nandom"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="hidden md:block absolute -top-10 -right-10 w-80 h-80 rounded-full bg-gray-200 dark:bg-gray-700 opacity-30 z-[-1]"></div>
      </div>
    </section>
  );
}
