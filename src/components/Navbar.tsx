import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

const links = ["Home", "About", "Experience", "Projects", "Skills", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      // Detect active section
      for (const link of [...links].reverse()) {
        const el = document.getElementById(link.toLowerCase());
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(link);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "py-2 bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/20"
          : "py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo placeholder for spacing */}
        <div />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-muted/40 backdrop-blur-sm rounded-full px-2 py-1.5 border border-border/40">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`relative text-xs px-4 py-1.5 rounded-full font-display font-medium tracking-wider transition-all duration-300 ${
                activeSection === link
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeSection === link && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-primary rounded-full shadow-[0_0_12px_hsla(220,90%,56%,0.4)]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link}</span>
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:block text-xs px-5 py-2 rounded-full font-display font-semibold tracking-wider border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_hsla(220,90%,56%,0.3)]"
        >
          HIRE ME
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-9 h-9 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center text-foreground hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="mx-4 mt-3 rounded-xl bg-card/90 backdrop-blur-xl border border-border/50 p-3 flex flex-col gap-1 shadow-xl shadow-black/30">
              {links.map((link, i) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link)}
                  className={`text-sm font-display font-medium py-2.5 px-4 rounded-lg text-left transition-all ${
                    activeSection === link
                      ? "bg-primary/15 text-primary border-l-2 border-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {link}
                </motion.button>
              ))}
              <div className="border-t border-border/30 mt-1 pt-2">
                <button
                  onClick={() => scrollTo("contact")}
                  className="w-full text-sm py-2.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold tracking-wider"
                >
                  HIRE ME
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
