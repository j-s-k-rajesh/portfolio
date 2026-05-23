import React from "react";

import { BiCodeAlt } from "react-icons/bi";
import { SiPython } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiRender } from "react-icons/si";
import { SiVercel } from "react-icons/si";
const Skills = () => {

const skills = [
  { name: "Python", icon: <SiPython /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Machine Learning", icon: <GiArtificialIntelligence /> },
  { name: "C", icon: <BiCodeAlt /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "VS Code", icon: <VscVscode /> },
  { name: "Render", icon: <SiRender /> },
  { name: "Vercel", icon: <SiVercel /> },
];

  return (
    <section  id = "skills" className=" text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-neutral-400 mb-2">
            My <span className="text-[#FF014F]">Talent</span>
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Professional Skills
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-neutral-900 hover:bg-neutral-800 hover:scale-105 transition duration-300 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 shadow-lg"
            >
              <div className="text-5xl text-[#FF014F]">
                {skill.icon}
              </div>

              <p className="text-lg font-semibold text-neutral-200">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;