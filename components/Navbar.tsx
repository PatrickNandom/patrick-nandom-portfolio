"use client";

import { useState, useEffect } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiFillHome,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { BsMoon } from "react-icons/bs";
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
    <nav className="fixed top-4 left-0 right-0 mx-auto max-w-7xl flex items-center justify-between px-6 py-3 rounded-xl bg-white/60 dark:bg-gray-900/70 backdrop-blur-md shadow-md text-gray-900 dark:text-white">
      <div className="text-xl font-bold select-none cursor-default">
        Patrick Nandom
      </div>

      <div className="flex space-x-10 text-lg items-center">
        <Link href="/" className="hover:text-blue-600 transition">
          <AiFillHome />
        </Link>

        <Link
          href="https://github.com/patricknandom"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-800 dark:hover:text-gray-200 transition"
        >
          <AiFillGithub />
        </Link>

        <Link
          href="https://www.linkedin.com/in/patrick-nandom-604ba0297/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-700 transition"
        >
          <AiFillLinkedin />
        </Link>

        <Link
          href="https://twitter.com/patrick_nandom"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaXTwitter />
        </Link>

        <Link
          href="mailto:patrick@example.com"
          className="hover:text-red-600 transition"
        >
          <AiOutlineMail />
        </Link>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hover:text-yellow-400 transition cursor-pointer"
        >
          <BsMoon />
        </button>
      </div>

      <Link
        href="#contact"
        className="inline-flex items-center gap-2 rounded-md border border-gray-900 px-4 py-2 text-sm font-medium hover:bg-gray-900 hover:text-white transition dark:border-white dark:hover:bg-white dark:hover:text-gray-900"
      >
        Contact Me →
      </Link>
    </nav>
  );
}
