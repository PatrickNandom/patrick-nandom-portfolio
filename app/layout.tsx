import "@/app/globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Patrick Nandom Fullstack Developer",
  description: "My developer portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
