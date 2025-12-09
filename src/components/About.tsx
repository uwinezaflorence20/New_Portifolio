import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Adventist University of Central Africa (AUCA)",
    period: "2023 - Present",
    description: "Focusing on software engineering, algorithms, and full-stack development.",
  },
  {
    degree: "High School Diploma",
    institution: "Groupe Scolaire Notre Dame De Lourdes",
    period: "2019 - 2021",
    description: "Mathematics, Economics, and Computer Science track.",
  },
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
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm a passionate full-stack software engineer currently pursuing my degree in software Engineering. 
              I love building scalable applications from database to UI, architecting robust backend systems, 
              and crafting intuitive user experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              From building responsive frontends 
              with modern frameworks to designing RESTful APIs and optimizing database queries, I enjoy the challenge of end-to-end development and delivering 
              complete solutions that make a difference.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 p-8 bg-muted/50 rounded-2xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">3+</div>
                <div className="text-sm text-muted-foreground">Years Coding</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground">
                Education
              </h3>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative pl-6 border-l-2 border-primary"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary" />
                  <span className="text-sm text-primary font-medium">
                    {edu.period}
                  </span>
                  <h4 className="text-xl font-semibold text-foreground mt-1">
                    {edu.degree}
                  </h4>
                  <p className="text-muted-foreground font-medium">{edu.institution}</p>
                  <p className="text-muted-foreground/80 mt-2 text-sm">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Certifications/Achievements
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 p-6 bg-yellow-400/10 rounded-xl border border-yellow-400/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-5 h-5 text-yellow-400" />
                <h4 className="font-semibold text-foreground">Certifications & Training</h4>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>AUCA-SWIFT iOS Development Program - Lead Trainee</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>SheCanCode Front-End Development Training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Full-Stack Web Development Bootcamp</span>
                </li>
              </ul>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
