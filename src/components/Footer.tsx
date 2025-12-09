import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Iris-Ghislaine", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/iris-ghislaine-ganza-188797334/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:irisghislaine7@gmail.com", label: "Mail" },
];

const Footer = () => {
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container-wide px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.a
            href="#home"
            className="font-serif text-2xl font-bold text-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Iris-Ghislaine
          </motion.a>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
