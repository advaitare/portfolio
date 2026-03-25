"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="about" className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight"
        >
          Education & Publications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Degrees</h3>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white/90">Master of Science</h4>
              <p className="text-blue-400 font-medium mb-1">Software Engineering Systems</p>
              <p className="text-white/50 text-sm">Northeastern University, Boston, MA, USA</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white/90">Bachelor of Engineering</h4>
              <p className="text-blue-400 font-medium mb-1">Computer Engineering</p>
              <p className="text-white/50 text-sm">University of Mumbai, Mumbai, India</p>
            </div>
          </motion.div>

          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Publications</h3>
            
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full mb-4">
                Published May 2023
              </span>
              <h4 className="text-lg font-bold text-white leading-snug mb-3">
                A Survey on Data Privacy Threats and Preservation Techniques
              </h4>
              <p className="text-sm font-light text-white/60">
                International Journal of Advanced Research in Computer Science (IJARCS)
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
