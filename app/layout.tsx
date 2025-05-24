import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uchenna Ofor - Backend Engineer || Full-Stack Developer",
  icons: "/images/vixnewcircle.png",
  description:
    "Uchenna Ofor is a backend-focused engineer with full-stack capabilities. Specializing in scalable backend systems using TypeScript, NestJS, and microservices architecture, with experience integrating React-based frontends for seamless user experiences. Passionate about AI, automation, and system performance.",
  keywords:
    "Backend Engineer, Full-Stack Developer, Microservices, TypeScript, NestJS, Node.js, Golang, Python, AI Integration, Automation, React, REST API, GraphQL, Docker, AWS, Systems Architecture",
  authors: [{ name: "Uchenna Ofor" }],
  openGraph: {
    title: "Uchenna Ofor - Backend Engineer || Full-Stack Developer",
    description:
      "Building scalable backend infrastructure with TypeScript, NestJS, and AI-driven systems. Full-stack capable with experience in React and frontend integration.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uchenna Ofor - Backend Engineer || Full-Stack Developer",
    description:
      "Engineer focused on backend systems, automation, and AI integration. Skilled in TypeScript, NestJS, and React for full-stack performance and scalability.",
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
