import React, { useState } from "react";
import SkillsPage from "../Skills/SkillsPage";
import EducationPage from "../Education/EducationPage";
import ExperiencePage from "../Experience/ExperiencePage";
import "../Resume/resume.css";
import About from "../About/About";
import ContactPage from "../Contact/ContactPage";

interface OpenTitle {
  [key: string]: boolean;
  about: boolean;
  skill: boolean;
  education: boolean;
  jobs: boolean;
  contact:boolean
}

const Resume: React.FC = () => {
  const [openTitle, setOpenTitle] = useState<OpenTitle>({
    about: false,
    skill: false,
    education: false,
    jobs: false,
    contact:false
  });

  const toggleSection = (section: keyof OpenTitle) => {
    setOpenTitle({
      ...openTitle,
      [section]: !openTitle[section],
    });
  };
  return (
    <>
      <div className="container-resume">
        <h1 onClick={() => toggleSection("about")}>About</h1>
        {openTitle.about && <About />}
        <h1 onClick={() => toggleSection("jobs")}>Experience</h1>
        {openTitle.jobs && <ExperiencePage />}

        <h1 onClick={() => toggleSection("skill")}>Skills</h1>
        {openTitle.skill && <SkillsPage />}

        <h1 onClick={() => toggleSection("education")}>Education</h1>
        {openTitle.education && <EducationPage />}
        <h1 onClick={() => toggleSection("contact")}>Contact</h1>
        {openTitle.contact && <ContactPage />}
      </div>
    </>
  );
};

export default Resume;
