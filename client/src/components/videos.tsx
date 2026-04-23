import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function Videos() {
  const { ref, isIntersecting } = useIntersectionObserver();

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
          className="max-w-4xl mx-auto rounded-xl overflow-hidden"
          style={{
            boxShadow:
              '0 0 25px rgba(139, 92, 246, 0.5), 0 0 50px rgba(139, 92, 246, 0.3), 0 0 75px rgba(139, 92, 246, 0.1)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          data-testid="video-embed-1"
        >
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=dbdnjaewg&public_id=Khaas_india_Reel_1_APR_kibuqz"
            width="640"
            height="360"
            style={{ height: 'auto', width: '100%', aspectRatio: '640 / 360' }}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            title="Khaas India Reel"
          />
        </motion.div>
      </div>
    </section>
  );
}
