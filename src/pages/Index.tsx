import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BooksSection from "@/components/BooksSection";
import AboutSection from "@/components/AboutSection";
import IllustratorSection from "@/components/IllustratorSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BooksSection />
        <AboutSection />
        <IllustratorSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
