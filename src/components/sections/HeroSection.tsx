import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Play, ArrowDown, PlayCircle } from 'lucide-react';

const HeroSection = () => {
  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary-glow/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img
              src="/assets/mist_logo.png"
              alt="MIST Logo"
              className="w-40 h-40 mx-auto mb-6 drop-shadow-lg"
            />
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent"></span>
          </h1>

          {/* Subheading */}
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            From AQI to XP, turn air safety into a life game
          </p>

          {/* Description */}
          <p
            className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            Level up your health and take control of your day. MIST turns the
            air you breathe into an interactive daily quest that keeps you safe,
            informed, and motivated.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up"
            style={{ animationDelay: '0.6s' }}
          >
            <Button
              variant="hero"
              size="xl"
              onClick={() =>
                window.open(
                  'https://github.com/FadedAwayIntoNothingness/mist/releases/download/0.0.8/MIST.apk',
                  '_blank'
                )
              }
              className="group"
            >
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Download for Android
            </Button>

            <Button
              variant="mist"
              size="xl"
              onClick={scrollToDemo}
              className="group"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Try the Demo
            </Button>

            <Button
              variant="hero"   // ✅ switched to hero so it’s visible
              size="xl"
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/1MO2vWWdJOJVYjfU9pY5g6cWcnlM5t3Cn/view?usp=sharing',
                  '_blank'
                )
              }
              className="group"
            >
              <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Presentation
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <button
              onClick={scrollToDemo}
              className="text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowDown className="w-6 h-6 mx-auto animate-bounce group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
