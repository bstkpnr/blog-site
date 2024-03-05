import REACT from "../assets/svg/react.svg";
import HTML from "../assets/svg/file-type-html.svg";
import CSS from "../assets/svg/file-type-css.svg";
import TYPESCRİPT from "../assets/svg/typescript-icon.svg";
import SASS from "../assets/svg/sass.svg";
import BOOTSTRAP from "../assets/svg/bootstrap.svg";
import JAVASCRIPT from "../assets/svg/javascript.svg";
import TAILWIND from "../assets/svg/tailwindcss.svg";
import CSHARP from "../assets/svg/c-sharp-solid.svg";
import ADOBE from "../assets/svg/adobe-xd.svg";
import FIREBASE from "../assets/svg/firebase.svg";
import FIGMA from "../assets/svg/figma.svg";
import ZEPLIN from "../assets/svg/zeplin.svg";
import SQL from "../assets/svg/sql-query.svg";
import LINKEDLN from '../assets/svg/linkedln.svg'
import GITHUB from '../assets/svg/github.svg'
import GMAIL from '../assets/svg/gmail.svg'



const about=[
  {
    desc:'As a Computer Engineer specializing in Smart Systems Engineering, I excel in both mobile and web development. I am  proficient in front-end technologies such as React-Native for mobile applications and ReactJS, Typescript, JavaScript,jQuery for web applications. My skill set also includes HTML, CSS, SASS, Bootstrap, and Tailwind, which enables me to create aesthetically pleasing and user-friendly interfaces. In back-end development, I am experienced with C#, .NET, SQL, and Firebase. My experience with design tools such as Figma, Adobe XD, and Zeplin complements my development skills, allowing me to create comprehensive solutions that seamlessly blend functionality and design. Fluent in English at a B2 level, I am equipped to collaborate effectively in diverse environments. My passion for technology and commitment to developing efficient, user-centric applications make me a valuable asset in any tech-driven role.'
  }
]


const experience = [
  {
    id: 1,
    companyName: "ArtAda SoftWare",
    department: "Intern Software Engineer",
    desc: "In the company, we provided special software services to logistics companies. Improvements were made with C#, Sql, DevExpress technologies.",
  },
  {
    id: 2,
    companyName: "PR Software",
    department: "Jr. Frontend Developer",
    desc: "Special software services were provided to  companies in the company. Improvements were made with Typescript, ReactJS, React-Native, Tailwind technologies",
  },
  {
    id: 3,
    companyName: "Larabay",
    department: "Jr. FullStack Developer",
    desc: "We provide necessary software to customers on game pin, digital gift card. Developments are made with .Net, C#, Sql, Javascript, Bootstrap, SASS technologies",
  },
  {
    id: 4,
    companyName: "HC Software",
    department: "React-Native Developer",
    desc: "I am working on a project using React-Native and Typescript technologies using BLE (Bluetooth LowEnergy) protocol to enable industrial machines to communicate with mobile devices.",
  },
   {
    id: 5,
    companyName: "Integro Health",
    department: "React-Native Developer",
    desc: "I develop mobile health applications using React-Native and JavaScript. I manage application state with Redux and handle data exchange between devices using Bluetooth Low Energy",
  },
];
const skill = [
  {
    id: 1,
    skillName: "Frontend Development",
    desc: [
      {
        id: 1,
        name: "React, React-Native",
        image: REACT,
      },
      {
        id: 2,
        name: "Typescript",
        image: TYPESCRİPT,
      },
      {
        id: 3,
        name: "Javascript",
        image: JAVASCRIPT,
      },
      {
        id: 4,
        name: "HTML",
        image: HTML,
      },
      {
        id: 5,
        name: "CSS",
        image: CSS,
      },
      {
        id: 6,
        name: "Bootstrap",
        image: BOOTSTRAP,
      },
      {
        id: 7,
        name: "Tailwind",
        image: TAILWIND,
      },
      {
        id: 7,
        name: "SASS",
        image: SASS,
      },
      {
        id: 8,
        name: "Redux",
        image: REACT,
      },
      {
        id: 9,
        name: "ContextAPI",
        image: REACT,
      },
    ],
  },
  {
    id: 2,
    skillName: "Backend Development",
    desc: [
      {
        id: 1,
        name: "C#",
        image: CSHARP,
      },
      {
        id: 2,
        name: ".NET",
        image: CSHARP,
      },
      {
        id: 3,
        name: "SQL",
        image: SQL,
      },
      {
        id: 4,
        name: "Firebase",
        image: FIREBASE,
      },
    ],
  },
  {
    id: 3,
    skillName: "Designing",
    desc: [
      {
        id: 1,
        name: "Figma",
        image: FIGMA,
      },
      {
        id: 2,
        name: "AdobeXD",
        image: ADOBE,
      },
      {
        id: 3,
        name: "Zeplin",
        image: ZEPLIN,
      }
    ]
  },
];
const education = [
  {
    id: 1,
    universityName: "Iskenderun Techinal University",
    department: "Computer Engineer",
    desc: "3,11/4",
  },
  {
    id: 2,
    universityName: "Izmir Bakircay University",
    department: "Smart System Engineer",
    desc: "Masters with Thesis on Artificial Intelligence and Machine learning",
  },
];
const contact = [
  {
    id: 1,
    contactName: "Linkedln",
    image:LINKEDLN,
    link: "https://www.linkedin.com/in/beste-tokp%C4%B1nar-900326158/overlay/contact-info/",
  },
  {
    id: 2,
    contactName: "Gmail",
    image:GMAIL,
    link: "mailto:tokpinarbeste@gmail.com",  },
  {
    id: 3,
    contactName: "GitHub",
    image:GITHUB,
    link: "https://github.com/bstkpnr",
    
  },
];

export { experience, skill, education ,about,contact};
