import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Target, Heart, Lightbulb, Users, Zap, CheckCircle } from "lucide-react";

const principles = [
  {
    icon: Target,
    title: "Original Content",
    description: "We build and publish only original games. Every title is conceived, designed, and developed in-house with complete creative control.",
  },
  {
    icon: Heart,
    title: "Ethical Design",
    description: "No dark patterns, no addictive loops, no manipulative mechanics. We design games that respect players' time and mental well-being.",
  },
  {
    icon: Lightbulb,
    title: "Educational Focus",
    description: "Our games are built to strengthen cognitive abilities—logical thinking, pattern recognition, and problem-solving skills.",
  },
  {
    icon: Users,
    title: "Long-term Quality",
    description: "We prioritize sustainable development and continuous improvement over quick releases. Quality is never compromised.",
  },
];

const commitments = [
  "Built with performance in mind",
  "Accessibility-first approach",
  "Google Play policy compliant",
  "Regular updates and support",
  "Transparent privacy practices",
  "Community-driven improvements",
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-hero-foreground section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse-soft" />
        </div>
        <div className="container-narrow mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight opacity-0 animate-fade-in">
            Who We Are
          </h1>
          <p className="mt-4 text-hero-muted text-lg max-w-2xl mx-auto opacity-0 animate-fade-in stagger-1">
            An independent game production studio committed to creating original, 
            meaningful experiences.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                ARSHA STUDIO is an independent game production company based in India. 
                We specialize in building original, self-published mobile games with a 
                focus on educational and logic-based gameplay.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <div className="w-16 h-px bg-primary/30 my-8" />
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Our approach to game development is guided by principles of clarity, 
                ethics, and long-term quality. We deliberately avoid dark patterns and 
                addictive mechanics, instead focusing on creating experiences that 
                genuinely benefit players.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="w-16 h-px bg-primary/30 my-8" />
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Every game we create is designed with thoughtful gameplay at its core—
                offering players meaningful cognitive challenges without distractions 
                or manipulative elements.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Our Principles</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              The foundations that shape every game we create.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <AnimatedSection key={principle.title} delay={index * 100}>
                <div className="flex gap-5 bg-card p-6 rounded-xl border border-border card-hover">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <principle.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{principle.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Our Commitments</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Standards we uphold in everything we build.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {commitments.map((commitment, index) => (
              <AnimatedSection key={commitment} delay={index * 50}>
                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{commitment}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
