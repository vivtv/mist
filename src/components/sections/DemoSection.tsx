import React from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, Thermometer, Wind, Eye } from 'lucide-react';

const DemoSection = () => {
  return (
    <section id="demo" className="py-20 bg-gradient-mist">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Live Air Quality Demo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience real-time air pollution tracking for Bangkok. This interactive demo shows 
            how MIST monitors air quality data and provides actionable insights for healthier living.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Demo Map Container */}
          <Card className="p-8 mb-12 shadow-card hover:shadow-glow transition-all duration-500">
            <div className="bg-secondary/50 rounded-lg h-96 flex items-center justify-center mb-6">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Interactive Map Demo</h3>
                <p className="text-muted-foreground mb-4">
                  Bangkok Air Quality Monitoring
                </p>
                <div className="text-sm text-muted-foreground bg-primary/10 px-4 py-2 rounded-lg inline-block">
                  Google Maps API integration will be implemented here
                </div>
              </div>
            </div>
            
            {/* Demo Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <Thermometer className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">85</div>
                <div className="text-sm text-muted-foreground">AQI Level</div>
                <div className="text-xs text-yellow-600 mt-1">Moderate</div>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <Wind className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">15.2</div>
                <div className="text-sm text-muted-foreground">PM2.5 (μg/m³)</div>
                <div className="text-xs text-green-600 mt-1">Good</div>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <Eye className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">8.5</div>
                <div className="text-sm text-muted-foreground">Visibility (km)</div>
                <div className="text-xs text-yellow-600 mt-1">Fair</div>
              </div>
            </div>
          </Card>

          {/* Demo Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-soft transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-primary">Real-time Monitoring</h3>
              <p className="text-muted-foreground">
                Our demo tracks live air quality data across Bangkok, including PM2.5, PM10, 
                ozone levels, and visibility metrics. Data is updated every hour from official 
                monitoring stations.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-soft transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-primary">Smart Recommendations</h3>
              <p className="text-muted-foreground">
                Based on current air quality conditions, MIST provides personalized recommendations 
                for outdoor activities, mask usage, and optimal travel routes to minimize exposure.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;