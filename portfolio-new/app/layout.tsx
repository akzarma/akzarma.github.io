import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshay Kumar Sharma - Staff Software Engineer",
  description:
    "Experienced Software Engineer specializing in scalable web applications and AI-driven interfaces. Proficient in React.js, Python, and cloud technologies.",
  keywords: [
    "Software Engineer",
    "React.js",
    "Next.js",
    "Python",
    "Full Stack Developer",
    "AI",
  ],
  authors: [{ name: "Akshay Kumar Sharma" }],
  openGraph: {
    title: "Akshay Kumar Sharma - Staff Software Engineer",
    description:
      "Experienced Software Engineer specializing in scalable web applications and AI-driven interfaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
