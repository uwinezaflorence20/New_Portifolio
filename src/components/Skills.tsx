import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const frontendSkills = [
  { name: "Javascript", level: 98 },
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "Tailwind CSS", level: 98 },
];

const backendSkills = [
  { name: "C / C++", level: 90 },
  { name: "java / springBoot", level: 90 },
  { name: "Node.js ", level: 90 },
  { name: "Python ", level: 85 },
  { name: "PostgreSQL / MySQL / MongoDB", level: 88 },
  { name: "REST APIs", level: 92 },
];

const devopsSkills = [
  { name: "Linux / Shell Scripting", level: 85 },
  { name: "Git & GitHub", level: 95 },
  { name: "Kubernetes & Cloud Native", level: 72 },
  { name: "Postman / REST APIs", level: 90 },
];

const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "Rwanda Digital Health Mentorship Program, ICT Chamber",
    period: "2026 – Present",
    description:
      "Participating in a structured mentorship program focused on digital health innovation. Collaborating with mentors and fellows to build practical solutions for real-world healthcare challenges, and presenting project outcomes for feedback from industry professionals.",
  },
  {
    role: "Data QA & Data Annotator",
    company: "Neotix Robotics — Masoro, Kigali",
    period: "May 2026 – Present",
    description:
      "Promoted from Robotics Operator based on performance. Review, validate, and correct collected data for accuracy and consistency, perform data annotation and labeling, and conduct QA checks to catch errors and incomplete annotations across datasets.",
  },
  {
    role: "Robotics Operator",
    company: "Neotix Robotics — Masoro, Kigali",
    period: "May 2026 – July 2026",
    description:
      "Operated and monitored robotic systems to support daily operations, used robot arms to correct data for robot training, and assisted in testing and troubleshooting equipment following operational safety guidelines.",
  },
  {
    role: "Document Specialist (Freelance)",
    company: "Notary Kamaro Didier — Kicukiro, Kigali",
    period: "2025 – Present",
    description:
      "Provide on-site document typing and formatting for a notary office on a regular session basis. Prepare and format official legal and office documents with high accuracy, handling sensitive documentation professionally.",
  },
  {
    role: "Full Stack Developer",
    company: "TheGym Rwanda",
    period: "June 2025 – Present",
    description:
      "Currently enrolled in one of the most intensive full-stack development training programs, deepening expertise across frontend, backend, databases, and software engineering best practices.",
  },
  {
    role: "Back-End Developer Intern",
    company: "Igire Rwanda Organization / SheCanCode",
    period: "March – May 2025",
    description:
      "Built and maintained the backend of the Elegant e-commerce platform using Java and Spring Boot. Designed RESTful APIs for authentication, user management, and data persistence. Collaborated with frontend and QA teams, performed code reviews, debugging, and testing.",
  },
  {
    role: "CMU Africa Bridge Program",
    company: "Carnegie Mellon University Africa",
    period: "March – May 2025",
    description:
      "Completed an intensive bridge program that strengthened technical skills, problem-solving abilities, and collaborative development practices with exposure to real-world software engineering workflows.",
  },
  {
    role: "Back-End Training – Python",
    company: "ALX Rwanda / Harambee / EF / Mastercard Foundation",
    period: "March – May 2025",
    description:
      "Gained hands-on experience in backend development with Python, building and testing APIs, working with databases, and applying best practices for clean, scalable, and maintainable server-side applications.",
  },
  {
    role: "Front-End Developer Training",
    company: "Igire Rwanda Organization / SheCanCode",
    period: "2024",
    description:
      "Trained in building responsive, user-friendly web interfaces with modern frontend technologies (React.js, TypeScript, Tailwind CSS), focusing on clean UI design, accessibility, and API integration.",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-yellow-400 font-medium tracking-widest text-sm uppercase">
            Skills & Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-4">
            What I <span className="text-primary italic">Bring</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Frontend
            </h3>
            <div className="space-y-4 mb-8">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground text-sm">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.4 + index * 0.05 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Backend
            </h3>
            <div className="space-y-4 mb-8">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground text-sm">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-yellow-300 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + index * 0.05 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              DevOps & Tools
            </h3>
            <div className="space-y-4">
              {devopsSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground text-sm">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary/70 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.8 + index * 0.05 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Experience
            </h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative pl-6 border-l-2 border-yellow-400"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-yellow-400" />
                  <span className="text-sm text-yellow-400 font-medium">
                    {exp.period}
                  </span>
                  <h4 className="text-xl font-semibold text-foreground mt-1">
                    {exp.role}
                  </h4>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-muted-foreground/80 mt-2 text-sm">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;