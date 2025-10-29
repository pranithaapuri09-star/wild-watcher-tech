import { AlertTriangle, TrendingDown, Shield } from "lucide-react";

const About = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Crop Damage",
      description: "Wild animals cause billions in agricultural losses annually, threatening farmer livelihoods and food security.",
    },
    {
      icon: TrendingDown,
      title: "Economic Impact",
      description: "Traditional prevention methods are costly, inefficient, and often harmful to wildlife populations.",
    },
    {
      icon: Shield,
      title: "Human-Wildlife Conflict",
      description: "Increasing conflicts between farmers and wildlife need sustainable, technology-driven solutions.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">The Challenge We're Solving</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wild animal intrusions into farmlands result in severe crop damage, economic losses, 
            and increased human-wildlife conflict. Our AI-powered solution offers a humane and effective alternative.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl border border-border card-hover"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                <problem.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To create a sustainable, AI-powered ecosystem that protects both agricultural 
                interests and wildlife habitats. By leveraging cutting-edge computer vision 
                and machine learning, we're building a future where farmers and nature coexist harmoniously.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/60 backdrop-blur-sm p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Farms Protected</div>
              </div>
              <div className="bg-card/60 backdrop-blur-sm p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-accent mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Damage Reduction</div>
              </div>
              <div className="bg-card/60 backdrop-blur-sm p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-primary mb-2">15k+</div>
                <div className="text-sm text-muted-foreground">Animals Detected</div>
              </div>
              <div className="bg-card/60 backdrop-blur-sm p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Wildlife Safe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
