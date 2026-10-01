import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shamilk.in"),
  title: {
    default: "Shamil K | Full Stack Developer & Software Engineer",
    template: "%s | Shamil K",
  },
  description:
    "Shamil K is a Full Stack Developer from Kerala, India, specializing in modern web applications, scalable backends, and responsive UIs with Next.js, React, Node.js, Express, MongoDB, and TypeScript. Explore projects, case studies, and contact details at shamilk.in.",
  keywords: [
    "Shamil K",
    "Shamil",
    "Shamil K developer",
    "Shamil K portfolio",
    "Shamil K full stack developer",
    "shamilk.in",
    "shamilk",
    "Shamil developer Kerala",
    "Full Stack Developer India",
    "Software Engineer Shamil K",
    "Web Developer Shamil",
    "Next.js Developer",
    "React Developer",
    "MERN Stack Developer",
  ],
  authors: [{ name: "Shamil K", url: "https://shamilk.in" }],
  creator: "Shamil K",
  publisher: "Shamil K",
  applicationName: "Shamil K Portfolio",
  alternates: {
    canonical: "https://shamilk.in",
  },
  openGraph: {
    type: "profile",
    firstName: "Shamil",
    lastName: "K",
    username: "Shamil2k7",
    gender: "male",
    url: "https://shamilk.in",
    siteName: "Shamil K — Full Stack Developer",
    title: "Shamil K | Full Stack Developer & Software Engineer",
    description:
      "Official portfolio of Shamil K — Full Stack Developer building modern web applications with Next.js, React, Node.js, and TypeScript. Explore projects, skills, and get in touch.",
    images: [
      {
        url: "/profileimage.png",
        width: 1200,
        height: 630,
        alt: "Shamil K — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shamil K | Full Stack Developer & Software Engineer",
    description:
      "Explore the portfolio of Shamil K — Full Stack Developer specializing in Next.js, React, Node.js, and TypeScript.",
    images: ["/profileimage.png"],
    creator: "@shamil2k7",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/profileimage.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://shamilk.in/#person",
      "name": "Shamil K",
      "alternateName": ["Shamil", "shamilk", "Shamil Developer", "Shamil K Developer"],
      "url": "https://shamilk.in",
      "image": "https://shamilk.in/profileimage.png",
      "jobTitle": "Full Stack Developer",
      "email": "shamil2k7g@gmail.com",
      "nationality": {
        "@type": "Country",
        "name": "India",
      },
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Kerala",
        "addressCountry": "India",
      },
      "sameAs": [
        "https://github.com/Shamil2k7",
        "https://github.com/Shamil-2k7",
        "https://www.linkedin.com/in/shamil-k-575936387/",
      ],
      "knowsAbout": [
        "Full Stack Development",
        "Web Development",
        "Software Engineering",
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "REST APIs",
      ],
      "description":
        "Shamil K is a Full Stack Developer from Kerala, India, specializing in building high-performance web applications with Next.js, React, Node.js, and TypeScript.",
    },
    {
      "@type": "WebSite",
      "@id": "https://shamilk.in/#website",
      "url": "https://shamilk.in",
      "name": "Shamil K — Full Stack Developer Portfolio",
      "description": "Official portfolio website of Shamil K, Full Stack Developer and Software Engineer.",
      "publisher": {
        "@id": "https://shamilk.in/#person",
      },
      "inLanguage": "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://shamilk.in/#profilepage",
      "url": "https://shamilk.in",
      "name": "Shamil K — Developer Profile",
      "isPartOf": {
        "@id": "https://shamilk.in/#website",
      },
      "mainEntity": {
        "@id": "https://shamilk.in/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
