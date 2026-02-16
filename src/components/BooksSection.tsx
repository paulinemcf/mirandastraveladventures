import { motion } from "framer-motion";
import { ExternalLink, Sparkles, BookOpen, Globe, Users } from "lucide-react";
import { Button } from "./ui/button";
import mirandaDress from "@/assets/miranda-dress.jpg";
import bookColombia from "@/assets/book-colombia.webp";
import bookEcuador from "@/assets/book-ecuador.webp";
import bookPuertoRico from "@/assets/book-puerto-rico.webp";
import bookMexico from "@/assets/book-mexico.webp";
import bookDominicanRepublic from "@/assets/book-dominican-republic.webp";

const books = [
{
  id: 1,
  title: "The Quinceañera Party Mystery in Colombia",
  description:
  "Miranda is happy to experience life in Colombia. However, just when she is having the most fun with her friends, something goes wrong! She becomes a suspect in a jewelry theft at a 15th birthday party (quinceañera)! How can she save herself when she hardly speaks Spanish?",
  amazonUrl: "https://a.co/d/0eYzc88k",
  features: ["Colombia", "Mystery", "Quinceañera Culture"],
  cover: bookColombia
},
{
  id: 2,
  title: "Panic in Ecuador!",
  description:
  "Miranda travels to Ecuador where students are doing class presentations about their country's history and culture. All eyes are on her to talk about Ecuador. How can she? She hardly speaks Spanish, and she knows nothing about Ecuador! Can she escape this one?",
  amazonUrl: "https://a.co/d/02qzq0wu",
  features: ["Ecuador", "School Adventure", "History & Culture"],
  cover: bookEcuador
},
{
  id: 3,
  title: "Salsa in Puerto Rico!",
  description:
  "Miranda is on the island of Puerto Rico when she is confronted by a bully! Can she stand up for herself when she hardly speaks Spanish?",
  amazonUrl: "https://a.co/d/0aAh2bE0",
  features: ["Puerto Rico", "Standing Up to Bullies", "Salsa Dancing"],
  cover: bookPuertoRico
},
{
  id: 4,
  title: "Secrets in Mexico",
  description:
  "Miranda finds herself making friends in Mexico. She is happy to learn about their history and traditions, including the Day of the Dead celebrations, but she also learns a big secret that creates a mystery. Does she add to the confusion?",
  amazonUrl: "https://a.co/d/0bAXmpbp",
  features: ["Mexico", "Day of the Dead", "Mystery Adventure"],
  cover: bookMexico
},
{
  id: 5,
  title: "Drama in the Dominican Republic!",
  description:
  "Miranda enjoys being in the Dominican Republic and making new friends. There she learns about the beauty of the island as well as the damaging effects of hurricanes and climate change. Could she survive a disaster with her limited Spanish?",
  amazonUrl: "https://a.co/d/07Z4MaWJ",
  features: ["Dominican Republic", "Climate Awareness", "Survival"],
  cover: bookDominicanRepublic
}];


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
          className="text-center mb-16">

          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-display font-semibold text-sm mb-4">
            📚 The Book Series
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Miranda's Travel Adventures
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">A captivating book series for school-age readers who are curious about the world. When Miranda falls asleep, her dreams magically transport her to Spanish-speaking countries, where every journey becomes an unforgettable adventure filled with new friends, cultural discoveries, and challenges that test her courage.




          </p>
        </motion.div>

        {/* Miranda Character Feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-3xl p-8 md:p-12 mb-16 border border-border shadow-xl">

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img
                src={mirandaDress}
                alt="Miranda - the adventurous main character"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl" />

              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
            </div>
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Meet Miranda
              </h3>
              <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">In the series, Miranda travels through her dreams to Spanish-speaking countries, where she meets children who introduce her to their history, traditions, daily life, and customs.



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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {books.map((book, index) =>
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group">

              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border h-full flex flex-col">
                {/* Book Cover */}
                <div className="relative overflow-hidden">
                  <img
                  src={book.cover}
                  alt={`Book cover - ${book.title}`}
                  className="w-full aspect-[2/3] object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy" />

                </div>
                {/* Book Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-lg font-bold text-foreground mb-3 leading-tight">
                    {book.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                    {book.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {book.features.map((feature) =>
                  <span
                    key={feature}
                    className="bg-muted text-muted-foreground px-2 py-0.5 rounded-full text-xs font-medium">

                        {feature}
                      </span>
                  )}
                  </div>
                  
                  {/* CTA */}
                  <Button variant="amazon" size="default" className="w-full" asChild>
                    <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer">

                      <ExternalLink className="w-4 h-4" />
                      Buy on Amazon
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Series Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-muted/50 rounded-2xl p-8 text-center">

          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
            Each book explores a different destination and can be read in any order! Every adventure 
            ends with fun, hands-on activities that help readers connect more deeply with the culture 
            they've just explored—making learning feel like part of the journey.
          </p>
          <Button variant="hero" size="xl" asChild>
            <a
              href="https://www.amazon.com/s?k=Miranda%27s+Travel+Adventures+Janeth+Bell"
              target="_blank"
              rel="noopener noreferrer">

              <Sparkles className="w-5 h-5" />
              View All Books on Amazon
            </a>
          </Button>
        </motion.div>
      </div>
    </section>);

};

export default BooksSection;