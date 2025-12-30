import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications",
      institution: "VIT Bhopal University, Bhopal, MP",
      duration: "July 2024 – Present",
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Purnea University, Purnea, Bihar",
      duration: "Aug. 2019 – March 2023",
    },
  ];

  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="education-content">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="duration">{edu.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
