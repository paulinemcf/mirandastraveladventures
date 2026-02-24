import { motion } from "framer-motion";
import { Sparkles, Star, Globe, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import mirandaCharacter from "@/assets/miranda-character.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28">

      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean/20 via-primary/10 to-accent/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-44 left-10 text-accent opacity-60">

        <Star className="w-8 h-8 fill-current" />
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-56 right-16 text-primary opacity-60">

        <Sparkles className="w-10 h-10" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left">

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6">

              <span className="bg-accent/90 text-accent-foreground px-4 py-2 rounded-full font-display font-semibold text-sm md:text-base">
                ✨ A Children's Book Series by Janeth Bell
              </span>
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Travel the World with Miranda{" "}
              <span className="text-gradient-sunset">— One Dream at a Time.</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">An educational children's book series that introduces Spanish-speaking countries, Latin American culture, Caribbean traditions, and critical learning through the STEAM approach through imaginative storytelling.



            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button variant="hero" size="xl" asChild>
                <a
                  href="https://www.amazon.com/s?k=Miranda%27s+Travel+Adventures+Janeth+Bell"
                  target="_blank"
                  rel="noopener noreferrer">

                  <Sparkles className="w-5 h-5" />
                  Get the Books on Amazon
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#books">Explore the Series</a>
              </Button>
            </div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 text-muted-foreground text-sm">

              <div className="flex items-center gap-2 bg-card/80 px-3 py-2 rounded-full border border-border">
                <BookOpen className="w-4 h-4 text-primary" />
                <span>Interactive Activities</span>
              </div>
              <div className="flex items-center gap-2 bg-card/80 px-3 py-2 rounded-full border border-border">
                <Globe className="w-4 h-4 text-primary" />
                <span>Cultural Learning</span>
              </div>
              <div className="flex items-center gap-2 bg-card/80 px-3 py-2 rounded-full border border-border">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span>Ages 8-12</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Miranda Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative">

            <div className="relative z-10">
              <img
                src={mirandaCharacter}
                alt="Miranda - the adventurous main character"
                className="w-full max-w-md mx-auto drop-shadow-2xl" />

            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-ocean/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full">

          <path
            d="M0 60L48 55C96 50 192 40 288 45C384 50 480 70 576 75C672 80 768 70 864 60C960 50 1056 40 1152 45C1248 50 1344 70 1392 80L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
            fill="hsl(var(--background))" />

        </svg>
      </div>
    </section>);

};

export default HeroSection;