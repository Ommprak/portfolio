import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface VideoItem {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  type: 'file' | 'youtube';
}

export default function Videos() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const videos: VideoItem[] = [
    {
      id: 1,
      title: 'Video Project One',
      description: 'A short showcase of motion design and editing work.',
      thumbnail: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      videoUrl: '',
      type: 'file',
    },
    {
      id: 2,
      title: 'Video Project Two',
      description: 'Creative video edit highlighting visual storytelling.',
      thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      videoUrl: '',
      type: 'file',
    },
    {
      id: 3,
      title: 'Video Project Three',
      description: 'Promotional reel demonstrating brand storytelling.',
      thumbnail: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      videoUrl: '',
      type: 'file',
    },
  ];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="glass rounded-xl overflow-hidden hover-lift cursor-pointer group"
              style={{
                boxShadow:
                  '0 0 25px rgba(139, 92, 246, 0.3), 0 0 50px rgba(139, 92, 246, 0.15)',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => video.videoUrl && setSelectedVideo(video)}
              data-testid={`video-card-${video.id}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <div
                    className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center"
                    style={{
                      boxShadow:
                        '0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.4)',
                    }}
                  >
                    <i className="ph-fill ph-play text-2xl text-white ml-1"></i>
                  </div>
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3
                  className="text-xl font-semibold glow-text"
                  data-testid={`video-title-${video.id}`}
                >
                  {video.title}
                </h3>
                <p
                  className="text-sm text-muted-foreground"
                  data-testid={`video-description-${video.id}`}
                >
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            data-testid="video-modal"
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white text-3xl hover:text-accent transition-colors"
                onClick={() => setSelectedVideo(null)}
                data-testid="video-modal-close"
              >
                <i className="ph ph-x"></i>
              </button>
              {selectedVideo.type === 'youtube' ? (
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  className="w-full h-full rounded-xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full rounded-xl bg-black"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
