import { Link } from "react-router-dom";
import { ArrowRight, Gamepad2, Brain, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero text-hero-foreground section-padding">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in">
            ARSHA STUDIO
          </h1>
          <p className="mt-4 text-lg md:text-xl text-primary font-medium animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Independent Game Studio Creating Meaningful Cognitive Experiences
          </p>
          <p className="mt-6 text-hero-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            ARSHA STUDIO develops original mobile games focused on logic, visual reasoning, 
            and thoughtful gameplay. Our games are designed to be distraction-free, offline-first, 
            and mentally engaging.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="group">
              <Link to="/games">
                View Our Games
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              <Link to="/contact">Contact Studio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Cognitive Focus</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Games designed to strengthen logical thinking and visual reasoning through structured challenges.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Privacy First</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                No data collection, no tracking, no third-party analytics. Your privacy is protected by design.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Gamepad2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Offline Ready</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                All games work completely offline. Play anytime, anywhere, without internet dependency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Explore Our Games
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Discover our collection of thoughtfully crafted puzzle and logic games 
            designed for meaningful mental engagement.
          </p>
          <Button asChild size="lg">
            <Link to="/games">
              View Games
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
