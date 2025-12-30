import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import ConstellationCanvas from "./components/ConstellationCanvas";
import "./index.css";

function App() {
  useEffect(() => {
    // Add active class to navigation links based on scroll position
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    const handleScroll = () => {
      let current = "";
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we're at the bottom of the page
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        // We're at the bottom, activate the last section (contact)
        current = "contact";
      } else {
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop - 150) {
            current = section.getAttribute("id");
          }
        });
      }

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").slice(1) === current) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Animate on scroll using Intersection Observer
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll(".hero-content > *").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ConstellationCanvas />
      <div className="background-pattern"></div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
    </>
  );
}

export default App;
