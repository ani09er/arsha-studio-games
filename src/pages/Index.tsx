import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Brain, Shield, Gamepad2, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const philosophyCards = [
  {
    icon: Sparkles,
    title: "Original Design",
    description: "Every game is built from first principles, not clones. We create unique experiences.",
  },
  {
    icon: Brain,
    title: "Cognitive Value",
    description: "Games designed to engage logic and reasoning, offering meaningful mental challenges.",
  },
  {
    icon: Shield,
    title: "Ethical Development",
    description: "No dark patterns, no misleading mechanics. We respect players' time and trust.",
  },
];

const valueCards = [
  {
    icon: Brain,
    title: "Cognitive Focus",
    description: "Games designed to strengthen logical thinking and visual reasoning through structured challenges.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "No data collection, no tracking, no third-party analytics. Your privacy is protected by design.",
  },
  {
    icon: WifiOff,
    title: "Offline Ready",
    description: "All games work completely offline. Play anytime, anywhere, without internet dependency.",
  },
];

const Index = () => {
  return (
    <Layout>
      <SEO 
        canonical="/"
        title="ARSHA STUDIO – Independent Game Studio | Cognitive Mobile Games"
        description="ARSHA STUDIO develops original mobile games focused on logic, visual reasoning, and cognitive engagement. Offline-first, privacy-respecting educational games for Android."
      />
      {/* Hero Section */}
      <section className="hero-gradient text-hero-foreground section-padding relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container-narrow mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight opacity-0 animate-fade-in">
            ARSHA STUDIO
          </h1>
          <p className="mt-4 text-lg md:text-xl text-primary font-medium opacity-0 animate-fade-in stagger-1">
            Crafting Thoughtful Games That Challenge the Mind
          </p>
          <p className="mt-6 text-hero-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in stagger-2">
            ARSHA STUDIO is an independent game production studio focused on creating meaningful 
            mobile games rooted in logic, visual reasoning, and cognitive engagement. Our work 
            emphasizes clarity, ethical design, and long-term value.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in stagger-3">
            <Button asChild size="lg" className="group">
              <Link to="/games">
                View Our Games
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="bg-white/10 text-white border-0 hover:bg-white/20">
              <Link to="/about">Learn About the Studio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Our Philosophy</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              The principles that guide every decision we make.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {philosophyCards.map((card, index) => (
              <AnimatedSection key={card.title} delay={index * 100}>
                <div className="bg-card p-8 rounded-xl shadow-sm border border-border card-hover h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                    <card.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">What We Stand For</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Core values that define our games and studio culture.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {valueCards.map((card, index) => (
              <AnimatedSection key={card.title} delay={index * 100}>
                <div className="bg-card p-8 rounded-xl shadow-sm border border-border card-hover h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                    <card.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-hero text-hero-foreground">
        <div className="container-narrow mx-auto">
          <AnimatedSection className="text-center">
            <Gamepad2 className="h-12 w-12 mx-auto mb-6 text-primary opacity-80" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Explore Our Games
            </h2>
            <p className="text-hero-muted max-w-xl mx-auto mb-8">
              Discover our collection of thoughtfully crafted puzzle and logic games 
              designed for meaningful mental engagement.
            </p>
            <Button asChild size="lg" className="group">
              <Link to="/games">
                View Games
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
