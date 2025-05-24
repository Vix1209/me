import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uchenna Ofor - Software Engineer",
  icons: "/images/vixnewcircle.png",
  description:
    "Experienced Software Engineer specializing in React, Node.js, TypeScript, microservices architecture, and AI integrations. Building scalable, sustainable technology solutions.",
  keywords:
    "Software Engineer, Software Developer, Backend Developer, Backend Engineer, Node.js, TypeScript, Microservices, AI Integration, NestJS, GraphQL, REST API, Docker, AWS",
  authors: [{ name: "Uchenna Ofor" }],
  openGraph: {
    title: "Uchenna Ofor - Software Engineer",
    description:
      "Experienced Software Engineer specializing in React, Node.js, TypeScript, microservices architecture, and AI integrations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uchenna Ofor - Software Engineer",
    description:
      "Building scalable, sustainable technology solutions with Typescript and NestJS. Passionate about automated systems and lightning-fast user experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
