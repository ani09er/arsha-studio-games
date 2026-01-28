import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { Smartphone, Grid3X3, Brain, Puzzle, Layers, Calculator, Shapes, CircuitBoard, Target, Lightbulb, Sparkles, Star, Wifi, WifiOff, Shield, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Game {
  name: string;
  tagline?: string;
  platform: string;
  category: string;
  description: string;
  icon: LucideIcon;
  status: "Available" | "Coming Soon";
  featured?: boolean;
  features?: string[];
  puzzleTypes?: string[];
}

const games: Game[] = [
  {
    name: "Puzzle Mind",
    tagline: "Train Your Brain Through the Cosmos",
    platform: "Android",
    category: "Puzzle / Educational / Cognitive",
    description:
      "An immersive cognitive training game that challenges and enhances your mental abilities through beautifully designed puzzle chambers set in a cosmic universe. Travel through stunning cosmic sectors, each offering unique puzzle challenges.",
    icon: Brain,
    status: "Available",
    featured: true,
    features: [
      "100% offline - no internet required",
      "No ads ever",
      "No data collection",
      "No account needed",
      "Safe for all ages",
    ],
    puzzleTypes: [
      "Pattern Recognition",
      "Memory Challenges",
      "Logic Puzzles",
      "Spatial Awareness",
      "Speed Processing",
      "Focus Training",
    ],
  },
  {
    name: "Pattern IQ Trainer",
    platform: "Android",
    category: "Educational / Puzzle / Logic",
    description:
      "A visual reasoning puzzle game designed to strengthen logical thinking through structured pattern recognition challenges. Built for offline play and focused mental training.",
    icon: Grid3X3,
    status: "Coming Soon",
  },
  {
    name: "Number Nexus",
    platform: "Android",
    category: "Educational / Math / Logic",
    description:
      "Master numerical reasoning through progressively challenging arithmetic puzzles. Develop mental math skills and number sense with carefully designed exercises that adapt to your pace.",
    icon: Calculator,
    status: "Coming Soon",
  },
  {
    name: "Shape Logic",
    platform: "Android",
    category: "Puzzle / Spatial Reasoning",
    description:
      "Explore spatial intelligence through geometric puzzles that challenge your ability to mentally rotate, combine, and transform shapes. Perfect for developing visual-spatial skills.",
    icon: Shapes,
    status: "Coming Soon",
  },
  {
    name: "Circuit Mind",
    platform: "Android",
    category: "Logic / Strategy / Puzzle",
    description:
      "Build logical pathways and solve circuit-based puzzles that train systematic thinking. Each level introduces new components that require careful analysis and strategic planning.",
    icon: CircuitBoard,
    status: "Coming Soon",
  },
  {
    name: "Memory Matrix",
    platform: "Android",
    category: "Memory / Cognitive / Educational",
    description:
      "Strengthen working memory and recall abilities through engaging pattern-based memory challenges. Progressive difficulty ensures continuous cognitive growth at your own pace.",
    icon: Lightbulb,
    status: "Coming Soon",
  },
];

const upcomingFeatures = [
  { icon: Puzzle, label: "More puzzle varieties" },
  { icon: Layers, label: "Progressive difficulty" },
  { icon: Brain, label: "Cognitive tracking" },
  { icon: Sparkles, label: "Achievement system" },
];

const trustBadges = [
  { icon: WifiOff, label: "100% Offline" },
  { icon: Shield, label: "No Data Collection" },
  { icon: Users, label: "All Ages" },
];

const Games = () => {
  const featuredGame = games.find((g) => g.featured);
  const otherGames = games.filter((g) => !g.featured);

  return (
    <Layout>
      <SEO 
        canonical="/games"
        title="Our Games"
        description="Explore ARSHA STUDIO's collection of original mobile games focused on cognitive development, pattern recognition, and logical thinking for Android."
      />
      {/* Hero */}
      <section className="hero-gradient text-hero-foreground section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-teal-500 rounded-full blur-3xl animate-pulse-soft" />
        </div>
        <div className="container-narrow mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight opacity-0 animate-fade-in">
            Our Games
          </h1>
          <p className="mt-4 text-hero-muted text-lg max-w-2xl mx-auto opacity-0 animate-fade-in stagger-1">
            A curated collection of original mobile games focused on cognitive 
            development and thoughtful gameplay.
          </p>
        </div>
      </section>

      {/* Featured Game - Puzzle Mind */}
      {featuredGame && (
        <section className="section-padding bg-section-alt">
          <div className="container-narrow mx-auto">
            <AnimatedSection>
              <div className="text-center mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  <Star className="h-4 w-4" />
                  Featured Game
                </span>
                <h2 className="text-2xl md:text-4xl font-bold">{featuredGame.name}</h2>
                {featuredGame.tagline && (
                  <p className="mt-2 text-primary text-lg">{featuredGame.tagline}</p>
                )}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <Card className="border-primary/20 bg-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Left - Icon and Description */}
                    <div className="p-8 lg:p-10">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center mb-6 glow-primary">
                        <featuredGame.icon className="h-12 w-12 text-primary" />
                      </div>
                      
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Smartphone className="h-4 w-4" />
                          {featuredGame.platform}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Brain className="h-4 w-4" />
                          {featuredGame.category}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {featuredGame.description}
                      </p>

                      {/* Trust Badges */}
                      <div className="flex flex-wrap gap-3">
                        {trustBadges.map((badge) => (
                          <span
                            key={badge.label}
                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full text-xs font-medium"
                          >
                            <badge.icon className="h-3.5 w-3.5 text-primary" />
                            {badge.label}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right - Features */}
                    <div className="bg-muted/30 p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-border">
                      {/* Puzzle Types */}
                      {featuredGame.puzzleTypes && (
                        <div className="mb-8">
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                            Puzzle Types
                          </h3>
                          <div className="grid grid-cols-2 gap-2">
                            {featuredGame.puzzleTypes.map((type) => (
                              <div
                                key={type}
                                className="flex items-center gap-2 text-sm"
                              >
                                <Puzzle className="h-4 w-4 text-primary flex-shrink-0" />
                                <span>{type}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Features */}
                      {featuredGame.features && (
                        <div>
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                            Key Features
                          </h3>
                          <ul className="space-y-2">
                            {featuredGame.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-2 text-sm"
                              >
                                <span className="text-primary mt-0.5">✓</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Status */}
                      <div className="mt-8 pt-6 border-t border-border">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Status</span>
                          <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                            {featuredGame.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Other Games List */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-center mb-8">More Games</h2>
          </AnimatedSection>

          <div className="grid gap-6">
            {otherGames.map((game, index) => (
              <AnimatedSection key={game.name} delay={index * 100}>
                <article className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm card-hover">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <game.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold">
                          {game.name}
                        </h3>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          game.status === "Available" 
                            ? "bg-primary/10 text-primary" 
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {game.status}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Smartphone className="h-4 w-4" />
                          {game.platform}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Brain className="h-4 w-4" />
                          {game.category}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {game.description}
                      </p>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {/* Coming Soon Features */}
          <AnimatedSection delay={200}>
            <div className="mt-16 text-center">
              <h3 className="text-xl font-semibold mb-6">Coming Soon</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {upcomingFeatures.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground"
                  >
                    <feature.icon className="h-4 w-4" />
                    {feature.label}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-muted-foreground text-sm">
                More games are currently in development. Check back for updates.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Games;
