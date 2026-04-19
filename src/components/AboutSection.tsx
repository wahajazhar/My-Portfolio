import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code2, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Full Stack Developer", desc: "Building end-to-end web applications with modern frameworks" },
  { icon: GraduationCap, title: "BSCS Student", desc: "Pursuing Computer Science at Virtual University" },
  { icon: Rocket, title: "NAVTTC Certified", desc: "Full Stack Web Development certification program" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 section-gradient relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-display text-xs tracking-[0.3em] text-neon-purple mb-3">WHO I AM</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a passionate and dedicated Full Stack Web Developer, currently enrolled in a{" "}
              <span className="text-neon-cyan">NAVTTC Full Stack Web Development</span> program. With a strong
              foundation in modern web technologies, I create scalable, performant, and visually stunning
              digital experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am also pursuing a <span className="text-neon-purple">BSCS degree from Virtual University</span>,
              continuously improving my development and problem-solving skills. My goal is to build products
              that push the boundaries of what's possible on the web.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="glass rounded-xl p-5 flex items-start gap-4 hover:border-neon-blue/40 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-neon-blue group-hover:neon-glow transition-shadow">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
