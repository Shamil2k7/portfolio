"use client";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";


import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import EducationTimeline from "./components/EducationTimeline";


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SplashScreen loading={loading} />

      {!loading && (
        <>
        <Nav/>
          <Hero />
          <About />
          <Skills/>
          <Projects/>
          <EducationTimeline/>
          <Contact/>
          <WhatsAppButton />
        </>
      )}
    </>
  );
}
