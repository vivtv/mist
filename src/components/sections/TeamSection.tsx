import React from 'react';
import { Card } from '@/components/ui/card';
import { Github, Mail } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Pongpisut Somsagun",
      role: "Lead Developer & AI Specialist",
      description: "Lead developer who implemented intelligent AI features, contributed to building app components using Flutter, and also helped in presenting and preparing the presentation of Mist during development.",
      links: { github: "https://github.com/freddycleann", email: "viktor.pongpisut@gmail.com" }
    },
    {
      name: "Vivien Therese Villalobos",
      role: "Landing Page Designer, Business Support, Video Editor",
      description: "Crafted the landing page using Vite and React, created Mist’s video while also assisting in team planning, research, and documentation.",
      links: { github: "https://github.com/vivtv", email: "vtv.villalobos@gmail.com" }
    },
    {
      name: "Piyapat Pholchan",
      role: "App UI/UX Developer",
      description: "Designed and implemented the app’s user interface and functionality using FlutterFlow, ensuring usability and smooth user experience, while also contributing to presenting and preparing the presentation of Mist during development.",
      links: { github: "https://github.com/Piyapiyapat", email: "pang26piyapat@gmail.com" }
    },

    {
      name: "Patchara Sumalanurak",
      role: "Presentation Support",
      description: "Helped prepare and present the project during key milestones, supporting live demos and team communication.",
      links: { github: "https://github.com/FadedAwayIntoNothingness", email: "s6707012660069@email.kmutnb.ac.th" }
    },
    {
      name: "Sonam Norbu",
      role: "Presentation Support",
      description: "Supported the team by assisting with presentations and communicating project progress throughout development.",
      links: { github: "#", email: "s6707012660239@email.kmutnb.ac.th" }
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

        {/* Grid/Flex Layout */}
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
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {member.description}
              </p>

              {/* Email shown directly */}
              <div className="flex items-center justify-center text-sm text-muted-foreground mb-6">
                <Mail className="w-4 h-4 mr-2" />
                <span>{member.links.email}</span>
              </div>

              {/* Github link only */}
              <div className="flex justify-center">
                <a
                  href={member.links.github}
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  target="_blank" rel="noreferrer"
                >
                  <Github className="w-5 h-5" />
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
