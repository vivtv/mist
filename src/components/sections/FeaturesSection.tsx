import React from "react";
import { Card } from "@/components/ui/card";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top grid: Story + Previews */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left side: Story */}
          <div className="lg:col-span-9 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Journey</h2>

            <p className="text-base">
              In Thailand, the rising danger of PM2.5 pollution has become part of
              everyday life. During certain seasons, the air becomes so harmful
              that hospitals fill with patients suffering from respiratory
              problems, and every year thousands of lives are cut short by poor
              air quality. Yet, despite the severity, many people only become
              aware of the issue when it trends on the news or when conditions
              become unbearable. By then, it’s often too late to act.
            </p>

            <p className="text-base">
              This reality pushed our team to come together and ask a difficult
              question: how can we make people not just aware of the air they
              breathe, but also engaged enough to care every single day? From
              this question, <strong>MIST</strong>, or <em>My Invisible Shield
                Technology</em>, was born. MIST provides real-time pollution
              tracking updated every five minutes, so users never have to guess
              about the air around them. But beyond data, we wanted to solve the
              biggest challenge, getting people to actually use the app
              consistently. Many existing pollution apps are abandoned quickly
              because they’re difficult to navigate or lack any reason to return.
            </p>

            <p className="text-base">
              To fix this, we designed MIST to be more than just an app, it’s an
              experience. Through gamification features like streaks, daily
              quests, and friendly competitions, users stay engaged while
              building healthier habits. For people too busy to constantly check
              their phones, we built an Android overlay notification system that
              shows air quality directly on the lock screen. In one glance,
              someone can know whether to wear a mask, take a safer route, or
              step outside with confidence.
            </p>

            <p className="text-base">
              And because we believe awareness should be personal, we created{" "}
              <strong>Bellion</strong>, an AI health assistant that can speak any
              language in the world. Bellion isn’t just a source of information, it
              can guide, educate, and even keep users company, making air quality
              awareness accessible and human. With MIST, we are turning an
              invisible threat into something people can see, understand, and act
              on every day.
            </p>

            <p className="text-base">
              MIST respects privacy with a <strong>100% guest mode</strong>,
              meaning no sign in or personal data is required to access full
              features. Combined with a clean, customizable interface including a
              modern dark mode, MIST is built to empower, not burden. It is not
              just an app, it is a movement to make the invisible visible and help
              communities live healthier, safer lives.
            </p>
          </div>

          {/* Right side: Images */}
          <div className="lg:col-span-3 flex flex-col gap-6 justify-center">
            <img
              src="/assets/mistss.png"
              alt="Mist App Interface 1"
              className="rounded-2xl shadow-lg w-full max-w-[200px] mx-auto h-auto"
            />
          </div>
        </div>

        {/* SDG cards - full width, centered row */}
        <div className="mt-20 mb-20 text-center">
          <h3 className="text-2xl font-bold mb-8">
            United Nations Sustainable Development Goals
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 text-center hover:shadow-card transition">
              <img src="/assets/3.png" alt="SDG 3 Good Health and Well being" width={80} height={80} loading="lazy" className="mx-auto mb-4" />
              <h4 className="font-bold text-lg">SDG 3 Good Health and Well being</h4>
              <p className="text-sm text-muted-foreground mt-2">
                Helps people reduce exposure and make safer daily choices with timely information.
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-card transition">
              <img src="/assets/11.png" alt="SDG 11 Sustainable Cities and Communities" width={80} height={80} loading="lazy" className="mx-auto mb-4" />
              <h4 className="font-bold text-lg">SDG 11 Sustainable Cities and Communities</h4>
              <p className="text-sm text-muted-foreground mt-2">
                Supports informed travel and planning which leads to healthier city routines.
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-card transition">
              <img src="/assets/13.png" alt="SDG 13 Climate Action" width={80} height={80} loading="lazy" className="mx-auto mb-4" />
              <h4 className="font-bold text-lg">SDG 13 Climate Action</h4>
              <p className="text-sm text-muted-foreground mt-2">
                Builds awareness that encourages action and protection during high risk periods.
              </p>
            </Card>
          </div>
        </div>

        {/* iPAT cards - full width, centered row */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">
            Aligned with iPAT Focus Areas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 text-center hover:shadow-card transition">
              <h4 className="font-bold text-lg mb-2">Global Health and Well being</h4>
              <p className="text-sm text-muted-foreground">
                Early awareness and clear choices protect lungs and daily life.
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-card transition">
              <h4 className="font-bold text-lg mb-2">Responsible and Ethical Technologies</h4>
              <p className="text-sm text-muted-foreground">
                Guest mode protects privacy while still offering full function.
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-card transition">
              <h4 className="font-bold text-lg mb-2">Art Expression and Creative Technologies</h4>
              <p className="text-sm text-muted-foreground">
                Friendly visuals and playful progress turn awareness into culture.
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-card transition">
              <h4 className="font-bold text-lg mb-2">Resilient and Informed Communities</h4>
              <p className="text-sm text-muted-foreground">
                Real time data and gentle prompts help neighborhoods adapt together.
              </p>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
