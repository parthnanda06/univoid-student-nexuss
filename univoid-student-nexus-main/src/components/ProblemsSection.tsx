import { FileX, CalendarX, Eye, Users2 } from 'lucide-react';

const ProblemsSection = () => {
  const problems = [
    {
      icon: <FileX className="w-8 h-8" />,
      title: "Scattered Notes",
      description: "Important resources spread across multiple platforms, making it hard to find what you need when you need it."
    },
    {
      icon: <CalendarX className="w-8 h-8" />,
      title: "Missed Events",
      description: "Student events and opportunities lost in endless group chats and email threads."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Lack of Visibility",
      description: "Hidden opportunities and resources that only a few students know about."
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Weak Networking",
      description: "Difficulty connecting with the right peers, mentors, and opportunities for growth."
    }
  ];

  return (
    <section id="problems" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            The Problems We <span className="text-gradient">Solve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every student faces these challenges. We built UniVoid to eliminate them once and for all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div key={index} className="card-elevated group hover:border-primary/30">
              <div className="text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                {problem.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-destructive/10 border border-destructive/20">
            <span className="text-destructive font-medium">
              Result: Students falling behind while opportunities pass by
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;