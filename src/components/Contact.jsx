import React from "react";

const Contact = () => {
  const contactData = [
    {
      icon: "fas fa-phone",
      link: "tel:+916207337262",
      text: "+91 62073 37262",
    },
    {
      icon: "fas fa-envelope",
      link: "mailto:sumanofib.12@gmail.com",
      text: "sumanofib.12@gmail.com",
    },
    {
      icon: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/suman-kumar-02106b331",
      text: "LinkedIn Profile",
      external: true,
    },
    {
      icon: "fab fa-whatsapp",
      link: "https://wa.me/9525991169",
      text: "+91 95259 91169",
      external: true,
    },
  ];

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-content">
        <div className="contact-card">
          {contactData.map((item, index) => (
            <div key={index} className="contact-item">
              <i className={item.icon}></i>
              <p>
                <a
                  href={item.link}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {item.text}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
