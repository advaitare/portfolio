"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Code, Briefcase } from "lucide-react";

const NAV_ITEMS = [
  { label: "Work Experience", id: "work-experience" },
  { label: "Projects", id: "projects" },
  { label: "Technical Arsenal", id: "technical-arsenal" },
  { label: "Education", id: "education" },
  { label: "Publications", id: "education" },
  { label: "Recs", id: "recommendations" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandStart, setExpandStart] = useState(200);
  const [expandEnd, setExpandEnd] = useState(500);

  const { scrollY } = useScroll();

  useEffect(() => {
    const target = document.getElementById("work-experience");
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const absoluteTop = window.scrollY + rect.top;

    // Start expanding before the section reaches the top
    setExpandStart(Math.max(80, absoluteTop - 300));
    setExpandEnd(Math.max(180, absoluteTop - 80));
  }, []);

  const progress = useTransform(scrollY, [expandStart, expandEnd], [0, 1], {
    clamp: true,
  });

  const smoothProgress = useSpring(progress, {
    stiffness: 120,
    damping: 22,
    mass: 0.8,
  });

  const top = useTransform(smoothProgress, [0, 1], [24, 0]);
  const width = useTransform(smoothProgress, [0, 1], ["92%", "100%"]);
  const maxWidth = useTransform(smoothProgress, [0, 1], ["72rem", "100%"]);
  const borderRadius = useTransform(smoothProgress, [0, 1], [18, 0]);
  const bgOpacity = useTransform(smoothProgress, [0, 1], [0, 1]);
  const borderOpacity = useTransform(smoothProgress, [0, 1], [0, 0.12]);

  return (
    <motion.nav
      style={{
        top,
        left: "50%",
        x: "-50%",
        width,
        maxWidth,
        borderRadius,
        backgroundColor: useTransform(
          bgOpacity,
          (v) => `rgba(18, 18, 18, ${v})`
        ),
        borderBottom: useTransform(
          borderOpacity,
          (v) => `1px solid rgba(255,255,255,${v})`
        ),
        backdropFilter: useTransform(
          smoothProgress,
          [0, 1],
          ["blur(0px)", "blur(24px)"]
        ),
      }}
      transition={{ type: "spring", stiffness: 120, damping: 24 }}
      className="fixed z-50 flex items-center justify-between gap-3 px-4 md:px-6 py-3 overflow-hidden"
    >
      {/* Links */}
      <ul className="hidden md:flex items-center gap-4 min-w-0 flex-1 overflow-hidden">
        {NAV_ITEMS.map((item, index) => (
          <li
            key={item.id + item.label}
            className="relative shrink-0 px-2 lg:px-3 py-2 cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index && (
              <motion.div
                layoutId="nav-hover"
                className="absolute inset-0 bg-white/10 rounded-xl"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            )}
            <button
              onClick={() => scrollTo(item.id)}
              className="relative z-10 text-xs lg:text-sm font-medium text-white/70 transition-colors hover:text-white whitespace-nowrap"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <span className="md:hidden font-bold text-white">Portfolio</span>

      {/* Right Actions */}
      <div className="flex items-center gap-4 md:gap-4 pl-2 md:pl-4 md:border-l border-white/10 shrink-0">
        <a
          href="https://github.com/advaitare"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-white/50 hover:text-white transition-colors text-xs md:text-sm font-medium"
        >
          <Code className="w-4 h-4" />
          <span className="hidden xl:inline">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/advaitare/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-white/50 hover:text-white transition-colors text-xs md:text-sm font-medium"
        >
          <Briefcase className="w-4 h-4" />
          <span className="hidden xl:inline">LinkedIn</span>
        </a>
      </div>
    </motion.nav>
  );
}