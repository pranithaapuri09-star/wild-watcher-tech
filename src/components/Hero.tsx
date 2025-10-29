import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farmland.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center pt-20">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Protecting Crops with{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              AI-Powered
            </span>{" "}
            Wildlife Detection
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Real-time alerts and intelligent monitoring to safeguard your farmland from wild animal intrusions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="btn-hero group"
              onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See How It Works
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 hover:bg-primary/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border">
              <div className="text-3xl md:text-4xl font-bold text-accent">98%</div>
              <div className="text-sm text-muted-foreground mt-1">Detection Accuracy</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border">
              <div className="text-3xl md:text-4xl font-bold text-accent">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Monitoring</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-accent">&lt;2s</div>
              <div className="text-sm text-muted-foreground mt-1">Alert Response Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
