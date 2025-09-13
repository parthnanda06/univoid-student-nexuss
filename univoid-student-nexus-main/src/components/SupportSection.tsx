import { Coffee, Heart, Star, DollarSign } from 'lucide-react';

const SupportSection = () => {
  return (
    <section id="support" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-primary">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Help Us Grow <span className="text-gradient">UniVoid</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your support fuels our mission to revolutionize student life. 
            Every contribution helps us build better features and reach more students.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Coffee className="w-8 h-8" />,
              title: "Buy us a Coffee",
              description: "Fuel our late-night coding sessions",
              amount: "$5"
            },
            {
              icon: <Star className="w-8 h-8" />,
              title: "Premium Support",
              description: "Help us add premium features",
              amount: "$25"
            },
            {
              icon: <DollarSign className="w-8 h-8" />,
              title: "Major Sponsor",
              description: "Become a development partner",
              amount: "$100+"
            }
          ].map((option, index) => (
            <div key={index} className="card-elevated group hover:border-primary/30">
              <div className="text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                {option.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {option.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {option.description}
              </p>
              <div className="text-2xl font-bold text-gradient mb-4">
                {option.amount}
              </div>
              <button className="w-full btn-outline group-hover:bg-primary group-hover:text-white">
                Support Now
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Every Contribution Matters
          </h3>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Whether it's a coffee or a major sponsorship, your support directly 
            impacts thousands of students who will benefit from UniVoid.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Buy us a Coffee ☕
            </button>
            <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/30 transition-all duration-300">
              Custom Amount
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <span className="font-medium">Alternative ways to support:</span> Share UniVoid with friends, 
            provide feedback, or contribute to our open-source components.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;