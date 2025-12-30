import React from "react";

const Certificates = () => {
  const certificatesData = [
    {
      title: "AI Odyssey",
      link: "https://drive.google.com/file/d/1Nl4niCE-SEo9exLeEqPWpdDp4e_Qvgp5/view?usp=sharing",
      description: "AI-focused innovation challenge at IIT Kharagpur",
    },
    {
      title: "HackTank",
      link: "https://drive.google.com/file/d/17DczTK05VBiScuFgsHWSDleRDmCdpfxU/view?usp=sharing",
      description: "Competitive hackathon at IIT Kharagpur",
    },
    {
      title: "Innovate-X",
      link: "https://drive.google.com/file/d/1lNq917kAGHLLn1hmLNbmkNY_DBmqz8kF/view?usp=sharing",
      description: "Innovation and product design competition at IIT Kharagpur",
    },
    {
      title: "LiveAI-Quiz",
      link: "https://drive.google.com/file/d/1xDJo8m7v57B_hyi-pM71N3Pf0dYtHEVG/view?usp=sharing",
      description: "Live AI quiz competition at IIT Kharagpur",
    },
  ];

  return (
    <section id="certificates" className="section">
      <h2 className="section-title">Certificates</h2>
      <div className="certificates-content">
        {certificatesData.map((cert, index) => (
          <div key={index} className="certificate-item">
            <i className="fas fa-certificate"></i>
            <h3>
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                {cert.title}
              </a>
            </h3>
            <p>{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
