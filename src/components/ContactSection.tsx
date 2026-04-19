import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submit
    alert("Message sent! (Demo mode)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-display text-xs tracking-[0.3em] text-neon-purple mb-3">GET IN TOUCH</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Contact Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-blue/50 focus:neon-glow transition-all text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-blue/50 focus:neon-glow transition-all text-sm"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-blue/50 focus:neon-glow transition-all text-sm resize-none"
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm tracking-wider neon-glow hover:scale-105 transition-transform"
            >
              <Send size={16} /> SEND MESSAGE
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Let's build something amazing together.
            </p>

            <div className="flex gap-4">
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/wahajazhar" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: Mail, label: "Email", href: "mailto:wahajazhar410@gmail.com" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="glass rounded-xl p-4 hover:border-neon-blue/40 hover:neon-glow transition-all group"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-muted-foreground group-hover:text-neon-blue transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
