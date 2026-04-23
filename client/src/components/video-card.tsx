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
      className={`rounded-xl overflow-hidden bg-black ${className}`}
      style={{
        boxShadow:
          '0 0 25px rgba(139, 92, 246, 0.4), 0 0 50px rgba(139, 92, 246, 0.2)',
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
      <div className="px-3 py-2">
        <p
          className="text-sm text-foreground/90 truncate"
          data-testid={`video-title-${video.id}`}
        >
          {video.title}
        </p>
      </div>
    </div>
  );
}
