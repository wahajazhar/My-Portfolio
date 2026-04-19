import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TechIcons from "./TechIcons";

const skills = [
  { name: "HTML5", color: "16, 100%, 50%", glow: "0 0 12px hsla(16,100%,50%,0.4)" },
  { name: "CSS3", color: "210, 80%, 55%", glow: "0 0 12px hsla(210,80%,55%,0.4)" },
  { name: "JavaScript", color: "50, 100%, 50%", glow: "0 0 12px hsla(50,100%,50%,0.4)" },
  { name: "React.js", color: "193, 95%, 55%", glow: "0 0 12px hsla(193,95%,55%,0.4)" },
  { name: "Tailwind CSS", color: "175, 80%, 50%", glow: "0 0 12px hsla(175,80%,50%,0.4)" },
  { name: "MongoDB", color: "120, 60%, 45%", glow: "0 0 12px hsla(120,60%,45%,0.4)" },
  { name: "Node.js", color: "140, 70%, 45%", glow: "0 0 12px hsla(140,70%,45%,0.4)" },
  { name: "Git", color: "12, 90%, 55%", glow: "0 0 12px hsla(12,90%,55%,0.4)" },
  { name: "VS Code", color: "220, 90%, 56%", glow: "0 0 12px hsla(220,90%,56%,0.4)" },
  
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 section-gradient relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-display text-xs tracking-[0.3em] text-neon-blue mb-3">EXPERTISE</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Skills & Tech Stack</h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
          {skills.map((skill, i) => {
            const IconComponent = TechIcons[skill.name];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.07, type: "spring", stiffness: 150 }}
                className="glass rounded-xl px-4 py-3 flex flex-col items-center gap-2 transition-all duration-300 group cursor-default relative overflow-hidden"
                style={{
                  borderColor: `hsla(${skill.color}, 0.25)`,
                  boxShadow: `inset 0 0 30px hsla(${skill.color}, 0.04), 0 0 0 1px hsla(${skill.color}, 0.1)`,
                }}
                whileHover={{
                  boxShadow: `inset 0 0 40px hsla(${skill.color}, 0.08), ${skill.glow}, 0 0 30px hsla(${skill.color}, 0.15)`,
                  borderColor: `hsla(${skill.color}, 0.5)`,
                  scale: 1.05,
                }}
              >
                
                <div
                  className="absolute top-0 left-0 w-6 h-6 rounded-br-xl opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ background: `linear-gradient(135deg, hsla(${skill.color}, 0.6), transparent)` }}
                />
                <div
                  className="absolute bottom-0 right-0 w-6 h-6 rounded-tl-xl opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ background: `linear-gradient(315deg, hsla(${skill.color}, 0.6), transparent)` }}
                />

                {/* SVG Icon */}
                <div
                  className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                  style={{ filter: `drop-shadow(0 0 8px hsla(${skill.color}, 0.4))` }}
                >
                  {IconComponent && <IconComponent size={28} />}
                </div>

                <span className="font-display text-xs font-semibold tracking-wide text-center leading-tight relative z-10">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
