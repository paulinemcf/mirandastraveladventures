import { motion } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-adventure">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-display font-semibold text-sm mb-6">
            📬 Get in Touch
          </span>
          
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let's Connect!
          </h2>
          
          <p className="font-body text-lg text-muted-foreground mb-12 leading-relaxed">
            Have questions about the book series? Interested in school visits or readings? 
            Want to share your child's Miranda adventure? I'd love to hear from you!
          </p>

          {/* Contact Options */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <motion.a
              href="mailto:contact@mirandastraveladventures.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-sunset flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">Email Me</h3>
              <p className="text-muted-foreground text-sm">For general inquiries and collaborations</p>
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-ocean flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">Book a Visit</h3>
              <p className="text-muted-foreground text-sm">School visits and reading events</p>
            </motion.a>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-card p-8 rounded-2xl shadow-xl border border-border">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Stay Updated on New Adventures!
            </h3>
            <p className="text-muted-foreground mb-6">
              Be the first to know about new books, activities, and exclusive content.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary font-body"
              />
              <Button variant="default" size="lg" type="submit">
                <Send className="w-4 h-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
