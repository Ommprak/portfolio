import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import Header from '@/components/header';
import Footer from '@/components/footer';
import VideoCard from '@/components/video-card';
import { videos } from '@/lib/videos-data';

export default function VideosPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-portfolio-bg text-foreground">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <button
            type="button"
            onClick={() => navigate('/#videos')}
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="videos-back-button"
          >
            <i className="ph ph-arrow-left"></i>
            <span>Back to Home</span>
          </button>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center mb-4 glow-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            data-testid="all-videos-title"
          >
            All Videos
          </motion.h1>
          <motion.p
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            data-testid="all-videos-subtitle"
          >
            The complete collection of my video work. Hover any tile to preview the reel.
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.6) }}
              >
                <VideoCard video={video} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
