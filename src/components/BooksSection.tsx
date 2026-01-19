import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import bookVolcano from "@/assets/book-volcano.jpg";
import bookOcean from "@/assets/book-ocean.jpg";
import bookDance from "@/assets/book-dance.jpg";

const books = [
  {
    id: 1,
    title: "The Volcano Mystery",
    description:
      "Miranda discovers ancient secrets hidden within a rumbling volcano. Will she solve the mystery before time runs out?",
    image: bookVolcano,
    features: ["Mystery Adventure", "Fun Activities", "Learn about Volcanoes"],
  },
  {
    id: 2,
    title: "Surfing the Tropics",
    description:
      "Riding waves and chasing dreams! Miranda learns the art of surfing while uncovering what looks like diamonds in the sea.",
    image: bookOcean,
    features: ["Ocean Adventures", "Surfing Techniques", "Tropical Life"],
  },
  {
    id: 3,
    title: "Salsa Dancing Secrets",
    description:
      "The rhythm of Latin America comes alive! Join Miranda as she learns salsa and discovers family secrets.",
    image: bookDance,
    features: ["Cultural Celebration", "Dance & Music", "Family Stories"],
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
            Explore Miranda's Adventures
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Each book takes you on a thrilling journey through Latin America, 
            filled with mysteries, culture, and fun activities at the end!
          </p>
        </motion.div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border">
                {/* Book Cover */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover CTA */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="amazon" size="lg" asChild>
                      <a
                        href="https://www.amazon.com/s?k=Miranda%27s+Travel+Adventures+Janeth+Bell"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Buy on Amazon
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Book Info */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {book.title}
                  </h3>
                  <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                    {book.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {book.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
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
