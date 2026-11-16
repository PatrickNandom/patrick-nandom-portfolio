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

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/2347051214881", icon: FaWhatsapp },
  { label: "GitHub", href: "https://github.com/PatrickNandom", icon: FaGithub },
  { label: "X", href: "https://x.com/patrick_nandom", icon: FaXTwitter },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/patrick-nandom-604ba0297/",
    icon: FaLinkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/patrick.nandom.31",
    icon: FaFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/patrick.nandom",
    icon: FaInstagram,
  },
  { label: "TikTok", href: tikTokUri, icon: FaTiktok },
  {
    label: "Email",
    href: "mailto:patricknandom82@gmail.com?subject=Hello%20Patrick&body=I%20saw%20your%20portfolio.",
    icon: FaEnvelope,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-8 w-full max-w-6xl px-5 pb-8 sm:px-8 md:px-12">
      <div className="flex flex-col gap-7 border-t border-border/80 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a
            href="#top"
            className="text-sm font-semibold tracking-tight text-foreground transition hover:text-primary"
          >
            Patrick Nandom
          </a>
          <p className="mt-1 text-xs text-muted-foreground">
            Full-stack web &amp; mobile developer
          </p>
        </div>

        <nav aria-label="Social links" className="flex flex-wrap gap-2">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
              aria-label={label}
              className="grid size-10 place-items-center rounded-full border border-border bg-card/70 text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/5 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Icon size={17} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
      <div className="flex flex-col gap-3 border-t border-border/60 pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {year} Patrick Nandom. All rights reserved.</p>
        <a
          href="#top"
          className="w-fit rounded py-1 font-medium transition hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
