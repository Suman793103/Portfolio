import React from "react";

const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="hero" id="home">
      <div className="hero-content">
        <h1>Hi,</h1>
        <h2>
          I'm <span className="highlight">Suman Kumar</span>
        </h2>
        <h2>Java Developer</h2>
        <div className="contact-info">
          <p>
            <i className="fas fa-phone"></i> +91 6207337262
          </p>
          <p>
            <i className="fas fa-envelope"></i> sumanofib.12@gmail.com
          </p>
        </div>
        <button className="contact-btn" onClick={handleContactClick}>
          Contact Me
        </button>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/suman-kumar-02106b331"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Suman793103"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://leetcode.com/u/CodingForFree28/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-code"></i>
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/codingforexfy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-laptop-code"></i>
          </a>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-container"></div>
      </div>
    </main>
  );
};

export default Hero;
