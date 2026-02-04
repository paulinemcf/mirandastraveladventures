import { motion } from "framer-motion";
import { ExternalLink, Sparkles, BookOpen, Globe, Users } from "lucide-react";
import { Button } from "./ui/button";
import mirandaCharacter from "@/assets/miranda-character.png";

const books = [
  {
    id: 1,
    title: "Miranda's Travel Adventures: Mexico",
    description:
      "Miranda travels to Mexico, where she explores vibrant markets, learns about traditions like Day of the Dead, and meets local children who introduce her to the country's rich history and daily life.",
    amazonUrl: "https://a.co/d/8F5MnwE",
    features: ["Spanish Vocabulary", "Mexican Culture", "Mystery Adventure"],
  },
  {
    id: 2,
    title: "Miranda's Travel Adventures: Peru",
    description:
      "In this adventure, Miranda explores the wonders of Peru, including the Andes Mountains and Machu Picchu. She solves mysteries while learning about Incan history and making new friends.",
    amazonUrl: "https://a.co/d/4kCaxCz",
    features: ["Incan Civilization", "Geography", "Problem Solving"],
  },
];

const BooksSection = () => {
  return (
    <section id="books" className="py-20 md:py-32 bg-gradient-adventure">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-display font-semibold text-sm mb-4">
            📚 The Book Series
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Miranda's Travel Adventures
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            An engaging children's book series that invites young readers to explore the world through 
            imagination, curiosity, and courage. Designed for school-age readers, each story blends 
            adventure, mystery, and humor with real cultural learning.
          </p>
        </motion.div>

        {/* Miranda Character Feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-3xl p-8 md:p-12 mb-16 border border-border shadow-xl"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img
                src={mirandaCharacter}
                alt="Miranda - the adventurous main character"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
            </div>
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Meet Miranda
              </h3>
              <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
                In the series, Miranda travels through her dreams to Spanish-speaking countries across 
                Latin America, where she meets local children who introduce her to their history, traditions, 
                daily life, and customs.
              </p>
              <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
                As Miranda navigates unfamiliar places, languages, and experiences, she learns how curiosity 
                and kindness can turn fear of the unknown into confidence and connection.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Cultural Learning</span>
                </div>
                <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Interactive Activities</span>
                </div>
              <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Ages 8-12 (Boys & Girls)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border h-full flex flex-col">
                {/* Book Info */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {book.title}
                  </h3>
                  <p className="font-body text-muted-foreground mb-6 leading-relaxed flex-1">
                    {book.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {book.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <Button variant="amazon" size="lg" className="w-full" asChild>
                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Buy on Amazon
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Series Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-muted/50 rounded-2xl p-8 text-center"
        >
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
            Perfect for families, classrooms, and libraries—every book concludes with interactive 
            activities that deepen cultural understanding and encourage reflection beyond the page. 
            Each book stands on its own, allowing readers to jump in at any point!
          </p>
          <Button variant="hero" size="xl" asChild>
            <a
              href="https://www.amazon.com/s?k=Miranda%27s+Travel+Adventures+Janeth+Bell"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Sparkles className="w-5 h-5" />
              View All Books on Amazon
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BooksSection;
