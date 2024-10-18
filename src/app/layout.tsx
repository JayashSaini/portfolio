import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";

// Font
const lato = Lexend({ weight: "400", subsets: ["latin"] });

// Metadata for SEO
export const metadata: Metadata = {
  title: "Jayash.dev - MERN Stack Developer Portfolio",
  description:
    "Explore Jayash Saini's portfolio, an experienced MERN stack developer specializing in full-stack web development with expertise in React, Node.js, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Explore Jayash Saini's portfolio, an experienced MERN stack developer specializing in full-stack web development."
        />
        <meta
          name="keywords"
          content="Jayash Saini, MERN Stack Developer, Portfolio, Web Development, Full-Stack, React, Next.js, Node.js"
        />
        <meta name="author" content="Jayash Saini" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://jayash-dev.vercel.app" />

        {/* Open Graph and Twitter Meta Tags */}
        <meta
          property="og:title"
          content="Jayash.dev - Experienced MERN Stack Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore Jayash Saini's portfolio, an experienced MERN stack developer showcasing projects and skills in full-stack web development."
        />
        <meta property="og:image" content="/path-to-portfolio-image.jpg" />
        <meta property="og:url" content="https://jayash-dev.vercel.app" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Jayash.dev - Experienced MERN Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Check out Jayash Saini's portfolio showcasing projects, skills, and experience in MERN stack development."
        />
        <meta name="twitter:image" content="/path-to-twitter-image.jpg" />

        {/* Preconnect for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="use-credentials"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@400&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@400&display=swap"
          rel="stylesheet"
        />

        {/* External Styles */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/dheereshagrwal/colored-icons@1.7.5/src/app/ci.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            name: "Jayash Saini",
            url: "https://jayash-dev.vercel.app",
            jobTitle: "Full Stack Developer",
            worksFor: {
              "@type": "Organization",
              name: "Freelance",
            },
            sameAs: [
              "https://github.com/JayashSaini/",
              "https://www.linkedin.com/in/jayash-saini-371bb0267/",
            ],
            knowsAbout: [
              "MERN Stack",
              "Full-Stack Web Development",
              "React",
              "Next.js",
              "Node.js",
              "Express.js",
              "HTML",
              "JavaScript",
              "CSS",
              "MongoDB",
              "MySQL",
            ],
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Parishkar College of Global Excellence",
            },
            project: [
              {
                "@type": "Real Time Chat Platform",
                name: "ChicChat",
                url: "https://chicchat.vercel.app/",
                description:
                  "Developed ChicChat, a real-time chat and video streaming web app using the MERN stack and Socket.IO for seamless messaging and low-latency video calls.",
                programmingLanguage:
                  "React.js, Express.js, Node.js, MongoDB, TypeScript",
              },
              {
                "@type": "Online Learning Platform",
                name: "WebWorld",
                url: "https://webworld.vercel.app/",
                description:
                  "An online learning platform designed for aspiring web developers, offering comprehensive resources to help grow as a developer.",
                programmingLanguage:
                  "React.js, Express.js, Node.js, MongoDB, TypeScript",
              },
            ],
          })}
        </script>
      </head>
      <body className={`${lato.className} first-color overflow-x-hidden`}>
        <Navbar />
        {children}
        <Analytics />
        <Toaster position="top-center" className="bg-black" />
      </body>
    </html>
  );
}
