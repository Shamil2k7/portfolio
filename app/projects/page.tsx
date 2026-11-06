import type { Metadata } from "next";
import AllProjectsClient from "./AllProjectsClient";

export const metadata: Metadata = {
  title: "All Projects & Products | Shamil K — Full Stack Developer",
  description:
    "Explore the complete portfolio of software engineering projects, enterprise ERP & POS systems, e-commerce applications, and digital platforms built by Shamil K.",
  alternates: {
    canonical: "https://shamilk.in/projects",
  },
  openGraph: {
    title: "All Projects & Products | Shamil K",
    description:
      "Explore the complete portfolio of enterprise ERPs, production systems, and modern web applications engineered by Shamil K.",
    url: "https://shamilk.in/projects",
    type: "website",
    images: [
      {
        url: "/profileimage.png",
        width: 1200,
        height: 630,
        alt: "Shamil K — All Projects Portfolio",
      },
    ],
  },
};

export default function ProjectsPage() {
  return <AllProjectsClient />;
}
