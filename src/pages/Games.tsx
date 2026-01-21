import Layout from "@/components/Layout";
import { Smartphone, Grid3X3, Brain } from "lucide-react";

const games = [
  {
    name: "Pattern IQ Trainer",
    platform: "Android",
    category: "Educational / Puzzle / Logic",
    description:
      "A visual reasoning puzzle game designed to strengthen logical thinking through structured pattern recognition challenges. Built for offline play and focused mental training.",
    icon: Grid3X3,
  },
];

const Games = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero text-hero-foreground section-padding">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Our Games
          </h1>
          <p className="mt-4 text-hero-muted text-lg max-w-2xl mx-auto">
            A curated collection of original mobile games focused on cognitive 
            development and thoughtful gameplay.
          </p>
        </div>
      </section>

      {/* Games List */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid gap-8">
            {games.map((game) => (
              <article
                key={game.name}
                className="bg-card border border-border rounded-lg p-8 shadow-sm"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <game.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold mb-2">
                      {game.name}
                    </h2>
                    <div className="flex flex-wrap gap-3 mb-4">
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
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              More games are currently in development. Check back for updates.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Games;
