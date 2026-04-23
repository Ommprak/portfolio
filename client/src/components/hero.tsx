import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';

export default function Hero() {
  const [splineError, setSplineError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    const checkMobile = () => {
      const mobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setTimeout(() => setShouldLoadSpline(true), 1500);
      } else {
        setShouldLoadSpline(true);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* 3D background */}
      {!splineError && shouldLoadSpline ? (
        <div className="absolute inset-0 w-full h-full z-0 opacity-90">
          <iframe
            src="https://my.spline.design/robotfollowcursorforlandingpage-10IZP3Rc7GqnxCb7Kw4yJMu0/"
            frameBorder={0}
            width="100%"
            height="100%"
            className={`w-full h-full ${isMobile ? 'pointer-events-none' : ''}`}
            title="Interactive 3D Robot Model"
            data-testid="spline-3d-model"
            loading="lazy"
            onError={() => setSplineError(true)}
            style={{
              border: 'none',
              transform: isMobile ? 'scale(0.85)' : 'none',
              transformOrigin: 'center',
            }}
          />
        </div>
      ) : (
        <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-br from-accent/10 via-transparent to-blue-900/20" />
      )}

      {/* Subtle vignette so text reads cleanly over the 3D scene */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-portfolio-bg/85 via-portfolio-bg/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-portfolio-bg/80 via-transparent to-transparent pointer-events-none" />

      {/* Hero content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-2xl">
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
