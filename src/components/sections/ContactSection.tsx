import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Github, Twitter, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-mist">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Improve the Air Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about MIST? Want to collaborate on environmental initiatives? 
            We'd love to hear from you and discuss how we can work together for cleaner air.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Form */}
            <Card className="lg:col-span-2 p-8 shadow-card">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, questions, or how you'd like to collaborate..."
                    rows={6}
                    required
                    className="mt-1"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Contact Info & Social */}
            <div className="space-y-6">
              
              {/* Contact Info */}
              <Card className="p-6 shadow-soft">
                <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Email:</strong><br />
                    hello@mist.app
                  </p>
                  <p>
                    <strong className="text-foreground">Response Time:</strong><br />
                    Usually within 24 hours
                  </p>
                  <p>
                    <strong className="text-foreground">Office Hours:</strong><br />
                    Mon-Fri, 9AM-6PM PST
                  </p>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-6 shadow-soft">
                <h3 className="text-xl font-bold mb-4">Follow Our Journey</h3>
                <div className="space-y-3">
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Github className="w-5 h-5" />
                    </div>
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Twitter className="w-5 h-5" />
                    </div>
                    <span>Twitter</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </Card>

              {/* Call to Action */}
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary-glow/10 border-primary/20">
                <h3 className="text-lg font-bold mb-2">Join the Movement</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Be part of the community working towards cleaner air and healthier cities.
                </p>
                <Button variant="mist" size="sm" className="w-full">
                  Learn More
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;