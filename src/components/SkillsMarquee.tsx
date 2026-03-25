"use client";

import { motion } from "framer-motion";

const SKILLS = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "AngularJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" },
  { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "ExpressJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" },
  { name: "StencilJS", icon: "" },
  { name: "Oracle DB", icon: "" },
  { name: "LaunchDarkly", icon: "" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" }
];

export default function SkillsMarquee() {
  // Duplicate arrays to create a seamless infinite loop
  const marqueeItems = [...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <div className="relative w-full overflow-hidden py-10 flex border-y border-white/5 bg-[#121212]">
      {/* Gradient fades for the edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex gap-8 items-center"
        animate={{ x: ["0%", "-33.333333%"] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 30 
        }}
      >
        {marqueeItems.map((skill, index) => (
          <div 
            key={`${skill.name}-${index}`}
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-none interactive whitespace-nowrap min-w-max"
          >
            {skill.icon ? (
              <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity drop-shadow-md" />
            ) : (
              <div className="w-2 h-2 rounded-full bg-emerald-400 opacity-70 group-hover:opacity-100 transition-opacity" />
            )}
            <span className="text-white/80 group-hover:text-white font-medium">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
