"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/movingCards";

interface Skill {
  name: string;
  iconClass: string;
  link?: string;
}

const Skills: React.FC = () => {
  const skillsData = {
    frontend: [
      { name: "React.js", iconClass: "ci ci-react" },
      { name: "Next.js", iconClass: "ci ci-nextjs" },
      { name: "TypeScript", iconClass: "ci ci-ts" },
      { name: "Tailwind CSS", iconClass: "ci ci-tailwindcss" },
      { name: "Redux Toolkit", iconClass: "ci ci-redux" },
      { name: "MUI", iconClass: "ci ci-mui" },
      { name: "JavaScript", iconClass: "ci ci-js" },
      { name: "Bootstrap", iconClass: "ci ci-bootstrap" },
    ],
    backend: [
      { name: "Express.js", iconClass: "ci ci-expressjs" },
      { name: "Node.js", iconClass: "ci ci-nodejs" },
      { name: "MongoDB", iconClass: "ci ci-mongodb" },
      { name: "MySQL", iconClass: "ci ci-mysql" },
      { name: "Redis", iconClass: "ci ci-redis" },
    ],
    productivity: [
      { name: "Git", iconClass: "ci ci-git" },
      { name: "GitHub", iconClass: "ci ci-github" },
      { name: "Postman", iconClass: "ci ci-postman" },
      { name: "Vercel", iconClass: "ci ci-vercel" },
      { name: "Netlify", iconClass: "ci ci-netlify" },
      { name: "Figma", iconClass: "ci ci-figma" },
      { name: "VS Code", iconClass: "ci ci-vscode" },
    ],
  };

  const renderSkills = (skills: Skill[]) => {
    return skills.map((skill, index) => (
      <div
        key={index}
        className="bg-gray-100 flex justify-center gap-4 items-center py-3  rounded-[5px] shadow-md ring-2 ring-white ring-opacity-75 select-none"
      >
        <i className={`${skill.iconClass} ci-2x`}></i>
        <span className="md:text-base text-sm text-gray-800">{skill.name}</span>
      </div>
    ));
  };

  return (
    <div className="w-full">
      <h2 className="md:text-3xl text-2xl  mb-8 text-gray-800 font-bold pb-5 border-b-[1px] border-gray-300">
        Tech Stack
      </h2>
      <div className="md:grid hidden gap-10">
        <div>
          <h3 className="md:text-xl text-lg   text-gray-800 my-4">Frontend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {renderSkills(skillsData.frontend)}
          </div>
        </div>
        <div>
          <h3 className="md:text-xl text-lg   text-gray-800 my-4">Backend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {renderSkills(skillsData.backend)}
          </div>
        </div>
        <div>
          <h3 className="md:text-xl text-lg   text-gray-800 my-4">Productivity</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {renderSkills(skillsData.productivity)}
          </div>
        </div>
      </div>
      <div className="md:hidden block w-full">
        <div>
          <h3 className="font-bold text-lg   text-gray-800 mt-2">Frontend</h3>
          <InfiniteMovingCards items={skillsData.frontend} />
        </div>
        <div>
          <h3 className="font-bold text-lg   text-gray-800 mt-2">Backend</h3>
          <InfiniteMovingCards items={skillsData.backend} />
        </div>
        <div>
          <h3 className="font-bold text-lg   text-gray-800 mt-2">Productivity</h3>
          <InfiniteMovingCards items={skillsData.productivity} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
