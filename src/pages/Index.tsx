import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technology from "@/components/Technology";
import Results from "@/components/Results";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technology />
        <Results />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
