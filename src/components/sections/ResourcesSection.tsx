import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Presentation, Briefcase, ExternalLink } from 'lucide-react';

const ResourcesSection = () => {
  const resources = [
    {
      icon: FileText,
      title: "Research Paper",
      description: "Comprehensive study on air pollution impacts and gamification strategies for environmental health awareness.",
      type: "PDF Document",
      action: "View Research",
      gradient: "from-blue-500/10 to-blue-600/10"
    },
    {
      icon: Briefcase,
      title: "Business Model Canvas",
      description: "Strategic framework outlining MIST's value proposition, revenue streams, and market positioning.",
      type: "Business Strategy",
      action: "View Canvas",
      gradient: "from-green-500/10 to-green-600/10"
    },
    {
      icon: Presentation,
      title: "Pitch Deck Presentation",
      description: "Complete investor presentation showcasing MIST's market opportunity and growth potential.",
      type: "Presentation Slides",
      action: "View Deck",
      gradient: "from-purple-500/10 to-purple-600/10"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gradient-mist">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Explore Our Research & Strategy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive deep into the research, strategy, and vision behind MIST. Access our comprehensive 
            documentation and strategic planning materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resources.map((resource, index) => (
            <Card 
              key={index}
              className={`p-8 group hover:shadow-card hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br ${resource.gradient} border-primary/10`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                  <resource.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <div className="text-sm text-primary font-medium mb-2">
                  {resource.type}
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {resource.description}
              </p>
              
              <Button 
                variant="mist" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {resource.action}
              </Button>
              
              {/* Preview indicator */}
              <div className="mt-4 text-center">
                <span className="text-xs text-muted-foreground bg-background/50 px-3 py-1 rounded-full">
                  Viewable in-page
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional note */}
        <div className="mt-12 text-center">
          <Card className="p-6 max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <p className="text-muted-foreground">
              <strong className="text-primary">Note:</strong> All documents are optimized for in-page viewing. 
              Click any resource above to explore the full content without leaving the site.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;