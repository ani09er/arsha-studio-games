import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { WifiOff, ShieldCheck, Eye, FileCheck, CheckCircle, Lock } from "lucide-react";

const trustPoints = [
  {
    icon: WifiOff,
    title: "Offline-First Gameplay",
    description: "All our games are designed to work completely offline. No internet connection required to play.",
  },
  {
    icon: ShieldCheck,
    title: "No Personal Data Collection",
    description: "We don't collect, store, or transmit any personal information. Your data stays on your device.",
  },
  {
    icon: Eye,
    title: "Transparent Privacy Practices",
    description: "Our privacy policy is written in plain language. No hidden clauses, no complicated legal jargon.",
  },
  {
    icon: FileCheck,
    title: "Google Play Policy Aligned",
    description: "We strictly follow Google Play's developer policies and guidelines for family-friendly content.",
  },
];

const complianceChecks = [
  "No third-party advertising SDKs",
  "No analytics or tracking services",
  "No social media integrations",
  "No in-app purchases in children's games",
  "No external links to unsafe content",
  "No background data transmission",
];

const Trust = () => {
  return (
    <Layout>
      <SEO 
        canonical="/trust"
        title="Built for Trust"
        description="Learn about ARSHA STUDIO's commitment to privacy, transparency, and Google Play policy compliance. No data collection, offline-first games."
      />
      {/* Hero */}
      <section className="hero-gradient text-hero-foreground section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse-soft" />
        </div>
        <div className="container-narrow mx-auto text-center relative z-10">
          <ShieldCheck className="h-12 w-12 mx-auto mb-6 text-primary opacity-0 animate-fade-in" />
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight opacity-0 animate-fade-in stagger-1">
            Built for Trust
          </h1>
          <p className="mt-4 text-hero-muted text-lg max-w-2xl mx-auto opacity-0 animate-fade-in stagger-2">
            We believe trust is earned through transparency, not claimed through words. 
            Here's how we build and maintain it.
          </p>
        </div>
      </section>

      {/* Trust Points */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {trustPoints.map((point, index) => (
              <AnimatedSection key={point.title} delay={index * 100}>
                <div className="bg-card p-8 rounded-xl border border-border card-hover h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                    <point.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto">
          <AnimatedSection className="text-center mb-12">
            <Lock className="h-10 w-10 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Compliance Standards</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Technical measures we implement to ensure user safety and platform compliance.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {complianceChecks.map((check, index) => (
              <AnimatedSection key={check} delay={index * 50}>
                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{check}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                ARSHA STUDIO is committed to maintaining the highest standards of 
                integrity in game development. We build games that parents can trust, 
                players can enjoy, and platforms can confidently distribute.
              </p>
              <p className="text-sm text-muted-foreground">
                Questions about our practices? <a href="/contact" className="text-primary hover:underline">Contact us</a>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Trust;
