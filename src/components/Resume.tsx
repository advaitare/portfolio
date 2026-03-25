"use client";

import { motion } from "framer-motion";
import SkillsMarquee from "./SkillsMarquee";
import Testimonials from "./Testimonials";

const EXPERIENCES = [
  {
    role: "Frontend Developer",
    company: "Goldman Sachs • Richardson, TX, USA",
    period: "Jan 2026 – Present",
    bullets: [
      "Contributed towards writing e2e tests for the Agent UI platform using Cypress",
      "Reworking the Marcus by GS platform"
    ]
  },
  {
    role: "Software Development Engineer",
    company: "CVS Health • New Jersey, USA",
    period: "Jun 2024 – Dec 2025",
    bullets: [
      "Facilitated migration of Labs APIs from a legacy BFF model to a new i90 Capability API, developing and publishing GraphQL experiences using JavaScript to improve scalability.",
      "Developed and launched the More Documents page with MyChart SSO using reusable Angular and Stencil.js components with semantic HTML and WCAG-aligned patterns.",
      "Implemented secure messaging features for authorized caregivers and collaborated with backend teams to migrate endpoints to v2 Apigee, utilizing AI-driven analysis.",
      "Configured and managed content in AEM and Contentful, implementing Adobe Analytics tracking across key UI components.",
      "Improved code quality increasing Jest coverage to 90%+, used Docker, CI/CD via Harness, and AI-assisted code reviews."
    ]
  },
  {
    role: "Software Programmer I",
    company: "Marlabs LLC • New Jersey, USA",
    period: "Jun 2023 – May 2024",
    bullets: [
      "Built a responsive event-planning web application using React, Node.js, and Express, optimizing layouts and user experience.",
      "Developed RESTful APIs for event creation, updates, and RSVPs, integrating with MongoDB.",
      "Deployed and maintained backend infrastructure on AWS (EC2, VPC, S3, DynamoDB, Lambda).",
      "Containerized applications with Docker and supported Jenkins automated CI/CD pipelines with CloudWatch."
    ]
  },
  {
    role: "Frontend Engineer",
    company: "New York Life • Boston, MA, USA",
    period: "Jun 2022 – Dec 2022",
    bullets: [
      "Deployed responsive web application on AWS serving 1000+ agents utilizing ReactJS and Material-UI with Figma designs.",
      "Integrated Redux Thunks with Java-based REST APIs to reduce latency by 25%.",
      "Configured AWS EC2, S3, & CloudWatch deployment cutting API response time by 30%.",
      "Conducted code reviews and maintained technical documentation."
    ]
  }
];

export default function Resume() {
  return (
    <section id="resume" className="relative z-20 bg-[#121212] pt-20 pb-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col gap-24">

        {/* WORK EXPERIENCE */}
        <div id="work-experience">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight"
          >
            Work Experience
          </motion.h2>

          <div className="flex flex-col gap-12 border-l border-white/10 pl-6 md:pl-10 ml-2 md:ml-4">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute w-3 h-3 rounded-full bg-white/50 -left-[30px] md:-left-[46px] top-8 group-hover:bg-white transition-colors duration-300 shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] z-10" />

                {/* Hover Card */}
                <motion.div
                  whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.03)" }}
                  transition={{ duration: 0.2 }}
                  className="p-6 -ml-6 rounded-2xl border border-transparent hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] transition-all interactive"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{exp.role}</h3>
                  <p className="text-sm md:text-base text-white/50 font-medium mt-1 mb-4">{exp.company} • {exp.period}</p>

                  <ul className="flex flex-col gap-2.5">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx} className="text-white/70 font-light leading-relaxed flex items-start text-sm md:text-base">
                        <span className="mr-3 text-white/30 text-xs mt-1">―</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PROJECTS */}
        <div id="projects">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight"
          >
            Projects
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, boxShadow: "0px 20px 40px rgba(255,255,255,0.08)" }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all interactive group"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Banking Application System</h3>
            <p className="text-white/50 text-sm mb-6">March 2022</p>
            <p className="text-white/70 font-light leading-relaxed mb-6">
              Built a banking platform supporting core CRUD operations and real-time balance updates using Spring Boot & MySQL with secure transaction handling, data integrity checks, and optimized query performance. Designed REST APIs for transactions and authentication using Spring MVC and Hibernate. Applied test-driven development practices, achieving 95% code coverage with JUnit.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Java", "Spring Boot", "MySQL", "JUnit"].map(tag => (
                <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/80">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* SKILLS CAROUSEL */}
        <div id="technical-arsenal" className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight"
          >
            Technical Arsenal
          </motion.h2>

          <div className="w-screen relative left-1/2 -translate-x-1/2">
            <SkillsMarquee />
          </div>
        </div>

        {/* EDUCATION & PUB */}
        <div id="education" className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Education</h2>
            <div className="mb-6">
              <h4 className="text-lg font-bold text-white">Master of Science, Software Engineering Systems</h4>
              <p className="text-white/60 text-sm">Northeastern University, Boston, MA</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Bachelor of Engineering, Computer Engineering</h4>
              <p className="text-white/60 text-sm">University of Mumbai, India</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Publications</h2>
            <a
              href="http://www.ijarcs.info/index.php/Ijarcs/article/view/6522"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              <span className="text-xs font-semibold text-white/40 mb-2 block group-hover:text-white/60 transition-colors">May 2023 • IJARCS</span>
              <h4 className="text-base font-bold text-white leading-snug flex items-start gap-2">
                A Survey on Data Privacy Threats and Preservation Techniques
                <svg className="w-4 h-4 text-white/50 group-hover:text-white mt-0.5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </h4>
            </a>
          </motion.div>
        </div>

        {/* TESTIMONIALS */}
        <div id="recommendations" className="mt-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight"
          >
            Recommendations
          </motion.h2>
          <Testimonials />
        </div>

      </div>

      {/* FOOTER CREDITS */}
      <div className="mt-32 pb-12 w-full flex flex-col items-center justify-center text-center opacity-30 hover:opacity-100 transition-opacity duration-500">
        <p className="text-white text-[10px] md:text-sm font-medium tracking-[0.3em] uppercase">
          Made by Advait Tare 2026 🎮
        </p>
        <div className="mt-4 w-12 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
}
