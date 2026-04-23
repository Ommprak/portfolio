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
    <section id="videos" className="py-20 relative z-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 glow-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          data-testid="videos-title"
        >
          Featured Videos
        </motion.h2>
        <motion.p
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          data-testid="videos-subtitle"
        >
          A selection of my video work — hover any video to preview it. Explore the full collection for the complete library.
        </motion.p>

        <div className="relative">
          <button
            type="button"
            onClick={() => scrollBy('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-10 h-10 rounded-full glass items-center justify-center hover:glow transition-all"
            aria-label="Scroll left"
            data-testid="videos-scroll-left"
          >
            <i className="ph ph-caret-left text-xl"></i>
          </button>
          <button
            type="button"
            onClick={() => scrollBy('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-10 h-10 rounded-full glass items-center justify-center hover:glow transition-all"
            aria-label="Scroll right"
            data-testid="videos-scroll-right"
          >
            <i className="ph ph-caret-right text-xl"></i>
          </button>

          <motion.div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-1 -mx-1"
            style={{ scrollbarWidth: 'thin' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-testid="videos-carousel"
          >
            {featured.map((video) => (
              <div
                key={video.id}
                className="snap-center shrink-0 w-[260px] sm:w-[280px] md:w-[300px]"
              >
                <VideoCard video={video} />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center mt-10">
          <motion.button
            type="button"
            onClick={() => navigate('/videos')}
            className="glass rounded-lg px-6 py-3 hover:glow transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="explore-all-videos-button"
          >
            <span>Explore All Videos</span>
            <i className="ph ph-arrow-up-right"></i>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
