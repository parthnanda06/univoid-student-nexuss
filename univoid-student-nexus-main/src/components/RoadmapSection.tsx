import { CheckCircle, Circle, Clock } from 'lucide-react';

const RoadmapSection = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      status: "in-progress",
      timeline: "Q1 2024",
      features: [
        "Community Hub Development",
        "Resource Library System",
        "Event Manager Core",
        "User Authentication & Profiles",
        "Basic Mobile App"
      ]
    },
    {
      phase: "Phase 2",
      title: "Intelligence",
      status: "planned",
      timeline: "Q2-Q3 2024",
      features: [
        "Bandhu AI Integration",
        "Gamification System & Void Points",
        "Advanced Task Manager",
        "Smart Notifications",
        "Discussion Forums"
      ]
    },
    {
      phase: "Phase 3",
      title: "Scale & Innovation",
      status: "future",
      timeline: "Q4 2024 & Beyond",
      features: [
        "Local Community Creation Tools",
        "National University Network",
        "Advanced AI Features",
        "Enterprise Partnerships",
        "Global Expansion"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-6 h-6 text-primary" />;
      default:
        return <Circle className="w-6 h-6 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500 bg-green-50';
      case 'in-progress':
        return 'border-primary bg-primary/5';
      default:
        return 'border-muted-foreground/30 bg-muted/20';
    }
  };

  return (
    <section id="roadmap" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Development <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our journey to revolutionize student life, step by step.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary transform -translate-x-2 md:-translate-x-2 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className={`card-elevated ${getStatusColor(phase.status)}`}>
                    <div className="flex items-center gap-3 mb-4">
                      {getStatusIcon(phase.status)}
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {phase.phase}: {phase.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{phase.timeline}</p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {phase.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-lg opacity-90 mb-6">
              Follow our progress and be the first to know about new features and updates.
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
              Join Our Newsletter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;