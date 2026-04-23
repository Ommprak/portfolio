import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import HeroVisual from '@/components/hero-visual';

export default function Hero() {
  const [, navigate] = useLocation();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Hero content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 xl:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="eyebrow" data-testid="hero-eyebrow">
              Graphic Designer · Video Editor
            </span>
          </motion.div>

          <motion.h1
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            data-testid="hero-title"
          >
            Designing
            <br />
            <span className="gradient-text">brands that move</span>
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            data-testid="hero-description"
          >
            I'm <span className="text-foreground font-medium">Omm Prakash Nayak</span> —
            a creative designer crafting bold identities, scroll-stopping reels,
            and editorial layouts that tell a story.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary"
              data-testid="hero-cta-primary"
            >
              <span>View Work</span>
              <i className="ph ph-arrow-right"></i>
            </button>
            <button
              onClick={() => navigate('/videos')}
              className="btn-ghost"
              data-testid="hero-cta-secondary"
            >
              <i className="ph ph-play-circle"></i>
              <span>Watch Reels</span>
            </button>
          </motion.div>

          <motion.div
            className="mt-14 flex items-center gap-8 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { value: '40+', label: 'Video Reels' },
              { value: '50+', label: 'Brand Projects' },
              { value: '3+', label: 'Years Crafting' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div
                  className="text-3xl md:text-4xl font-display font-bold text-accent"
                  data-testid={`hero-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground leading-tight max-w-[80px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
          </div>

          {/* Right column: visual */}
          <div className="lg:col-span-5 xl:col-span-6 relative h-[420px] sm:h-[500px] lg:h-[560px]">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 1 },
          y: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' },
        }}
        aria-label="Scroll down"
        data-testid="hero-scroll-indicator"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <i className="ph ph-caret-double-down text-xl"></i>
      </motion.button>
    </section>
  );
}
