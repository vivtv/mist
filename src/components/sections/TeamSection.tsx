import React from 'react';
import { Card } from '@/components/ui/card';
import { Github, Mail } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Pongpisut Somsagun",
      role: "Lead Developer & AI Specialist",
      description: "A highly skilled developer who led backend systems and implemented intelligent AI features.",
      links: { github: "https://github.com/freddycleann", email: "alex@mist.app" }
    },
    {
      name: "Vivien Therese Villalobos",
      role: "Landing Page Designer & Business Support",
      description: "Crafted the visual landing page while assisting in team planning, research and documentation.",
      links: { github: "https://github.com/vivtv", email: "sarah@mist.app" }
    },
    {
      name: "Piyapat Pholchan",
      role: "Technical Support",
      description: "Helped maintain project functionality and testing.",
      links: { github: "https://github.com/Piyapiyapat", email: "pang26piyapat@gmail.com" }
    },
    {
      name: "Patchara Sumalanurak",
      role: "Technical Support",
      description: "Provided technical help, and testing throughout development stages.",
      links: { github: "https://github.com/FadedAwayIntoNothingness", email: "s6707012660069@email.kmutnb.ac.th" }
    },
    {
      name: "Sonam Norbu",
      role: "Business Support",
      description: "Contributed to documentation and aligning the project with team needs.",
      links: { github: "#", email: "jordan@mist.app" }
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Meet the Team Behind <span className="bg-gradient-primary bg-clip-text text-transparent">MIST</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse group of developers and designers united by our mission 
            to make air quality data accessible and actionable for healthier communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="p-6 text-center group hover:shadow-card hover:-translate-y-1 transition-all duration-500 bg-gradient-to-b from-card to-card/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                <span className="text-2xl font-bold text-primary-foreground">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              {/* Name and role */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              
              <div className="text-primary font-medium mb-4">
                {member.role}
              </div>
              
              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {member.description}
              </p>
              
              {/* Social links */}
              <div className="flex justify-center space-x-4">
                <a 
                  href={member.links.github}
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href={`mailto:${member.links.email}`}
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Team mission */}
        <div className="mt-16 text-center">
          <Card className="p-8 max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground">
              We believe that everyone deserves access to clean air and the information needed to protect their health. 
              Through innovative technology and user-centered design, we're making environmental data meaningful and actionable.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;