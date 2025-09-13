import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProblemsSection from '@/components/ProblemsSection';
import SolutionsSection from '@/components/SolutionsSection';
import FeaturesSection from '@/components/FeaturesSection';
import TeamSection from '@/components/TeamSection';
import RoadmapSection from '@/components/RoadmapSection';
import JoinUsSection from '@/components/JoinUsSection';
import SupportSection from '@/components/SupportSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProblemsSection />
      <SolutionsSection />
      <FeaturesSection />
      <TeamSection />
      <RoadmapSection />
      <JoinUsSection />
      <SupportSection />
      <Footer />
    </div>
  );
};

export default Index;
