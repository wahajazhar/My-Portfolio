import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ExternalLink, Github, Loader2 } from "lucide-react";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  fork: boolean;
};

const GITHUB_USERNAME = "wahajazhar";

const gradients = [
  "from-neon-blue/20 to-neon-purple/10",
  "from-neon-cyan/20 to-neon-blue/10",
  "from-neon-purple/20 to-neon-cyan/10",
  "from-neon-blue/15 to-neon-cyan/15",
  "from-neon-purple/15 to-neon-blue/15",
  "from-neon-cyan/15 to-neon-purple/15",
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`)
      .then((r) => {
        if (!r.ok) throw new Error("Failed to fetch repos");
        return r.json();
      })
      .then((data: Repo[]) => {
        const filtered = data
          .filter((r) => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);
        setRepos(filtered);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-display text-xs tracking-[0.3em] text-neon-cyan mb-3">MY WORK</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground text-sm mt-3">
            Live from{" "}
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="text-neon-blue hover:text-neon-cyan transition-colors"
            >
              github.com/{GITHUB_USERNAME}
            </a>
          </p>
        </motion.div>

        {loading && (
          <div className="flex justify-center py-12">
            <Loader2 className="animate-spin text-neon-blue" size={32} />
          </div>
        )}

        {error && !loading && (
          <p className="text-center text-muted-foreground">
            Could not load repos. Visit{" "}
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="text-neon-blue"
            >
              GitHub profile
            </a>
            .
          </p>
        )}

        {!loading && !error && repos.length === 0 && (
          <p className="text-center text-muted-foreground">No public repositories yet.</p>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {repos.map((repo, i) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="glass rounded-xl overflow-hidden group hover:border-neon-blue/40 transition-all duration-300"
            >
              <div className={`h-32 bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center px-4`}>
                <span className="font-display text-base font-semibold opacity-50 group-hover:opacity-80 transition-opacity text-center break-all">
                  {repo.name}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-semibold mb-2 capitalize">
                  {repo.name.replace(/[-_]/g, " ")}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2 min-h-[2.5rem]">
                  {repo.description || "No description provided."}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {repo.language && (
                    <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium">
                      {repo.language}
                    </span>
                  )}
                  {repo.topics?.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-xs text-neon-blue hover:text-neon-cyan transition-colors"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={14} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
