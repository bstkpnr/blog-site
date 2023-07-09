import React from "react";
import { about } from "../../data/data";
import '../About/about.css'

const About: React.FC = () => {
  return (
    <div className='about-container'>
      {about.map((item) => (
        <div  className='about-item'>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
