import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead AI Researcher",
      bio: "PhD in Computer Vision with 10+ years in wildlife conservation technology.",
    },
    {
      name: "Michael Chen",
      role: "Hardware Engineer",
      bio: "Expert in IoT sensors and agricultural technology integration.",
    },
    {
      name: "Priya Sharma",
      role: "Data Scientist",
      bio: "Specializes in machine learning models for environmental applications.",
    },
    {
      name: "James Mitchell",
      role: "Field Operations",
      bio: "15 years experience in farm management and wildlife monitoring.",
    },
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse group of experts passionate about protecting agriculture and wildlife through innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-card to-secondary/30 rounded-2xl p-6 border border-border card-hover text-center"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-5xl font-bold text-primary-foreground">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <div className="text-accent font-semibold mb-4">{member.role}</div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {member.bio}
              </p>
              <div className="flex justify-center gap-3">
                <button className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </button>
                <button className="w-10 h-10 bg-accent/10 hover:bg-accent/20 rounded-lg flex items-center justify-center transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20 text-center">
          <h3 className="text-3xl font-bold mb-4">Join Our Mission</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for passionate individuals to help us build a sustainable future 
            for agriculture and wildlife conservation.
          </p>
          <button className="btn-hero">View Open Positions</button>
        </div>
      </div>
    </section>
  );
};

export default Team;
