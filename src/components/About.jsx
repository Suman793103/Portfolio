import React from "react";

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p>
          I am a passionate Java Developer with expertise in Spring Boot,
          microservices, and backend development. Currently pursuing my Master's
          in Computer Applications at VIT Bhopal University, I combine academic
          excellence with practical development experience in building robust
          and scalable applications.
        </p>
        <div className="achievements">
          <h3>Achievements</h3>
          <ul>
            <li>Maintained a CGPA of 9+ throughout academics</li>
            <li>Achieved 85% acceptance rate on LeetCode</li>
            <li>Served as Event Head in College Fest</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
