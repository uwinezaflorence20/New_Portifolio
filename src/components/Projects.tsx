import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ExternalLink, Github, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import useEmblaCarousel from "embla-carousel-react";

const projects = [
  {
    id: 1,
    title: "Gaming Website",
    description:
      "a website design for the gaming website. it is the user interface",
    tags: ["React","Tailwindcss","css"],
    image:"/public/1.png",
    liveUrl: "https://glittery-rabanadas-281466.netlify.app/",
    githubUrl: "https://github.com/uwinezaflorence20/Gaming-website.git",
  },
  {
    id: 2,
    title: "Elegant backend project",
    description:
      "A collaborative Elegant backend project for the local home furniture seller.",
    tags: ["postgress",  "java","springboot"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    liveUrl: "https://elegant-be.onrender.com/",
    githubUrl: "https://github.com/uwinezaflorence20/Elegant_E-commerce_project_backend.git",
  },
    {
    id: 2,
    title: "UR Digital suggestion ",
    description:
      "A collaborative University of Rwanda suggestion box.",
    tags: ["reactjs"],
    image: "/public/image.png",
    liveUrl: "https://digital-suggestion-box-project-34.onrender.com/",
    githubUrl: "https://github.com/uwinezaflorence20/Digital_suggestion_box_project.git",
  },
  {
    id: 3,
    title: "London University",
    description:
      "A clonning project of the London university user interface.",
    tags: ["HTML", "Tailwind css"],
    image: "/public/2.png",
    liveUrl: "https://profound-biscochitos-fdd45f.netlify.app/",
    githubUrl: "https://github.com/uwinezaflorence20/London-University.git",
  },
    {
    id: 4,
    title: "Manchester University",
    description:
      "A clonning project of the Manchester university user interface.",
    tags: ["HTML", "Tailwind css"],
    image: "/public/3.png",
    liveUrl: "https://scintillating-meringue-4dcf41.netlify.app/",
    githubUrl: "https://github.com/uwinezaflorence20/Manchester_University.git",
  },
    {
    id: 5,
    title: "London University",
    description:
      "A clonning project of the London university user interface.",
    tags: ["HTML", "Tailwind"],
    image: "/public/2.png",
    liveUrl: "https://profound-biscochitos-fdd45f.netlify.app/",
    githubUrl: "https://github.com/uwinezaflorence20/London-University.git",
  },



  
];

const ProjectCard = ({
  project,
  isHovered,
  onHover,
  onLeave,
}: {
  project: (typeof projects)[0];
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  return (
    <article
      className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-accent transition-all duration-500 h-full"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative overflow-hidden aspect-video">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className="absolute inset-0 bg-primary/80 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            href={project.liveUrl}
            className="w-12 h-12 rounded-full bg-accent text-primary flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View live demo"
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={project.githubUrl}
            className="w-12 h-12 rounded-full bg-accent text-primary flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View source code"
          >
            <Github className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-accent/20 text-primary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <a
          href={project.liveUrl}
          className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-4 transition-all duration-300"
        >
          View Project <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!emblaApi || isPaused) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi, isPaused]);

  // Pagination dots
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="projects" className="section-padding bg-muted" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-yellow-400 font-medium tracking-widest text-sm uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-4">
            Featured <span className="italic">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
            A selection of projects that showcase my skills in building modern,
            responsive, and user-friendly web applications.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <div className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="default"
              size="icon"
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full shadow-lg"
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>

          <div className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="default"
              size="icon"
              onClick={scrollNext}
              className="w-12 h-12 rounded-full shadow-lg"
              aria-label="Next projects"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden px-2" ref={emblaRef}>
            <div className="flex gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <ProjectCard
                    project={project}
                    isHovered={hoveredId === project.id}
                    onHover={() => setHoveredId(project.id)}
                    onLeave={() => setHoveredId(null)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-scroll indicator */}
          <p className="text-center text-muted-foreground text-sm mt-4">
            {isPaused ? "Paused" : "Auto-scrolling"} • Hover to pause
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
