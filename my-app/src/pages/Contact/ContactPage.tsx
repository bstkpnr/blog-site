import React from "react";
import { contact } from "../../data/data";
import "../Contact/contact.css";

const ContactPage: React.FC = () => {
  return (
    <div className="contact-container">
      {contact.map((item) => (
        <a
        key={item.id}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={item.image} alt={item.contactName} />
        <span>{item.contactName}</span>
      </a>
      ))}
      <div className="icon-container"></div>
    </div>
  );
};

export default ContactPage;
