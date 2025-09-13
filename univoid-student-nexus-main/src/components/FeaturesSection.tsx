import { 
  Users, 
  Rocket, 
  Calendar, 
  BookOpen, 
  Bot, 
  Trophy, 
  MessageSquare, 
  FileCheck, 
  CheckSquare,
  MapPin 
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Hub",
      description: "Connect with students across universities. Join study groups, clubs, and interest-based communities.",
      color: "text-blue-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Startup Space",
      description: "Launch your startup ideas, find co-founders, and access entrepreneurship resources.",
      color: "text-purple-500"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Event & Activity Manager",
      description: "Discover, organize, and manage campus events. Never miss important opportunities.",
      color: "text-green-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Resource Library",
      description: "Access curated academic resources, study materials, and career guidance.",
      color: "text-orange-500"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Bandhu AI (AI Study Buddy)",
      description: "Get personalized study help, career advice, and academic support 24/7.",
      color: "text-cyan-500"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Gamification & Void Points",
      description: "Earn points for activities, unlock achievements, and track your growth journey.",
      color: "text-yellow-500"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Discussion Forums",
      description: "Engage in meaningful discussions, get answers, and share knowledge.",
      color: "text-pink-500"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Team Collaboration Tools",
      description: "Work seamlessly with teammates on projects using integrated collaboration features.",
      color: "text-indigo-500"
    },
    {
      icon: <CheckSquare className="w-8 h-8" />,
      title: "Task Manager",
      description: "Organize assignments, deadlines, and personal goals in one unified dashboard.",
      color: "text-red-500"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Local Community Creation",
      description: "Create and manage local student communities in your area or university.",
      color: "text-emerald-500"
    }
  ];

  return (
    <section id="features" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to excel in your student journey, all in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-feature group">
              <div className={`${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary">
            <span className="font-medium">And many more features coming soon...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;