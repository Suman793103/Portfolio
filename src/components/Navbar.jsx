import React from "react";

const Navbar = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <div className="logo">
        <i className="fas fa-code"></i>
      </div>
      <ul className="nav-links">
        <li>
          <a
            href="#home"
            className="active"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>
            About
          </a>
        </li>
        <li>
          <a href="#education" onClick={(e) => handleNavClick(e, "#education")}>
            Education
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => handleNavClick(e, "#projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => handleNavClick(e, "#skills")}>
            Skills
          </a>
        </li>
        <li>
          <a
            href="#certificates"
            onClick={(e) => handleNavClick(e, "#certificates")}
          >
            Certificates
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
