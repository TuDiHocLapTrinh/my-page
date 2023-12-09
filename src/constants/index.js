import { diamond_electric, vti } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  pricewise,
  react,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  aws,
  postman,
  devops,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: aws,
    name: "AWS",
    type: "Cloud",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: postman,
    name: "Postman",
    type: "Backend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: devops,
    name: "Devops",
    type: "Backend",
  },
];

export const experiences = [
  {
    title: "Embedded Engineering",
    company_name: "Diamond Electric Holdings",
    icon: diamond_electric,
    iconBg: "#accbe1",
    date: "Jan 2019 - Dec 2022",
    points: [
      "Developing and maintaining hybrid energy storage system for homes",
      "Maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including hardware, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "System Developer",
    company_name: "VTI Japan",
    icon: vti,
    iconBg: "#fbc3bc",
    date: "Jan 2023 - Now",
    points: [
      "Infrastructure construction, operation, and maintenance on AWS.",
      "Collaborating with other teams to API design/implementation support.",
      "Implementing new releases functional.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/TuDiHocLapTrinh/threads_app",
  },
];
