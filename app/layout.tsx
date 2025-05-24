import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uchenna Ofor - Backend Engineer & Microservices Architect",
  description:
    "Experienced Backend Engineer specializing in Node.js, TypeScript, microservices architecture, and AI integrations. Building scalable, sustainable technology solutions.",
  keywords:
    "Backend Engineer, Node.js, TypeScript, Microservices, AI Integration, NestJS, GraphQL, REST API, Docker, AWS",
  authors: [{ name: "Uchenna Ofor" }],
  openGraph: {
    title: "Uchenna Ofor - Backend Engineer & Microservices Architect",
    description:
      "Experienced Backend Engineer specializing in Node.js, TypeScript, microservices architecture, and AI integrations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uchenna Ofor - Backend Engineer",
    description:
      "Building scalable, sustainable technology solutions with Node.js and microservices.",
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
