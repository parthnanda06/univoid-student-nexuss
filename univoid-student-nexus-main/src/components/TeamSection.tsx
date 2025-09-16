import { Linkedin, Twitter, Instagram } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Heer Patel",
      role: "Founder & CEO",
      image: "/heer.jpg", // make sure /heer.jpg is inside public folder
      bio: "Passionate about transforming student experiences through technology.",
      social: {
        linkedin: "https://www.linkedin.com/in/heer-patel-8b709b335/",
        twitter: null,
        instagram:
          "https://www.instagram.com/heer_patel.1036?igsh=MTUxbmNjYzdxaHFjYw%3D%3D&utm_source=qr",
      },
    },
    {
      name: "Parth Bhanushali",
      role: "Co-Founder & CTO",
      image: "/Parth.jpg", // make sure /Parth.jpg is inside public folder
      bio: "AI and full-stack expert building the future of education.",
      social: {
        linkedin: "https://www.linkedin.com/in/parth-bhanushali-838046275/",
        twitter: null,
        instagram: "https://www.instagram.com/bhanushali_parth_6/",
      },
    },
  ];

  return (
    <section id="team" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Passionate innovators dedicated to revolutionizing student life.
          </p>

          {/* Vision */}
          <div className="bg-gradient-primary rounded-2xl p-6 md:p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Our Vision</h3>
            <p className="text-lg opacity-90">
              "To create a world where every student has access to the tools,
              communities, and opportunities they need to unlock their full
              potential."
            </p>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="card-elevated text-center group">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/150?text=No+Image";
                  }}
                />
                <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {member.bio}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center space-x-4">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {member.social.instagram && (
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Hiring Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-accent/10 text-accent border border-accent/20">
            <span className="font-medium">
              Want to join our team? We're hiring!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
