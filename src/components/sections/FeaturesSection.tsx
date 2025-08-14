import React from 'react';
import { Card } from '@/components/ui/card';
import { Gamepad2, Activity, Brain, Moon } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Gamepad2,
      title: "Gamified Awareness",
      description: "Earn points, unlock achievements, and compete with friends while making environmentally conscious choices. Turn air quality monitoring into an engaging experience."
    },
    {
      icon: Activity,
      title: "Real-time Air Quality Tracking",
      description: "Monitor PM2.5, PM10, ozone, and other pollutants across multiple locations. Get instant notifications when air quality changes in your area."
    },
    {
      icon: Brain,
      title: "Smart AI Health Assistant",
      description: "Receive personalized health recommendations based on current air conditions, your health profile, and planned activities. AI-powered insights for better decisions."
    },
    {
      icon: Moon,
      title: "Customizable Dark Mode",
      description: "Beautiful, eye-friendly dark mode interface that adapts to your preferences. Designed for comfortable viewing in all lighting conditions."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why <span className="bg-gradient-primary bg-clip-text text-transparent">MIST</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the features that make MIST the most comprehensive and engaging 
            air quality tracking platform for environmental health awareness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 text-center group hover:shadow-card hover:-translate-y-2 transition-all duration-500 bg-gradient-to-b from-card to-card/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              {/* Decorative bottom accent */}
              <div className="w-12 h-1 bg-gradient-primary rounded-full mx-auto mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Additional feature highlight */}
        <div className="mt-16 text-center">
          <Card className="p-8 max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              Environmental Impact Tracking
            </h3>
            <p className="text-lg text-muted-foreground">
              Track your carbon footprint and follow the MIST community’s clean air progress. Every action counts towards a healthier planet.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;