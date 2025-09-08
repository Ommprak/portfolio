import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function Gallery() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      thumbnail: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261821/Generated_Image_September_07_2025_-_12_22PM_x2sdww.jpg',
      fullsize: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261821/Generated_Image_September_07_2025_-_12_22PM_x2sdww.jpg',
      alt: 'Creative Design Project'
    },
    {
      id: 2,
      thumbnail: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757263171/Generated_Image_September_07_2025_-_10_07PM_zw9j1c.jpg',
      fullsize: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757263171/Generated_Image_September_07_2025_-_10_07PM_zw9j1c.jpg',
      alt: 'Magazine Design'
    },
    {
      id: 3,
      thumbnail: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261822/Generated_Image_September_07_2025_-_12_23PM_2_w9ly8l.jpg',
      fullsize: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261822/Generated_Image_September_07_2025_-_12_23PM_2_w9ly8l.jpg',
      alt: 'Professional Portfolio Design'
    },
    {
      id: 4,
      thumbnail: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261821/Generated_Image_September_07_2025_-_12_23PM_ahsys9.jpg',
      fullsize: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261821/Generated_Image_September_07_2025_-_12_23PM_ahsys9.jpg',
      alt: 'Creative Visual Design'
    },
    {
      id: 5,
      thumbnail: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261821/Generated_Image_September_07_2025_-_12_23PM_1_jzxyyr.jpg',
      fullsize: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261821/Generated_Image_September_07_2025_-_12_23PM_1_jzxyyr.jpg',
      alt: 'Modern Design Concept'
    },
    {
      id: 6,
      thumbnail: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261821/Generated_Image_September_07_2025_-_12_42PM_al0gpu.jpg',
      fullsize: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261821/Generated_Image_September_07_2025_-_12_42PM_al0gpu.jpg',
      alt: 'Digital Art Creation'
    },
    {
      id: 7,
      thumbnail: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261820/Generated_Image_September_07_2025_-_12_19PM_lr8he3.jpg',
      fullsize: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261820/Generated_Image_September_07_2025_-_12_19PM_lr8he3.jpg',
      alt: 'Brand Identity Design'
    },
    {
      id: 8,
      thumbnail: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261820/Generated_Image_September_07_2025_-_12_41PM_g45wg9.jpg',
      fullsize: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261820/Generated_Image_September_07_2025_-_12_41PM_g45wg9.jpg',
      alt: 'Editorial Design Work'
    },
    {
      id: 9,
      thumbnail: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261820/Generated_Image_September_07_2025_-_12_40PM_ny2xpw.jpg',
      fullsize: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261820/Generated_Image_September_07_2025_-_12_40PM_ny2xpw.jpg',
      alt: 'Visual Communication Design'
    },
    {
      id: 10,
      thumbnail: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261819/Generated_Image_September_07_2025_-_12_39PM_oqquns.jpg',
      fullsize: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261819/Generated_Image_September_07_2025_-_12_39PM_oqquns.jpg',
      alt: 'Creative Graphics Design'
    },
    {
      id: 11,
      thumbnail: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261822/Generated_Image_September_07_2025_-_12_45PM_xz84t7.jpg',
      fullsize: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261822/Generated_Image_September_07_2025_-_12_45PM_xz84t7.jpg',
      alt: 'Artistic Design Project'
    },
    {
      id: 12,
      thumbnail: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261818/Generated_Image_September_07_2025_-_12_37PM_afzg0k.jpg',
      fullsize: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261818/Generated_Image_September_07_2025_-_12_37PM_afzg0k.jpg',
      alt: 'Web Design Layout'
    },
    {
      id: 13,
      thumbnail: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261816/Generated_Image_September_07_2025_-_12_31PM_nd7odo.jpg',
      fullsize: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261816/Generated_Image_September_07_2025_-_12_31PM_nd7odo.jpg',
      alt: 'Contemporary Design'
    },
    {
      id: 14,
      thumbnail: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261815/Generated_Image_September_07_2025_-_12_25PM_eshv7i.jpg',
      fullsize: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261815/Generated_Image_September_07_2025_-_12_25PM_eshv7i.jpg',
      alt: 'Design Portfolio Piece'
    },
    {
      id: 15,
      thumbnail: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261815/Generated_Image_September_07_2025_-_12_27PM_e7jyum.jpg',
      fullsize: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261815/Generated_Image_September_07_2025_-_12_27PM_e7jyum.jpg',
      alt: 'Innovative Design Concept'
    },
    {
      id: 16,
      thumbnail: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261824/Double_Overhead_Magazine_Mockup_03_lgvazm.jpg',
      fullsize: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261824/Double_Overhead_Magazine_Mockup_03_lgvazm.jpg',
      alt: 'Magazine Mockup Design'
    },
    {
      id: 17,
      thumbnail: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261822/magazine_cover_free_mockup_vol2_miaoad.jpg',
      fullsize: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261822/magazine_cover_free_mockup_vol2_miaoad.jpg',
      alt: 'Magazine Cover Design'
    },
    {
      id: 18,
      thumbnail: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261822/magazine_ngur74.jpg',
      fullsize: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261822/magazine_ngur74.jpg',
      alt: 'Editorial Magazine Design'
    },
    {
      id: 19,
      thumbnail: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261819/Double_Overhead_Magazine_Mockup_01_ip28xk.jpg',
      fullsize: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261819/Double_Overhead_Magazine_Mockup_01_ip28xk.jpg',
      alt: 'Professional Magazine Layout'
    },
    {
      id: 20,
      thumbnail: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261823/virat_kohli_lpwecx.jpg',
      fullsize: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261823/virat_kohli_lpwecx.jpg',
      alt: 'Portrait Design Work'
    }
  ];

  return (
    <section className="py-20 relative z-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 glow-text"
          initial={{ opacity: 0, x: -100 }}
          animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          data-testid="gallery-title"
        >
          Design Gallery
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(item.fullsize)}
              data-testid={`gallery-item-${item.id}`}
            >
              <img
                src={item.thumbnail}
                alt={item.alt}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <i className="ph ph-magnifying-glass-plus text-3xl text-white"></i>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            data-testid="gallery-modal"
          >
            <motion.button
              className="absolute top-5 right-5 text-white text-4xl font-bold z-[1001] hover:text-accent transition-colors"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              data-testid="gallery-modal-close"
            >
              &times;
            </motion.button>
            <motion.img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
