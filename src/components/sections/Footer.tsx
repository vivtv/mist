import React from 'react';
import { Droplets } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Logo and description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Droplets className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                MIST
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering communities with real-time air quality data and AI-driven health insights 
              for a cleaner, healthier future.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col md:items-end">
            <h3 className="font-semibold mb-4 text-foreground">Navigation</h3>
            <ul className="flex flex-wrap gap-6">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('demo')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Demo
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('resources')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Resources
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} MIST. All rights reserved. Building a cleaner future, one breath at a time.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-xs text-muted-foreground">
                Made with 💚 for the environment
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
