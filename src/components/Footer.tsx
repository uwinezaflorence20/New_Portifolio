import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/uwinezaflorence20", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/florence-uwineza-123456789/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:uwinezaflorence20@gmail.com", label: "Mail" },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "uwinezaflorence20@gmail.com", href: "mailto:uwinezaflorence20@gmail.com" },
  { icon: Phone, label: "Phone", value: "+250 (791) 348662", href: "tel:+250791348662" },
  { icon: MapPin, label: "Location", value: "Kigali City, Rwanda", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-background py-16 border-t border-border">
      <div className="container-wide px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.a
              href="#home"
              className="font-serif text-2xl font-bold text-primary mb-4 block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Florence.
            </motion.a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Full-stack developer passionate about creating beautiful, functional web applications
              and bringing ideas to life through code.
            </p>
            <div className="flex items-center gap-4">
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

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              {contactInfo.map((info) => (
                <li key={info.label}>
                  <a
                    href={info.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm group"
                  >
                    <info.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{info.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Interested in working together? I'd love to hear from you.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-4 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Conversation →
            </motion.a>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Florence Uwineza. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Built with ❤️ using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
