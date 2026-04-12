import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

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
    value: "uwinezaflorence20@gmail.com",
    href: "mailto:uwinezaflorence20@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+250 791 348 662",
    href: "tel:+250791348662",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kigali City, Rwanda",
    href: "https://maps.google.com/?q=Kigali,Rwanda",
  },
];

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  // Initialise EmailJS once
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

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
    setStatus("submitting");
    setErrorMsg("");

    // Client-side validation
    const parsed = contactSchema.safeParse(formData);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      parsed.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as keyof ContactFormData] = issue.message;
        }
      });
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }

    try {
      // Template variables – these must match your EmailJS template placeholders
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Florence",
        to_email: "uwinezaflorence20@gmail.com",
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});

      // Reset back to idle after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrorMsg(
        "Failed to send your message. Please try again or email me directly at uwinezaflorence20@gmail.com"
      );
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
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
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors duration-300 flex-shrink-0">
                  <info.icon className="w-5 h-5 text-accent group-hover:text-primary transition-colors duration-300" />
                </div>
                <div>
                  <span className="text-primary-foreground/60 text-sm">{info.label}</span>
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
              <p className="text-primary-foreground/80 leading-relaxed">
                Available for freelance projects and full-time opportunities.
                Let's discuss how we can work together.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Available for work</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-background rounded-2xl p-8 md:p-10"
            noValidate
          >
            {/* Success Banner */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 rounded-xl p-4 mb-6"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Message sent successfully!</p>
                  <p className="text-xs mt-0.5 opacity-80">
                    Thank you for reaching out, Florence will get back to you soon.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Error Banner */}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 rounded-xl p-4 mb-6"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Failed to send message</p>
                  <p className="text-xs mt-0.5 opacity-80">{errorMsg}</p>
                </div>
              </motion.div>
            )}

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Your Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Florence Uwineza"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === "submitting" || status === "success"}
                  className={`bg-muted border-border focus:border-primary ${
                    errors.name ? "border-destructive focus:border-destructive" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-destructive text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === "submitting" || status === "success"}
                  className={`bg-muted border-border focus:border-primary ${
                    errors.email ? "border-destructive focus:border-destructive" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-destructive text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Subject <span className="text-destructive">*</span>
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project inquiry / Collaboration / Other"
                value={formData.subject}
                onChange={handleChange}
                disabled={status === "submitting" || status === "success"}
                className={`bg-muted border-border focus:border-primary ${
                  errors.subject ? "border-destructive focus:border-destructive" : ""
                }`}
              />
              {errors.subject && (
                <p className="text-destructive text-xs mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.subject}
                </p>
              )}
            </div>

            <div className="mb-8">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Your Message <span className="text-destructive">*</span>
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project, idea, or how I can help..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                disabled={status === "submitting" || status === "success"}
                className={`bg-muted border-border focus:border-primary resize-none ${
                  errors.message ? "border-destructive focus:border-destructive" : ""
                }`}
              />
              {errors.message && (
                <p className="text-destructive text-xs mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.message}
                </p>
              )}
              <p className="text-muted-foreground text-xs mt-1.5 text-right">
                {formData.message.length}/1000
              </p>
            </div>

            <Button
              type="submit"
              variant="hero"
              size="xl"
              className="w-full"
              disabled={status === "submitting" || status === "success"}
            >
              {status === "success" ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Message Sent!
                </>
              ) : status === "submitting" ? (
                <span className="flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                  />
                  Sending...
                </span>
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
