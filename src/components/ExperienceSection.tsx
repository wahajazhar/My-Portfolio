import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    role: "Web Developer",
    org: "Freelance / Internship",
    period: "3 Months",
    desc: "Hands-on experience building responsive websites and web applications using React, Tailwind CSS, and modern frontend tools. Focused on clean UI, performance, and delivering production-ready code.",
  },
];

const education = [
  {
    degree: "BSCS — Bachelor of Science in Computer Science",
    org: "Currently Pursuing",
    period: "Ongoing",
    desc: "Specializing in modern web technologies, software engineering, data structures, and algorithms.",
  },
  {
    degree: "BA — Bachelor of Arts",
    org: "Completed",
    period: "Graduated",
    desc: "Completed Bachelor of Arts degree, building a strong foundation in analytical and communication skills.",
  },
  {
    degree: "NAVTTC Certification",
    org: "National Vocational & Technical Training Commission",
    period: "Certified",
    desc: "Government-recognized technical training certification in IT / Web Development skills.",
  },
  {
    degree: "AFC — Assessment of Fundamental Competence (CA)",
    org: "Institute of Chartered Accountants of Pakistan (ICAP)",
    period: "Certified",
    desc: "Cleared AFC stage of Chartered Accountancy — covering financial accounting, business law, and quantitative methods.",
  },
];

const TimelineItem = ({
  title,
  org,
  period,
  desc,
  index,
}: {
  title: string;
  org: string;
  period: string;
  desc: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative pl-8 pb-8 border-l-2 border-neon-blue/30 last:pb-0"
  >
    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary neon-glow" />
    <div className="glass rounded-xl p-5 hover:border-neon-blue/50 transition-colors">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
        <span className="text-xs font-display tracking-wider text-neon-cyan">{period}</span>
      </div>
      <p className="text-sm text-primary mb-2">{org}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-display text-xs tracking-[0.4em] text-neon-cyan mb-3">MY JOURNEY</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold gradient-text">
            Experience & Education
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                <Briefcase size={18} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">Experience</h3>
            </div>
            {experiences.map((exp, i) => (
              <TimelineItem
                key={exp.role}
                title={exp.role}
                org={exp.org}
                period={exp.period}
                desc={exp.desc}
                index={i}
              />
            ))}
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-secondary/15 border border-secondary/30 flex items-center justify-center">
                <GraduationCap size={18} className="text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">Education</h3>
            </div>
            {education.map((edu, i) => (
              <TimelineItem
                key={edu.degree}
                title={edu.degree}
                org={edu.org}
                period={edu.period}
                desc={edu.desc}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
