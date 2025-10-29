import { BarChart3, TrendingUp, Award, CheckCircle } from "lucide-react";

const Results = () => {
  const metrics = [
    {
      icon: BarChart3,
      value: "98.3%",
      label: "Detection Accuracy",
      color: "from-primary to-primary/70",
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Crop Loss Reduction",
      color: "from-accent to-accent/70",
    },
    {
      icon: Award,
      value: "1.8s",
      label: "Average Response Time",
      color: "from-primary to-accent",
    },
  ];

  const achievements = [
    "Successfully deployed across 500+ agricultural sites",
    "Detected and deterred over 15,000 wildlife intrusions",
    "Zero harm to wildlife while protecting crops",
    "Integration with existing farm management systems",
    "Reduced false alarms by 87% compared to traditional methods",
    "24/7 operational uptime with minimal maintenance",
  ];

  return (
    <section id="results" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Proven Results</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our technology delivers measurable impact, protecting crops while preserving wildlife.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border card-hover text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                <metric.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {metric.value}
              </div>
              <div className="text-muted-foreground font-medium">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="bg-gradient-to-br from-card to-secondary/50 rounded-3xl p-8 md:p-12 border border-border">
          <h3 className="text-3xl font-bold mb-8 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-background/50 p-6 rounded-xl border border-border/50 card-hover"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-accent-foreground" />
                </div>
                <p className="text-foreground/90 leading-relaxed pt-1">{achievement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Chart Placeholder */}
        <div className="mt-16 bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold mb-6 text-center">Performance Over Time</h3>
          <div className="h-64 bg-gradient-to-br from-secondary/30 to-accent/5 rounded-xl flex items-center justify-center border border-border/50">
            <div className="text-center text-muted-foreground">
              <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>Chart visualization showing accuracy improvements and incident reductions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
