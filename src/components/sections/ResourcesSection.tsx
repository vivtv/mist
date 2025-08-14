import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Presentation, Briefcase, ExternalLink } from 'lucide-react';

const ResourcesSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const resources = [
    {
      icon: FileText,
      title: "4P Marketing Canvas",
      description:
        "Exploring Product, Price, Place, and Promotion to drive air pollution awareness through gamified engagement.",
      type: "Problem & Solution Approach",
      action: "View Research",
      gradient: "from-blue-500/10 to-blue-600/10",
      url: "/assets/MIST 4P.png",
    },
    {
      icon: Briefcase,
      title: "Business Model Canvas",
      description:
        "Strategic framework outlining MIST's value proposition, revenue streams, and market positioning.",
      type: "Business Strategy",
      action: "View Canvas",
      gradient: "from-green-500/10 to-green-600/10",
      url: "/assets/Business Model.png",
    },
    {
      icon: Presentation,
      title: "SWOT Canvas",
      description:
        "Complete SWOT analysis showcasing MIST's strengths, weaknesses, opportunities, and threats.",
      type: "Analysis Graphic",
      action: "View Canvas",
      gradient: "from-purple-500/10 to-purple-600/10",
      url: "/assets/SWOT.png",
    },
    {
      icon: FileText,
      title: "Research Paper",
      description:
        "In-depth academic paper detailing MIST's methodology, results, and insights for future environmental impact tracking.",
      type: "Academic Research",
      action: "View Paper",
      gradient: "from-indigo-500/10 to-indigo-600/10", // updated cool tone
      url: "/assets/Research Paper.png",
    },

    {
      icon: Presentation,
      title: "UVP",
      description:
        "A clear Unique Value Proposition statement showcasing MIST's key differentiation in the market.",
      type: "Value Proposition",
      action: "View UVP",
      gradient: "from-pink-500/10 to-pink-600/10",
      url: "/assets/MIST UVP.png",
    },
    {
      icon: Presentation,
      title: "Ocean Colors",
      description:
        "Ocean-inspired brand color exploration for building a strong and memorable identity.",
      type: "Design & Branding",
      action: "View Colors",
      gradient: "from-cyan-500/10 to-cyan-600/10",
      url: "/assets/OCEANS.png",
    },
  ];

  return (
    <section id="resources" className="py-20 bg-gradient-mist">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Explore Our Research & Strategy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive deep into the research, strategy, and vision behind MIST. Access our comprehensive
            documentation and strategic planning materials.
          </p>
        </div>

        {/* Resource Cards */}
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
                <div className="text-sm text-primary font-medium mb-2">{resource.type}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{resource.description}</p>

              <Button
                variant="mist"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                onClick={() => setSelectedImage(resource.url)}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {resource.action}
              </Button>

              <div className="mt-4 text-center">
                <span className="text-xs text-muted-foreground bg-background/50 px-3 py-1 rounded-full">
                  Viewable in-page
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Image Preview Section */}
        {selectedImage && (
          <div className="mt-16 max-w-6xl mx-auto bg-white p-4 rounded-lg shadow-lg border border-primary/10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-primary">Preview Document</h3>
              <Button variant="outline" size="sm" onClick={() => setSelectedImage(null)}>
                Close
              </Button>
            </div>

            <div className="w-full flex justify-center">
              <img
                src={selectedImage}
                alt="Document Preview"
                className="max-h-[80vh] w-auto rounded-md border"
              />
            </div>
          </div>
        )}

        {/* Note */}
        <div className="mt-12 text-center">
          <Card className="p-6 max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <p className="text-muted-foreground">
              <strong className="text-primary">Note:</strong> All documents are viewable as in-page images.
              No need to download — simply click a resource to preview it.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
