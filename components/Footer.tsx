import { tikTokUri } from "@/types/type";
import {
  FaWhatsapp,
  FaGithub,
  FaXTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center mb-10 text-center px-6">
      <h2 className="text-xl font-serif font-semibold animate-bounce animation-duration-[3s]">
        Connect With Me
      </h2>
      <div className="flex flex-wrap justify-center gap-6 mt-6 text-2xl sm:text-3xl text-gray-600">
        <a
          href="https://wa.me/2347051214881"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://github.com/PatrickNandom"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/patrick_nandom"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/patrick-nandom-604ba0297/"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/patrick.nandom.31"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/patrick.nandom"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaInstagram />
        </a>
        <a
          href={tikTokUri}
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaTiktok />
        </a>

        <a
          href="mailto:patricknandom82@gmail.com?subject=Hello%20Patrick&body=I%20saw%20your%20portfolio."
          className="hover:text-red-500 hover:scale-110 transition-colors"
        >
          <FaEnvelope />
        </a>
      </div>
      <p className="mt-6 text-gray-500 text-sm sm:text-base">
        &copy; {year} Patrick Nandom. All rights reserved.
      </p>
    </footer>
  );
}
