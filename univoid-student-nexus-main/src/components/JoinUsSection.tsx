import { MessageCircle, Instagram, Users, FileText } from "lucide-react";

const JoinUsSection = () => {
  const ctaButtons = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Join WhatsApp Community",
      description: "Connect with fellow students",
      href: "https://chat.whatsapp.com/J8Bzkfs1pNJJXwM5Lm7GvU ", // Please provide actual WhatsApp link
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Follow us on Instagram",
      description: "Stay updated with latest news",
      href: "https://www.instagram.com/univoid_community",
      color:
        "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Join Our Team",
      description: "Build the future with us",
      href: "https://docs.google.com/forms/d/e/1FAIpQLScc3JLgjT_xQPYTWCMVRzgFNBfRqOYmtfiSyjAWTu1nUpjT5w/viewform?usp=dialog",
      color: "bg-primary hover:bg-primary-dark",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Take Our Survey",
      description: "Help us improve UniVoid",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSf5r6QAPZ-t1phye3Lm_Qr4W9_2CePR7EYAHYxunTrOmT2Jbw/viewform?usp=dialog ",
      color: "bg-accent hover:bg-accent/90",
    },
  ];

  return (
    <section
      id="join"
      className="section-padding bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Be part of the UniVoid Journey 🚀
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-2">
            Join thousands of students who are already building the future of
            student life.
          </p>
          <p className="text-lg text-muted-foreground">
            Your participation helps us build the future of UniVoid.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {ctaButtons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="card-elevated hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`${button.color} text-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    {button.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                      {button.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {button.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-primary text-sm font-medium group-hover:underline">
                    Join Now →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { number: "500+", label: "Early Supporters" },
            { number: "25+", label: "Universities Interested" },
            { number: "100%", label: "Student Focused" },
          ].map((stat, index) => (
            <div key={index} className="card-elevated">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Student Experience?
            </h3>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Don't wait for others to create the change. Be part of the
              movement that's reshaping how students connect, learn, and grow.
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
