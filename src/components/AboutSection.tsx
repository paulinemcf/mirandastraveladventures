import { motion } from "framer-motion";
import { Heart, MapPin, BookOpen, Sparkles } from "lucide-react";
import authorImage from "@/assets/author-janeth.jpg";

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
                alt="Janeth Bell - Author of Miranda's Travel Adventures"
                className="w-full max-w-xs mx-auto rounded-2xl shadow-2xl"
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
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="font-display font-semibold text-foreground">Children's Author</span>
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
              Hi! I'm{" "}
              <span className="text-gradient-sunset">Janeth Bell</span>
            </h2>
            
            <p className="font-body text-lg text-muted-foreground mb-4 leading-relaxed">
              I love writing stories for kids who are curious about the world 🌍.
            </p>
            
            <p className="font-body text-muted-foreground mb-4 leading-relaxed">
              I grew up on the beautiful island of Jamaica, and from a young age I learned how important 
              kindness and caring for others are. When I was a kid, I spent time helping at a children's 
              hospital where my mom worked, and those experiences stayed with me.
            </p>
            
            <p className="font-body text-muted-foreground mb-4 leading-relaxed">
              I took my first big trip when I was eleven years old, traveling to places like England, France, 
              and Spain. It wasn't always easy — I had to figure out new languages, new foods, and how to make 
              new friends — but I learned that laughter, courage, and curiosity can help anywhere you go.
            </p>
            
            <p className="font-body text-muted-foreground mb-4 leading-relaxed">
              Later, I lived in Mexico and became a teacher in New York City, helping students from many 
              different countries learn English and Spanish. That's when I knew I wanted to write stories 
              that help kids learn about other cultures in a fun and exciting way.
            </p>
            
            <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed font-medium">
              My hope is that these stories inspire you to be brave, kind, and excited to learn about the world.
            </p>
            
            <p className="font-display text-xl text-primary font-semibold">
              Happy reading — and happy travels! ✨
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3 p-4 bg-muted rounded-xl">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Jamaican Roots</h4>
                  <p className="text-sm text-muted-foreground">World traveler since age 11</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-muted rounded-xl">
                <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Former Teacher</h4>
                  <p className="text-sm text-muted-foreground">NYC educator, English & Spanish</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-muted rounded-xl">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Cultural Explorer</h4>
                  <p className="text-sm text-muted-foreground">Lived in Mexico & beyond</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-muted rounded-xl">
                <div className="w-10 h-10 rounded-full bg-volcano/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-volcano" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Passionate Writer</h4>
                  <p className="text-sm text-muted-foreground">Making learning fun for kids</p>
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
