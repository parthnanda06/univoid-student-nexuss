import { Users, Target, Zap, ExternalLink } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What is <span className="text-gradient">UniVoid</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            UniVoid brings the Tier-1 ecosystem to every student — communities,
            events, mentorship, AI buddy, and gamified growth. We're building
            the future of student life.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Users className="w-12 h-12 text-primary" />,
              title: "Community First",
              description:
                "Connect with like-minded students across universities and build lasting networks.",
            },
            {
              icon: <Target className="w-12 h-12 text-accent" />,
              title: "Goal Oriented",
              description:
                "Track your academic and personal growth with our gamified point system.",
            },
            {
              icon: <Zap className="w-12 h-12 text-primary" />,
              title: "AI Powered",
              description:
                "Get personalized guidance from Bandhu AI, your 24/7 study companion.",
            },
          ].map((item, index) => (
            <div key={index} className="card-feature text-center group">
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vision Section */}
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-center text-white mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">The Vision</h3>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            To create a unified platform where every student has access to the
            resources, communities, and opportunities they need to thrive in
            their academic journey and beyond.
          </p>
        </div>

        {/* Media Recognition */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Recognized in the Media
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            UniVoid’s journey has been featured in the news as India’s Super App
            for Students, born in Ahmedabad.
          </p>
          <a
            href="https://www.ahmedabadmirror.com/students-journey-becomes-nations-solution-univoid-indias-super-app-for-students--born-in-ahmedabad/81898855.html?fbclid=PAZXh0bgNhZW0CMTEAAadye1TVnmIwiOIq9fpZTnp5ArbQupNGvp8SIwx8NlKNgB7tnfhdWryRTda8aw_aem_EJQCsKmKx3otspdOCzLzDg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            Read Full Article <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
