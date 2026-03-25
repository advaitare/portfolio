"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Hank Andre",
    role: "Staff Engineer @ CVS Health",
    context: "October 29, 2025 • Managed Advait directly",
    content: "I had the privilege of supervising Advait for six months on the CVS Health Dashboard team. He spearheaded our migration to a GraphQL API - implementing per-endpoint feature flags that ensured a seamless transition - and guided our shift from Angular to Next.js with expert React knowledge. Advait's blend of technical mastery, strategic foresight, and authenticity consistently lifted the entire team. He will be a tremendous asset to any organization."
  },
  {
    name: "Sandy Low",
    role: "Digital Product Owner, Advisor @ CVS Health",
    context: "October 31, 2025 • Worked with Advait on the same team",
    content: "I am pleased to recommend Advait as a skilled front-end developer in the health care industry. As a product lead of a health dashboard platform, I have had the pleasure of working closely with Advait, and I can confidently say that he is an invaluable asset to any team. Advait is detailed-oriented, investigative, and possesses a strong artistic flair, which allows him to create visually appealing interfaces. His excellent communication skills enable him to collaborate effectively with cross-functional teams. One of Advait's standout qualities is his ability to break down complex problems into smaller, manageable parts."
  },
  {
    name: "Mohak Tamhane",
    role: "Senior Software Development Engineer @ CVS Health",
    context: "February 7, 2026 • Senior to Advait",
    content: "I highly recommend Advait Tare as a talented and reliable Full Stack Developer who consistently delivers scalable, user-centric solutions. He combines strong front-end and back-end expertise with clean architecture, performance optimization, and thoughtful problem-solving. Beyond technical skills, Advait is a collaborative team player who communicates clearly, adapts quickly, and takes full ownership of his work. Any team would benefit from his dedication, professionalism, and ability to turn complex ideas into impactful digital experiences."
  },
  {
    name: "Neha Bhargava",
    role: "Senior Engineering Manager @ CVS Health",
    context: "February 15, 2026 • Managed Advait directly",
    content: "I highly recommend Advait as a software developer. I had the opportunity to work closely with him and was consistently impressed by his technical expertise, problem-solving skills, and ownership of his work. Advait has a strong command of software development fundamentals and is able to quickly understand complex systems. Beyond technical skills, he is dependable, proactive, and communicates clearly with both technical and non-technical stakeholders. I am confident that Advait will make a meaningful impact wherever he will go and I wholeheartedly recommend him for any software development."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full relative py-12">
      <div className="absolute top-0 left-12 w-16 h-16 opacity-10">
        <svg fill="currentColor" viewBox="0 0 24 24" className="text-white"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
      </div>
      
      <div className="max-w-4xl mx-auto overflow-hidden px-4 md:px-0">
        {/* Invisible spacer props the container dynamically based on the longest text */}
        <div className="relative">
          <div className="invisible pointer-events-none opacity-0 flex flex-col justify-between gap-6 select-none" aria-hidden="true">
            <p className="text-lg md:text-2xl font-light leading-relaxed italic">
              "{TESTIMONIALS[1].content}" {/* Sandy Low has the longest content */}
            </p>
            <div className="flex items-center gap-4 mt-4">
              <div className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="text-lg font-bold">A</span>
                <span className="text-sm">B</span>
                <span className="text-xs">C</span>
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col justify-between absolute top-0 left-0 w-full h-full"
            >
              <p className="text-lg md:text-2xl text-white/80 font-light leading-relaxed italic">
                "{TESTIMONIALS[currentIndex].content}"
              </p>
              
              <div className="flex items-center gap-4 mt-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-emerald-400 flex items-center justify-center text-white font-bold text-xl drop-shadow-lg">
                  {TESTIMONIALS[currentIndex].name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg">{TESTIMONIALS[currentIndex].name}</span>
                  <span className="text-white/60 text-sm font-medium">{TESTIMONIALS[currentIndex].role}</span>
                  <span className="text-white/30 text-xs mt-0.5">{TESTIMONIALS[currentIndex].context}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-4 mt-12">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors interactive"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={next}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors interactive"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
          
          <div className="ml-6 flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all interactive ${i === currentIndex ? 'bg-white scale-125' : 'bg-white/20 hover:bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
