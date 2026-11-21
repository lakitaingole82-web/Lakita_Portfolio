import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lakita Ingole | Aspiring AI/ML Engineer",

  description:
    "Professional portfolio of Lakita Rajendra Ingole, a B.Tech Computer Science and Engineering student aspiring to become an AI/ML Engineer and Web Developer. Explore her Python, AI/ML, web development, projects, leadership, education, and certifications.",

  keywords: [
    "Lakita Ingole",
    "AI and Machine Learning",
    "Python Developer",
    "Artificial Intelligence",
    "Machine Learning",
    "Python Programming",
    "Software Engineer",
    "Web Development",
    "Student Portfolio",
    "Technical Projects",
  ],

  authors: [{ name: "Lakita Rajendra Ingole" }],

  openGraph: {
    title: "Lakita Ingole | Aspiring AI/ML Engineer",
    description:
      "Aspiring AI/ML Engineer and Web Developer pursuing B.Tech Computer Science and Engineering. Explore Lakita's Python, machine learning, web development, projects, leadership, education, and certifications.",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lakita Ingole | Aspiring AI/ML Engineer",
    description:
      "B.Tech Computer Science and Engineering student focused on AI/ML, Python, Web Development, projects, and leadership.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0c14",
  width: "device-width",

  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a0c14] text-slate-100 antialiased selection:bg-sky-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
