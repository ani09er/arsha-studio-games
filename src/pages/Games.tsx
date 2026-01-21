import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Smartphone, Grid3X3, Brain, Puzzle, Layers, Calculator, Shapes, CircuitBoard, Target, Lightbulb, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Game {
  name: string;
  platform: string;
  category: string;
  description: string;
  icon: LucideIcon;
  status: "Available" | "Coming Soon";
}

const games: Game[] = [
  {
    name: "Pattern IQ Trainer",
    platform: "Android",
    category: "Educational / Puzzle / Logic",
    description:
      "A visual reasoning puzzle game designed to strengthen logical thinking through structured pattern recognition challenges. Built for offline play and focused mental training.",
    icon: Grid3X3,
    status: "Available",
  },
  {
    name: "Number Nexus",
    platform: "Android",
    category: "Educational / Math / Logic",
    description:
      "Master numerical reasoning through progressively challenging arithmetic puzzles. Develop mental math skills and number sense with carefully designed exercises that adapt to your pace.",
    icon: Calculator,
    status: "Available",
  },
  {
    name: "Shape Logic",
    platform: "Android",
    category: "Puzzle / Spatial Reasoning",
    description:
      "Explore spatial intelligence through geometric puzzles that challenge your ability to mentally rotate, combine, and transform shapes. Perfect for developing visual-spatial skills.",
    icon: Shapes,
    status: "Available",
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
    name: "Focus Flow",
    platform: "Android",
    category: "Attention / Cognitive Training",
    description:
      "Enhance concentration and attention span through targeted exercises designed by cognitive science principles. Track your focus improvements over time with built-in progress metrics.",
    icon: Target,
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

const Games = () => {
  return (
    <Layout>
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

      {/* Games List */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid gap-8">
            {games.map((game, index) => (
              <AnimatedSection key={game.name} delay={index * 100}>
                <article className="bg-card border border-border rounded-xl p-8 shadow-sm card-hover">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 glow-primary">
                      <game.icon className="h-10 w-10 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h2 className="text-xl md:text-2xl font-bold">
                          {game.name}
                        </h2>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {game.status}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Smartphone className="h-4 w-4" />
                          {game.platform}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Brain className="h-4 w-4" />
                          {game.category}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {game.description}
                      </p>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {/* Coming Soon */}
          <AnimatedSection delay={200}>
            <div className="mt-16 text-center">
              <h3 className="text-xl font-semibold mb-6">Coming Soon</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {upcomingFeatures.map((feature, index) => (
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
