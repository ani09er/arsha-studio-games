import Layout from "@/components/Layout";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero text-hero-foreground section-padding">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Who We Are
          </h1>
          <p className="mt-4 text-hero-muted text-lg max-w-2xl mx-auto">
            An independent game production studio committed to creating original, 
            meaningful experiences.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              ARSHA STUDIO is an independent game production company based in India. 
              We specialize in building original, self-published mobile games with a 
              focus on educational and logic-based gameplay.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              Our approach to game development is guided by principles of clarity, 
              ethics, and long-term quality. We deliberately avoid dark patterns and 
              addictive mechanics, instead focusing on creating experiences that 
              genuinely benefit players.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Every game we create is designed with thoughtful gameplay at its core—
              offering players meaningful cognitive challenges without distractions 
              or manipulative elements.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Our Principles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Original Content</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We build and publish only original games. Every title is conceived, 
                  designed, and developed in-house with complete creative control.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Ethical Design</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  No dark patterns, no addictive loops, no manipulative mechanics. 
                  We design games that respect players' time and mental well-being.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Educational Focus</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our games are built to strengthen cognitive abilities—logical 
                  thinking, pattern recognition, and problem-solving skills.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Long-term Quality</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We prioritize sustainable development and continuous improvement 
                  over quick releases. Quality is never compromised.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
