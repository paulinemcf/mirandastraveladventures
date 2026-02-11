import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import bannerHero from "@/assets/banner-hero.webp";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Books", href: "#books" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border"
    >
      {/* Banner and Nav in a row */}
      <div className="flex items-center justify-between px-4 py-2">
        {/* Banner logo - not full width */}
        <img
          src={bannerHero}
          alt="Miranda's Travel Adventures"
          className="h-12 md:h-14 w-auto object-contain"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-display font-semibold text-foreground/90 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button variant="amazon" size="lg" asChild>
            <a
              href="https://www.amazon.com/s?k=Miranda%27s+Travel+Adventures+Janeth+Bell"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy on Amazon
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-card/95 backdrop-blur-md border-b border-border py-4 px-4"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-display font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="amazon" size="lg" asChild className="w-full">
              <a
                href="https://www.amazon.com/s?k=Miranda%27s+Travel+Adventures+Janeth+Bell"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy on Amazon
              </a>
            </Button>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
