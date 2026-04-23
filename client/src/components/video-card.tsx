import { useState } from 'react';
import { getVideoEmbedUrl, type VideoItem } from '@/lib/videos-data';

interface VideoCardProps {
  video: VideoItem;
  className?: string;
}

export default function VideoCard({ video, className = '' }: VideoCardProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={`relative rounded-xl overflow-hidden bg-black border border-portfolio-border hover-lift ${className}`}
      style={{
        boxShadow: isHovering
          ? '0 20px 50px -10px hsla(199, 89%, 70%, 0.45)'
          : '0 12px 30px -10px hsla(199, 89%, 70%, 0.18)',
        transition: 'box-shadow 0.3s ease',
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      data-testid={`video-card-${video.id}`}
    >
      <iframe
        key={isHovering ? 'playing' : 'paused'}
        src={getVideoEmbedUrl(video.publicId, isHovering)}
        style={{
          width: '100%',
          height: '100%',
          aspectRatio: '9 / 16',
          display: 'block',
          border: 0,
        }}
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
        title={video.title}
      />
    </div>
  );
}
