import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import wahajPic from "@/assets/wahaj.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center md:justify-center md:-ml-8 lg:-ml-16 order-1"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-blue via-neon-purple to-neon-cyan blur-2xl opacity-60"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -inset-2 rounded-full border-2 border-neon-cyan/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-4 rounded-full border border-neon-purple/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-neon-blue/60 neon-glow">
                <img
                  src={wahajPic}
                  alt="Wahaj Azhar - Full Stack Developer"
                  className="w-full h-full object-cover scale-[1.6]"
                  style={{ objectPosition: "50% 18%" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <div className="text-center md:text-left order-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="font-display text-base sm:text-lg font-bold tracking-[0.4em] text-neon-cyan mb-6 neon-text-cyan">
                HI, I'M
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-bold leading-tight mb-6"
            >
              <span
                className="name-gradient-bright block mb-3"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "3.75rem", letterSpacing: "0.02em", lineHeight: 1.1 }}
              >
                Wahaj Azhar
              </span>
              <span className="font-display text-2xl sm:text-3xl text-foreground/90 tracking-wide">Full Stack Developer</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <button
                onClick={scrollToAbout}
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm tracking-wider neon-glow hover:scale-105 transition-transform"
              >
                EXPLORE MY WORK
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 rounded-lg glass border-neon-blue/30 text-foreground font-display text-sm tracking-wider hover:border-neon-blue/60 transition-colors"
              >
                GET IN TOUCH
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-muted-foreground" size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
