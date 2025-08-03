import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import DemoSection from '@/components/sections/DemoSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ResourcesSection from '@/components/sections/ResourcesSection';
import TeamSection from '@/components/sections/TeamSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <DemoSection />
        <FeaturesSection />
        <ResourcesSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
