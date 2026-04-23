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
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            data-testid="videos-back-button"
          >
            <i className="ph ph-arrow-left"></i>
            <span>Back to Home</span>
          </button>

          <motion.div
            className="max-w-2xl mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow mb-4" data-testid="all-videos-eyebrow">
              The Full Library
            </span>
            <h1
              className="section-title mt-4 text-5xl md:text-6xl"
              data-testid="all-videos-title"
            >
              All <span className="gradient-text">videos</span>.
            </h1>
            <p
              className="text-muted-foreground mt-4 text-lg"
              data-testid="all-videos-subtitle"
            >
              The complete collection of reels and motion work. Hover any tile to preview.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.04, 0.6),
                }}
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
