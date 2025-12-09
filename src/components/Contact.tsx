import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address").max(255),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "irisghislaine7@gmail.com",
    href: "mailto:irisghislaine7@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+250 (789) 539659",
    href: "tel:+250789539659",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kigali City, Rwanda",
    href: "#",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<ContactFormData> = {};
        error.issues.forEach((err: z.ZodIssue) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-primary" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-accent font-medium tracking-widest text-sm uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mt-4">
            Let's Work <span className="italic text-accent">Together</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mt-6">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <info.icon className="w-5 h-5 text-accent group-hover:text-primary transition-colors duration-300" />
                </div>
                <div>
                  <span className="text-primary-foreground/60 text-sm">
                    {info.label}
                  </span>
                  <p className="text-primary-foreground font-medium text-lg group-hover:text-accent transition-colors">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-8 border-t border-accent/20"
            >
              <p className="text-primary-foreground/80">
                Available for freelance projects and full-time opportunities.
                Let's discuss how we can work together.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-background rounded-2xl p-8 md:p-10"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="names..."
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-muted border-border focus:border-primary ${
                    errors.name ? "border-destructive" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-muted border-border focus:border-primary ${
                    errors.email ? "border-destructive" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                className={`bg-muted border-border focus:border-primary ${
                  errors.subject ? "border-destructive" : ""
                }`}
              />
              {errors.subject && (
                <p className="text-destructive text-sm mt-1">{errors.subject}</p>
              )}
            </div>

            <div className="mb-8">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`bg-muted border-border focus:border-primary resize-none ${
                  errors.message ? "border-destructive" : ""
                }`}
              />
              {errors.message && (
                <p className="text-destructive text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <Button
              type="submit"
              variant="hero"
              size="xl"
              className="w-full"
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Message Sent!
                </>
              ) : isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
