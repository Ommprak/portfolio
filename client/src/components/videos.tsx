import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { videos } from '@/lib/videos-data';
import VideoCard from '@/components/video-card';

export default function Videos() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [, navigate] = useLocation();

  const featured = videos.slice(0, 5);

  const scrollBy = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section id="videos" className="py-28 relative z-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-xl">
            <span className="eyebrow mb-4" data-testid="videos-eyebrow">
              Reels & Motion
            </span>
            <h2 className="section-title mt-4" data-testid="videos-title">
              Featured <span className="gradient-text">videos</span>.
            </h2>
            <p
              className="text-muted-foreground mt-4"
              data-testid="videos-subtitle"
            >
              Hover any tile to preview the reel — explore the full library for everything I've shipped.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy('left')}
              className="w-11 h-11 rounded-full glass flex items-center justify-center hover:text-accent hover:border-portfolio-accent/40 transition-all"
              aria-label="Scroll left"
              data-testid="videos-scroll-left"
            >
              <i className="ph ph-caret-left text-lg"></i>
            </button>
            <button
              type="button"
              onClick={() => scrollBy('right')}
              className="w-11 h-11 rounded-full glass flex items-center justify-center hover:text-accent hover:border-portfolio-accent/40 transition-all"
              aria-label="Scroll right"
              data-testid="videos-scroll-right"
            >
              <i className="ph ph-caret-right text-lg"></i>
            </button>
          </div>
        </motion.div>

        <motion.div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-1 -mx-1"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          data-testid="videos-carousel"
        >
          {featured.map((video) => (
            <div
              key={video.id}
              className="snap-center shrink-0 w-[240px] sm:w-[260px] md:w-[280px]"
            >
              <VideoCard video={video} />
            </div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <motion.button
            type="button"
            onClick={() => navigate('/videos')}
            className="btn-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            data-testid="explore-all-videos-button"
          >
            <span>Explore All Videos</span>
            <i className="ph ph-arrow-right"></i>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
