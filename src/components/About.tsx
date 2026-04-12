import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Globe, Download } from "lucide-react";
import { Button } from "./ui/button";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Rwanda",
    location: "Kigali, Rwanda",
    period: "May 2022 – Present",
    description:
      "Pursuing a BSc in Computer Science with relevant coursework including Database Management Systems, Human Centred Design, Interactive Web Development, Software Engineering, Computer Networking, Information Security, and Mobile Computing.",
  },
  {
    degree: "Rwanda Advanced Certificate of Education (High School Diploma)",
    institution: "Groupe Scolaire Notre Dame De Lourdes",
    location: "Rwanda",
    period: "2019 – 2022",
    description:
      "Completed advanced secondary education with a focus on Mathematics, Economics, and Computer Science.",
  },
];

const languages = [
  { name: "Kinyarwanda", level: "Native", percent: 100 },
  { name: "English", level: "Fluent", percent: 90 },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-yellow-400 font-medium tracking-widest text-sm uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-4">
            Software Engineer
            <br />
            <span className="text-primary italic">Problem Solver</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column – Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate full-stack developer skilled in{" "}
              <span className="text-foreground font-medium">
                React, Java, Spring Boot, and PostgreSQL
              </span>
              , focused on building reliable and user-friendly digital solutions.
              I'm currently pursuing my BSc in Computer Science at the University of Rwanda.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I love creating practical applications that solve real-world problems and improve
              accessibility. From crafting responsive frontends to designing RESTful APIs and
              optimizing databases, I enjoy the challenge of end-to-end development that makes
              a real difference. I'm also a certified{" "}
              <span className="text-foreground font-medium">Professional Scrum Master I</span>.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 p-8 bg-muted/50 rounded-2xl mb-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">4+</div>
                <div className="text-xs text-muted-foreground">Years Coding</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">11+</div>
                <div className="text-xs text-muted-foreground">Certificates</div>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground">Languages</h3>
              </div>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1.5">
                      <span className="font-medium text-foreground text-sm">{lang.name}</span>
                      <span className="text-muted-foreground text-sm">{lang.level}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${lang.percent}%` } : {}}
                        transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button variant="hero" size="lg" asChild>
                <a
                  href="/FLORENCE UWINEZA CV.docx (1).pdf"
                  download="Florence_Uwineza_CV.pdf"
                  className="inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column – Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-8 mb-10">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                  className="relative pl-6 border-l-2 border-primary"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary" />
                  <span className="text-sm text-primary font-medium">{edu.period}</span>
                  <h4 className="text-lg font-semibold text-foreground mt-1 leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-muted-foreground font-medium text-sm">
                    {edu.institution} · {edu.location}
                  </p>
                  <p className="text-muted-foreground/80 mt-2 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Coursework highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="p-6 bg-primary/5 border border-primary/20 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
                <h4 className="font-semibold text-foreground text-sm">Relevant Coursework</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Database Management",
                  "Human Centred Design",
                  "Interactive Web Dev",
                  "Software Engineering",
                  "Computer Networking",
                  "Information Security",
                  "Mobile Computing",
                ].map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
