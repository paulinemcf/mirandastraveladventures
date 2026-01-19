import { motion } from "framer-motion";
import { Heart, MapPin, Pen, Sparkles } from "lucide-react";
import authorImage from "@/assets/author-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={authorImage}
                alt="Janeth Bell - Author"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            
            {/* Floating badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-1/4 bg-card shadow-xl rounded-xl p-4 border border-border"
            >
              <div className="flex items-center gap-2">
                <Pen className="w-5 h-5 text-primary" />
                <span className="font-display font-semibold text-foreground">Preteen Author</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-display font-semibold text-sm mb-6">
              ✍️ Meet the Author
            </span>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Hello! I'm{" "}
              <span className="text-gradient-sunset">Janeth Bell</span>
            </h2>
            
            <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
              Welcome to my world of adventure! I'm passionate about sharing the 
              vibrant culture, mysteries, and beauty of Latin America with young readers 
              around the world.
            </p>
            
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              Through Miranda's adventures, I invite children to explore life in the tropics, 
              discover the magic of volcanoes, learn about diverse cultures, and find the 
              heroes within themselves. Every book includes fun activities to extend the 
              learning and adventure!
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-muted rounded-xl">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Latin American Roots</h4>
                  <p className="text-sm text-muted-foreground">Authentic stories from lived experiences</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-muted rounded-xl">
                <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Celebrating Diversity</h4>
                  <p className="text-sm text-muted-foreground">Stories that embrace cultural richness</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-muted rounded-xl">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Fun Activities</h4>
                  <p className="text-sm text-muted-foreground">Interactive learning in every book</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-muted rounded-xl">
                <div className="w-10 h-10 rounded-full bg-volcano/10 flex items-center justify-center flex-shrink-0">
                  <Pen className="w-5 h-5 text-volcano" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Young Readers</h4>
                  <p className="text-sm text-muted-foreground">Perfect for ages 8-12</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
