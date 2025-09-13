import { CheckCircle, Sparkles, TrendingUp } from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [
    {
      title: "Unified Communities",
      description: "All student groups, clubs, and networks in one place"
    },
    {
      title: "Smart Event Discovery",
      description: "Never miss important events with AI-powered recommendations"
    },
    {
      title: "Resource Library",
      description: "Centralized access to all academic and career resources"
    },
    {
      title: "AI-Powered Mentorship",
      description: "24/7 guidance from Bandhu AI and peer mentors"
    },
    {
      title: "Gamified Growth",
      description: "Track progress and achievements with Void Points"
    },
    {
      title: "Local Community Creation",
      description: "Build and manage your own student communities"
    }
  ];

  return (
    <section id="solutions" className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            The UniVoid Solution
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            If you're inside UniVoid, you grow faster.
            <br />
            <span className="text-gradient">If you're outside, you're already behind.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            UniVoid unifies communities, events, resources, and AI-powered mentorship 
            into one powerful platform designed for student success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="card-feature group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-center text-white">
          <div className="flex justify-center mb-6">
            <TrendingUp className="w-16 h-16 opacity-80" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join the Student Success Revolution
          </h3>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Don't let fragmented tools hold you back. Experience the power of 
            unified student life management with UniVoid.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Join the Revolution
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;