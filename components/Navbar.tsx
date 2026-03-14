"use client";

import { useState, useEffect } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiFillHome,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { BsMoon, BsSun } from "react-icons/bs";
import Link from "next/link";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 md:px-10 py-3 rounded-xl bg-white/60 dark:bg-gray-900/70 backdrop-blur-md shadow-md text-gray-900 dark:text-white flex items-center max-w-7xl mx-auto">
      <div className="hidden sm:block font-bold text-xl select-none">
        PATRICK
      </div>

      <div className="flex flex-1 justify-center space-x-8 text-lg items-center">
        <Link href="/" className="hover:text-blue-600 transition">
          <AiFillHome />
        </Link>

        <a
          href="https://github.com/patricknandom"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-800 dark:hover:text-gray-200 transition"
        >
          <AiFillGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/patrick-nandom-604ba0297/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-700 transition"
        >
          <AiFillLinkedin />
        </a>

        <a
          href="https://twitter.com/patrick_nandom"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaXTwitter />
        </a>

        <a
          href="mailto:patricknandom82@gmail.com"
          className="hover:text-red-600 transition"
        >
          <AiOutlineMail />
        </a>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hover:text-yellow-400 transition"
        >
          {darkMode ? <BsSun /> : <BsMoon />}
        </button>
      </div>

      <div className="hidden sm:block">
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md border border-gray-900 px-4 py-2 text-sm font-medium hover:bg-gray-900 hover:text-white transition dark:border-white dark:hover:bg-white dark:hover:text-gray-900"
        >
          Contact Me →
        </Link>
      </div>
    </nav>
  );
}
