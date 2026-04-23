import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { videos } from '@/lib/videos-data';

interface FloatingCard {
  type: 'video' | 'image';
  src: string;
  className: string;
  rotate: number;
  delay: number;
}

const cloudName = 'dbdnjaewg';
const videoPoster = (publicId: string, second = 2) =>
  `https://res.cloudinary.com/${cloudName}/video/upload/so_${second},w_400,c_fill,g_auto,q_auto,f_jpg/${publicId}.jpg`;

const cards: FloatingCard[] = [
  {
    type: 'video',
    src: videoPoster(videos[0].publicId, 3),
    className: 'top-[6%] right-[6%] w-[22%] aspect-[9/16]',
    rotate: -6,
    delay: 0.2,
  },
  {
    type: 'image',
    src: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757263171/Generated_Image_September_07_2025_-_10_07PM_zw9j1c.jpg',
    className: 'top-[12%] right-[30%] w-[20%] aspect-[3/4]',
    rotate: 7,
    delay: 0.4,
  },
  {
    type: 'video',
    src: videoPoster(videos[7].publicId, 2),
    className: 'bottom-[12%] right-[4%] w-[20%] aspect-[9/16]',
    rotate: 8,
    delay: 0.55,
  },
  {
    type: 'image',
    src: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261821/Generated_Image_September_07_2025_-_12_22PM_x2sdww.jpg',
    className: 'bottom-[18%] right-[28%] w-[18%] aspect-square',
    rotate: -8,
    delay: 0.7,
  },
];

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setPointer({ x, y });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {/* Background animated orbs */}
      <motion.div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, hsla(199, 89%, 70%, 0.35), transparent 60%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, hsla(217, 91%, 60%, 0.25), transparent 60%)',
          filter: 'blur(80px)',
        }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute -bottom-24 right-1/3 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(circle at 60% 40%, hsla(199, 89%, 70%, 0.22), transparent 60%)',
          filter: 'blur(70px)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Subtle grid mask on the right side */}
      <div
        className="absolute inset-y-0 right-0 w-2/3 grid-bg opacity-30"
        style={{
          maskImage:
            'radial-gradient(ellipse at center right, black 30%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center right, black 30%, transparent 75%)',
        }}
      />

      {/* Floating cards */}
      <div className="absolute inset-0 hidden md:block">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={`absolute ${card.className}`}
            initial={{ opacity: 0, y: 40, rotate: card.rotate }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: card.rotate,
              x: pointer.x * (i % 2 === 0 ? -25 : 18),
            }}
            transition={{
              opacity: { duration: 0.8, delay: card.delay },
              y: { duration: 0.8, delay: card.delay, ease: 'easeOut' },
              rotate: { duration: 0.8, delay: card.delay },
              x: { duration: 1.2, ease: 'easeOut' },
            }}
            style={{ willChange: 'transform' }}
          >
            <motion.div
              className="w-full h-full rounded-2xl overflow-hidden border border-portfolio-accent/20 bg-portfolio-surface"
              style={{
                boxShadow:
                  '0 30px 60px -15px hsla(199, 89%, 70%, 0.45), 0 0 0 1px hsla(199, 89%, 70%, 0.1)',
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: card.delay,
              }}
            >
              <img
                src={card.src}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {card.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-12 h-12 rounded-full bg-accent/95 flex items-center justify-center"
                    style={{
                      boxShadow: '0 0 30px hsla(199, 89%, 70%, 0.7)',
                    }}
                  >
                    <i className="ph-fill ph-play text-portfolio-bg text-lg ml-0.5"></i>
                  </div>
                </div>
              )}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, transparent 0%, transparent 60%, hsla(199, 89%, 70%, 0.15) 100%)',
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Mobile decorative element (single floating card) */}
      <div className="md:hidden absolute right-[-10%] top-[10%] w-[55%] aspect-[9/16] opacity-60">
        <motion.div
          className="w-full h-full rounded-2xl overflow-hidden border border-portfolio-accent/20"
          style={{
            boxShadow: '0 30px 60px -15px hsla(199, 89%, 70%, 0.4)',
            transform: 'rotate(-8deg)',
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.8 },
            y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <img
            src={videoPoster(videos[0].publicId)}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* Soft noise / vignette overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at top right, transparent 30%, hsla(222, 47%, 5%, 0.6) 80%)',
        }}
      />
    </div>
  );
}
