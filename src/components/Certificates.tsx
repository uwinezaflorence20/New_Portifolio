import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Backend Developer Certificate",
    issuer: "IGIRE Rwanda Organization",
    year: "2025",
    category: "Backend",
    color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-700",
    dot: "bg-emerald-500",
    link: null,
  },
  {
    title: "Introduction to IoT and Digital Transformation",
    issuer: "Cisco Networking Academy",
    year: "2025",
    category: "Cloud & IoT",
    color: "bg-blue-500/10 border-blue-500/30 text-blue-700",
    dot: "bg-blue-500",
    link: null,
  },
  {
    title: "Introduction to Linux LFS101",
    issuer: "The Linux Foundation",
    year: "2025",
    category: "Linux & OS",
    color: "bg-orange-500/10 border-orange-500/30 text-orange-700",
    dot: "bg-orange-500",
    link: null,
  },
  {
    title: "Kubernetes & Cloud Native Essentials LFS250",
    issuer: "The Linux Foundation",
    year: "2025",
    category: "Cloud & DevOps",
    color: "bg-sky-500/10 border-sky-500/30 text-sky-700",
    dot: "bg-sky-500",
    link: null,
  },
  {
    title: "ALX AI Starter Kit",
    issuer: "ALX Rwanda",
    year: "2025",
    category: "Artificial Intelligence",
    color: "bg-purple-500/10 border-purple-500/30 text-purple-700",
    dot: "bg-purple-500",
    link: null,
  },
  {
    title: "Professional Foundations",
    issuer: "Igire ALX Rwanda",
    year: "2025",
    category: "Professional Skills",
    color: "bg-teal-500/10 border-teal-500/30 text-teal-700",
    dot: "bg-teal-500",
    link: null,
  },
  {
    title: "Frontend Developer Certificate",
    issuer: "SheCanCODE Program",
    year: "2024",
    category: "Frontend",
    color: "bg-pink-500/10 border-pink-500/30 text-pink-700",
    dot: "bg-pink-500",
    link: null,
  },
  {
    title: "Bridge Program Certificate of Achievement",
    issuer: "CMU Africa",
    year: "2025",
    category: "Computer Science",
    color: "bg-red-500/10 border-red-500/30 text-red-700",
    dot: "bg-red-500",
    link: null,
  },
  {
    title: "Professional Scrum Master I (PSM I)",
    issuer: "Scrum.org",
    year: "2023",
    category: "Agile & Scrum",
    color: "bg-indigo-500/10 border-indigo-500/30 text-indigo-700",
    dot: "bg-indigo-500",
    link: null,
  },
  {
    title: "Drone Pilot Certificate",
    issuer: "Rwanda Civil Aviation Authority",
    year: "2024",
    category: "Aviation & Tech",
    color: "bg-cyan-500/10 border-cyan-500/30 text-cyan-700",
    dot: "bg-cyan-500",
    link: null,
  },
  {
    title: "Rwanda Advanced Certificate of Education",
    issuer: "Rwanda Education Board",
    year: "2022",
    category: "Academic",
    color: "bg-yellow-500/10 border-yellow-500/30 text-yellow-700",
    dot: "bg-yellow-500",
    link: null,
  },
];

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certificates" className="section-padding bg-background" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-yellow-400 font-medium tracking-widest text-sm uppercase">
            Credentials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-4">
            Certificates &{" "}
            <span className="text-primary italic">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
            Continuous learning through recognized certifications and training programs from
            industry-leading organizations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.07 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium border ${cert.color}`}
                    >
                      {cert.category}
                    </span>
                    <span className="text-xs text-muted-foreground ml-auto font-medium">
                      {cert.year}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground text-sm leading-snug mb-1 group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-xs">{cert.issuer}</p>
                </div>
              </div>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs text-primary font-medium hover:gap-2.5 transition-all duration-300"
                >
                  View Certificate <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto"
        >
          {[
            { value: "11+", label: "Certificates" },
            { value: "5+", label: "Organizations" },
            { value: "2023–2025", label: "Earned" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-muted/50 rounded-2xl">
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
