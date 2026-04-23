import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function Videos() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (!video) return;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
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
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          data-testid="videos-subtitle"
        >
          A collection of my video work showcasing motion, editing, and visual storytelling.
        </motion.p>

        <motion.div
          className="mx-auto rounded-xl overflow-hidden"
          style={{
            width: '100%',
            maxWidth: '360px',
            boxShadow:
              '0 0 25px rgba(139, 92, 246, 0.5), 0 0 50px rgba(139, 92, 246, 0.3), 0 0 75px rgba(139, 92, 246, 0.1)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-testid="video-embed-1"
        >
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/dbdnjaewg/video/upload/Khaas_india_Reel_1_APR_kibuqz.mp4"
            poster="https://res.cloudinary.com/dbdnjaewg/video/upload/so_0/Khaas_india_Reel_1_APR_kibuqz.jpg"
            muted
            loop
            playsInline
            preload="metadata"
            controls
            style={{ width: '100%', height: 'auto', display: 'block', background: '#000' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
