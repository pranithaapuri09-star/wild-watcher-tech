import { Camera, Brain, Bell, Cloud } from "lucide-react";
import techImage from "@/assets/tech-system.jpg";

const Technology = () => {
  const features = [
    {
      icon: Camera,
      title: "Smart Sensors",
      description: "High-resolution cameras and infrared sensors for 24/7 monitoring in all weather conditions.",
    },
    {
      icon: Brain,
      title: "AI Detection",
      description: "Advanced neural networks trained to identify multiple species with 98% accuracy.",
    },
    {
      icon: Bell,
      title: "Instant Alerts",
      description: "Real-time notifications via SMS, app, and automated deterrent systems.",
    },
    {
      icon: Cloud,
      title: "Cloud Analytics",
      description: "Continuous learning and pattern recognition to predict intrusion patterns.",
    },
  ];

  return (
    <section id="technology" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our cutting-edge system combines computer vision, machine learning, 
            and IoT technology to create an intelligent wildlife monitoring solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-card to-secondary/30 p-6 rounded-2xl border border-border card-hover"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={techImage}
                alt="AI Wildlife Detection Technology"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* System Architecture */}
        <div className="bg-gradient-to-br from-secondary/50 to-accent/10 rounded-3xl p-8 md:p-12 border border-border">
          <h3 className="text-3xl font-bold text-center mb-12">System Architecture</h3>
          <div className="grid md:grid-cols-5 gap-4 items-center">
            {[
              { step: "1", title: "Detection", desc: "Sensors monitor perimeter" },
              { step: "2", title: "Analysis", desc: "AI identifies threats" },
              { step: "3", title: "Alert", desc: "Instant notification" },
              { step: "4", title: "Response", desc: "Deterrent activation" },
              { step: "5", title: "Learn", desc: "Pattern analysis" },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-card p-6 rounded-xl text-center border-2 border-primary/20 card-hover">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 text-primary-foreground font-bold text-lg">
                    {item.step}
                  </div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-primary to-accent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
