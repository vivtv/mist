import React from 'react';
import { Card } from '@/components/ui/card';
import { Github, Mail } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Pongpisut Somsagun",
      role: "Lead Developer & AI Specialist",
      description: "A developer who led backend systems, implemented intelligent AI features, and contributed to building app components using Flutter.",
      links: { github: "https://github.com/freddycleann", email: "https://viktor.pongpisut@gmail.com" }
    },
    {
      name: "Vivien Therese Villalobos",
      role: "Landing Page Designer & Business Support",
      description: "Crafted the landing page using Vite and React, while also assisting in team planning, research, and documentation.",
      links: { github: "https://github.com/vivtv", email: "https://vtv.villalobos@gmail.com" }
    },
    {
      name: "Piyapat Pholchan",
      role: "App UI/UX Developer",
      description: "Designed and implemented the app’s user interface and functionality using FlutterFlow, ensuring usability and smooth user experience.",
      links: { github: "https://github.com/Piyapiyapat", email: "https://pang26piyapat@gmail.com" }
    },
    {
      name: "Patchara Sumalanurak",
      role: "Presentation Support",
      description: "Helped prepare and present the project during key milestones, supporting live demos and team communication.",
      links: { github: "https://github.com/FadedAwayIntoNothingness", email: "https://s6707012660069@email.kmutnb.ac.th" }
    },
    {
      name: "Sonam Norbu",
      role: "Presentation Support",
      description: "Supported the team by assisting with presentations and communicating project progress throughout development.",
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
            We started as learners and became creators, working together to design and build Mist while pushing ourselves past what we thought we could do.
          </p>
        </div>

        {/* Use flexbox on lg to auto-center the last row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="p-6 text-center group hover:shadow-card hover:-translate-y-1 transition-all duration-500 bg-gradient-to-b from-card to-card/50 w-full md:w-auto lg:w-[30%]"
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
                  target="_blank" rel="noreferrer"
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
      </div>
    </section>
  );
};

export default TeamSection;
