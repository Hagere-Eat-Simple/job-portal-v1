"use client"
import React, { useState } from "react";
import "../styles/_accordion.scss"

const Accordion = () => {
  const [active, setActive] = useState(false);

  const toggleAccordion = () => {
    setActive(!active);
  };

  const handleContentClick = () => {
    const contentContainers = document.getElementsByClassName("content-container");
    for (let i = 0; i < contentContainers.length; i++) {
      contentContainers[i].classList.toggle("active");
    }
  };

  return (
    <section className="accSection">
    <div className="accordion">
      <div className="accordion-title">Frequently Asked Questions</div>
      <div className={`content-container ${active ? "active" : ""}`} onClick={handleContentClick}>
        <div className="question">How To Use Your Website</div>
        <div className="answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde at id consectetur facilis, provident officiis quibusdam ex eaque repellat eos atque nesciunt quasi fugiat incidunt laudantium facere iure error voluptatibus.</div>
        <div className="question">How to Apply for jobs</div>
        <div className="answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde at id consectetur facilis, provident officiis quibusdam ex eaque repellat eos atque nesciunt quasi fugiat incidunt laudantium facere iure error voluptatibus.</div>
        <div className="question">How to Apply for jobs</div>
        <div className="answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde at id consectetur facilis, provident officiis quibusdam ex eaque repellat eos atque nesciunt quasi fugiat incidunt laudantium facere iure error voluptatibus.</div>
      </div>
    </div>
    </section>
  );
};

export default Accordion;