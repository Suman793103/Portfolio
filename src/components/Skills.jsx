import React from "react";

const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      items: ["C++", "Java", "JavaScript", "SQL"],
    },
    {
      category: "Frameworks",
      items: ["React.js", "Next.js", "Express.js", "Spring Boot"],
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB"],
    },
    {
      category: "Developer Tools",
      items: ["Git", "GitHub", "DigitalOcean", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-content">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-category">
            <h3>{skill.category}</h3>
            <div className="skill-items">
              {skill.items.map((item, itemIndex) => (
                <span key={itemIndex} className="skill-item">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
