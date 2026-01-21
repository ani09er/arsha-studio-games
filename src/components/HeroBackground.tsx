import { useParallax } from "@/hooks/useParallax";

const HeroBackground = () => {
  const slowParallax = useParallax(0.15);
  const mediumParallax = useParallax(0.25);
  const fastParallax = useParallax(0.35);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-hero via-[hsl(222,47%,13%)] to-hero" />
      
      {/* Animated gradient orbs with parallax */}
      <div 
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ transform: `translateY(${slowParallax}px)` }}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl animate-float" 
        style={{ 
          animationDelay: "-3s",
          transform: `translateY(${-mediumParallax}px)` 
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl animate-pulse-soft"
        style={{ transform: `translate(-50%, calc(-50% + ${slowParallax * 0.5}px))` }}
      />

      {/* Geometric grid pattern with slow parallax */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{ transform: `translateY(${slowParallax * 0.3}px)` }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path 
                d="M 60 0 L 0 0 0 60" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
                className="text-white"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Floating geometric shapes with varied parallax */}
      <div 
        className="absolute top-20 left-[10%] w-2 h-2 bg-primary/20 rounded-full animate-float" 
        style={{ 
          animationDuration: "8s",
          transform: `translateY(${fastParallax}px)` 
        }} 
      />
      <div 
        className="absolute top-40 right-[15%] w-3 h-3 bg-teal-400/15 rounded-full animate-float" 
        style={{ 
          animationDuration: "10s", 
          animationDelay: "-2s",
          transform: `translateY(${mediumParallax}px)` 
        }} 
      />
      <div 
        className="absolute bottom-32 left-[20%] w-1.5 h-1.5 bg-primary/25 rounded-full animate-float" 
        style={{ 
          animationDuration: "7s", 
          animationDelay: "-4s",
          transform: `translateY(${-fastParallax}px)` 
        }} 
      />
      <div 
        className="absolute top-1/3 right-[25%] w-2 h-2 bg-teal-400/20 rounded-full animate-float" 
        style={{ 
          animationDuration: "9s", 
          animationDelay: "-1s",
          transform: `translateY(${slowParallax}px)` 
        }} 
      />
      <div 
        className="absolute top-[60%] left-[15%] w-2.5 h-2.5 bg-primary/15 rounded-full animate-float" 
        style={{ 
          animationDuration: "11s", 
          animationDelay: "-5s",
          transform: `translateY(${mediumParallax}px)` 
        }} 
      />
      <div 
        className="absolute top-[45%] right-[10%] w-1.5 h-1.5 bg-teal-400/25 rounded-full animate-float" 
        style={{ 
          animationDuration: "8s", 
          animationDelay: "-3s",
          transform: `translateY(${-slowParallax}px)` 
        }} 
      />
      
      {/* Subtle line accents with parallax */}
      <div 
        className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse-soft"
        style={{ transform: `translateY(${mediumParallax}px)` }}
      />
      <div 
        className="absolute bottom-1/3 right-0 w-40 h-px bg-gradient-to-l from-transparent via-teal-400/15 to-transparent animate-pulse-soft" 
        style={{ 
          animationDelay: "-1.5s",
          transform: `translateY(${-slowParallax}px)` 
        }}
      />
      
      {/* Corner accents with parallax */}
      <div 
        className="absolute top-0 right-0 w-64 h-64"
        style={{ transform: `translate(${slowParallax * 0.2}px, ${slowParallax * 0.3}px)` }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-[0.04]">
          <circle cx="100" cy="0" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <circle cx="100" cy="0" r="60" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-primary" />
        </svg>
      </div>
      <div 
        className="absolute bottom-0 left-0 w-48 h-48"
        style={{ transform: `translate(${-slowParallax * 0.2}px, ${-slowParallax * 0.3}px)` }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-[0.04]">
          <circle cx="0" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-teal-400" />
        </svg>
      </div>

      {/* Additional depth layers */}
      <div 
        className="absolute top-[20%] right-[30%] w-24 h-24 border border-primary/5 rounded-full"
        style={{ transform: `translateY(${fastParallax * 1.2}px) rotate(${slowParallax * 0.05}deg)` }}
      />
      <div 
        className="absolute bottom-[25%] left-[35%] w-16 h-16 border border-teal-400/5 rounded-full"
        style={{ transform: `translateY(${-mediumParallax * 1.1}px) rotate(${-slowParallax * 0.05}deg)` }}
      />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-hero/50 via-transparent to-hero/30" />
    </div>
  );
};

export default HeroBackground;
