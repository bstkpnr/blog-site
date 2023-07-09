import React from "react";
import { about } from "../../data/data";

const About: React.FC = () => {
  return (
    <div>
      {about.map((item) => (
        <div>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
