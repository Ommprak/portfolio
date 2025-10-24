
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useLocation } from 'wouter';
import { useState } from 'react';

interface ProjectDetailProps {
  projectId: string;
}

const projectData = {
  1: {
    id: 1,
    title: 'Branding',
    description: 'Comprehensive brand identity and visual design solutions that transform businesses through strategic creative direction and cohesive visual systems. This extensive branding project demonstrates expertise in developing memorable brand experiences from concept to execution. The work encompasses strategic brand positioning, visual identity development, logo design, typography systems, color palette creation, and brand guideline documentation. Each element is carefully crafted to ensure consistency across all brand touchpoints while maintaining flexibility for future growth and adaptation.',
    images: [
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261822/Generated_Image_September_07_2025_-_12_23PM_2_w9ly8l.jpg',
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261821/Generated_Image_September_07_2025_-_12_23PM_ahsys9.jpg',
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261821/Generated_Image_September_07_2025_-_12_23PM_1_jzxyyr.jpg',
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261821/Generated_Image_September_07_2025_-_12_42PM_al0gpu.jpg',
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261820/Generated_Image_September_07_2025_-_12_19PM_lr8he3.jpg'
    ],
    tech: ['Brand Identity', 'Logo Design', 'Visual Systems', 'Typography', 'Brand Strategy'],
    features: [
      'Logo Design & Development',
      'Brand Strategy & Positioning',
      'Visual Identity Systems',
      'Typography & Color Palettes',
      'Brand Guidelines Creation',
      'Marketing Material Design'
    ]
  },
  2: {
    id: 2,
    title: 'Creative Magazine Design',
    description: 'Professional magazine layouts and editorial designs that blend modern typography with compelling visual storytelling. This comprehensive project showcases expertise in creating cohesive design systems for lifestyle, fashion, and business publications. The work demonstrates advanced skills in grid systems, typographic hierarchy, color theory, and visual flow. Each spread is meticulously crafted to enhance readability while maintaining aesthetic appeal. The project includes cover designs, feature articles, photo layouts, and advertising placements that work harmoniously together to create engaging reader experiences.',
    images: [
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261820/Generated_Image_September_07_2025_-_12_41PM_g45wg9.jpg',
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261820/Generated_Image_September_07_2025_-_12_40PM_ny2xpw.jpg',
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261819/Generated_Image_September_07_2025_-_12_39PM_oqquns.jpg',
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261822/Generated_Image_September_07_2025_-_12_45PM_xz84t7.jpg'
    ],
    tech: ['InDesign', 'Photoshop', 'Typography', 'Editorial Design'],
    features: [
      'Magazine Layout Design',
      'Typography Systems',
      'Photo Direction & Editing',
      'Print Production Ready',
      'Brand Identity Integration',
      'Multi-page Spreads'
    ]
  },
  3: {
    id: 3,
    title: 'Own Design Collection',
    description: 'A curated showcase of personal design projects that reflect individual creative vision and artistic exploration. This collection features experimental compositions, unique visual concepts, and innovative design approaches that push creative boundaries. Each piece represents a journey of artistic discovery, combining traditional design principles with contemporary aesthetics. The work encompasses various design disciplines including digital art, conceptual design, and visual experimentation, showcasing versatility and creative range in personal artistic expression.',
    images: [
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757267756/Generated_Image_September_07_2025_-_11_24PM_gbnob0.jpg'
    ],
    tech: ['Creative Design', 'Visual Arts', 'Personal Projects', 'Experimental Design'],
    features: [
      'Unique Creative Concepts',
      'Experimental Visual Compositions',
      'Personal Artistic Expression',
      'Innovative Design Solutions',
      'Creative Exploration',
      'Visual Storytelling'
    ]
  },
  4: {
    id: 4,
    title: 'Previous Company Work / Freelancing Client Work',
    description: 'A comprehensive portfolio showcasing professional design work delivered for various corporate clients and freelance projects across multiple industries. This collection demonstrates the ability to adapt to diverse client needs, brand guidelines, and industry standards while maintaining high-quality creative output. The work spans corporate identity development, marketing campaigns, digital assets, print materials, and multi-channel design solutions. Each project reflects a deep understanding of client objectives, target audiences, and market positioning, combined with strategic design thinking and flawless execution.',
    images: [],
    tech: ['Client Projects', 'Corporate Design', 'Freelance', 'Multi-Industry', 'Brand Strategy'],
    features: [
      'Corporate Identity & Branding',
      'Marketing Campaign Design',
      'Digital & Social Media Assets',
      'Print Collateral Development',
      'Client Relationship Management',
      'Multi-Industry Experience',
      'Brand Guideline Adherence',
      'Strategic Design Solutions'
    ]
  }
};

export default function ProjectDetail({ projectId }: ProjectDetailProps) {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [, navigate] = useLocation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const project = projectData[parseInt(projectId) as keyof typeof projectData];
  
  const getGalleryImages = () => {
    if (project?.id === 1) {
      // Lunara brand designs only - all 13 uploaded designs
      return [
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261821/Generated_Image_September_07_2025_-_12_22PM_x2sdww.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261822/Generated_Image_September_07_2025_-_12_23PM_2_w9ly8l.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261821/Generated_Image_September_07_2025_-_12_23PM_ahsys9.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261821/Generated_Image_September_07_2025_-_12_23PM_1_jzxyyr.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261821/Generated_Image_September_07_2025_-_12_42PM_al0gpu.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261820/Generated_Image_September_07_2025_-_12_19PM_lr8he3.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261820/Generated_Image_September_07_2025_-_12_41PM_g45wg9.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261820/Generated_Image_September_07_2025_-_12_40PM_ny2xpw.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261819/Generated_Image_September_07_2025_-_12_39PM_oqquns.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261822/Generated_Image_September_07_2025_-_12_45PM_xz84t7.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261818/Generated_Image_September_07_2025_-_12_37PM_afzg0k.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261816/Generated_Image_September_07_2025_-_12_31PM_nd7odo.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261815/Generated_Image_September_07_2025_-_12_25PM_eshv7i.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261815/Generated_Image_September_07_2025_-_12_27PM_e7jyum.jpg'
      ];
    } else if (project?.id === 2) {
      // Magazine designs only
      return [
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261824/Double_Overhead_Magazine_Mockup_03_lgvazm.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261822/magazine_cover_free_mockup_vol2_miaoad.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261822/magazine_ngur74.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261819/Double_Overhead_Magazine_Mockup_01_ip28xk.jpg'
      ];
    } else if (project?.id === 3) {
      // Own design collection - Original poster plus Billboard and Outdoor Advertising designs
      return [
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757267756/Generated_Image_September_07_2025_-_11_24PM_gbnob0.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757495273/WhatsApp_Image_2025-09-10_at_10.22.09_AM_nfjrzc.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757495222/Outdoor_Advertising_cec9sj.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757495221/Billboard_Mockup_oo14op.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757495219/Square_Billboard_Mockup_gb3p7i.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757495219/Outdoor-Advertising-PSD-MockUps-2_tviih5.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757495218/Big_Square_Billboard_Mockup_dzrb1o.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757495218/bill_board_khaf1h.jpg'
      ];
    } else if (project?.id === 4) {
      // Previous company work / freelancing client work
      return [
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315175/WhatsApp_Image_2025-10-24_at_7.41.38_PM_ythokz.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315174/WhatsApp_Image_2025-10-24_at_7.41.37_PM_1_wxurm2.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315174/WhatsApp_Image_2025-10-24_at_7.41.37_PM_spprih.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315174/WhatsApp_Image_2025-10-24_at_7.41.35_PM_2_x7e5qu.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315174/WhatsApp_Image_2025-10-24_at_7.41.37_PM_2_jmdeov.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315174/WhatsApp_Image_2025-10-24_at_7.41.35_PM_uzhomb.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315174/WhatsApp_Image_2025-10-24_at_7.41.36_PM_ooinb5.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315174/WhatsApp_Image_2025-10-24_at_7.41.36_PM_1_xeydxr.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315173/WhatsApp_Image_2025-10-24_at_7.41.35_PM_1_wb076t.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315173/WhatsApp_Image_2025-10-24_at_7.41.34_PM_nnhrtb.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315062/Screenshot_20251015-022320_2_th4yfh.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315056/WhatsApp_Image_2025-10-24_at_7.37.49_PM_1_g2ukq5.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315056/WhatsApp_Image_2025-10-24_at_7.37.49_PM_fodgqw.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315055/WhatsApp_Image_2025-10-24_at_7.37.50_PM_k3clxf.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315055/WhatsApp_Image_2025-10-24_at_7.37.50_PM_1_w0facd.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315055/Screenshot_20251015-022133_1_ro37mh.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315055/WhatsApp_Image_2025-10-24_at_7.37.50_PM_2_oaa445.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315055/Screenshot_20251015-021515_bepwon.png',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315055/Screenshot_20251015-022329_1_knl9bs.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315054/Screenshot_20251015-022334_1_utiyxr.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315054/Screenshot_20251015-021541_lplnqq.png',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315054/Screenshot_20251015-022337_1_uap7xp.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315054/Screenshot_20251015-091411_1_tdd6it.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315053/Screenshot_20251015-091422_1_v1fprp.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315053/Screenshot_20251015-022341_1_lsxnba.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315053/Screenshot_20251015-090947_1_mrdrjn.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315053/Screenshot_20251015-091744_1_s9zjrt.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315053/Screenshot_20251015-021453_fyqfem.png',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315053/Screenshot_20251015-091350_1_nkhwic.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315053/Screenshot_20251015-091404_1_lxuuwi.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315052/Screenshot_20251015-091353_1_xeass0.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315052/Screenshot_20251015-091336_1_ndv0lf.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315052/Screenshot_20251015-091535_1_mtki7w.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315052/Screenshot_20251015-091333_1_dsq9hy.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315052/Screenshot_20251015-091539_1_mu0mbo.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315052/Screenshot_20251015-091615_1_zvnwfi.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315051/Screenshot_20251015-091703_1_ahcmqr.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315051/Screenshot_20251015-091544_1_ikgeyl.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315051/Screenshot_20251015-091327_1_s4dswp.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315051/Screenshot_20251015-091621_1_umjclx.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315051/Screenshot_20251015-022313_1_t7fq0l.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315050/Screenshot_20251015-090940_1_jiofmt.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315050/Screenshot_20251015-091752_1_ct8ryv.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315050/Screenshot_20251015-091344_1_eagy5n.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315050/Screenshot_20251015-091340_1_itnzcz.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315050/Screenshot_20251015-022034_1_dnvas3.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315049/Screenshot_20251015-021618_kkvuzv.png',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315049/Screenshot_20251015-091713_1_wet1j3.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315049/Screenshot_20251015-022049_1_jiioho.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315049/Screenshot_20251015-021921_1_wvsr2v.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315049/Screenshot_20251015-091425_1_ge7xky.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761315049/Screenshot_20251015-021908_1_mkudrm.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761314677/Screenshot_20251015-021837_1_zy5zpq.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761314651/Screenshot_20251015-021825_1_wn1lu5.jpg',
        'https://res.cloudinary.com/dbdnjaewg/image/upload/v1761314578/Screenshot_20251015-021743_1_e0emxs.jpg'
      ];
    }
    return [];
  };
  
  const galleryImages = getGalleryImages();
  
  const openImageModal = (imageUrl: string, index: number) => {
    setSelectedImage(imageUrl);
    setCurrentImageIndex(index);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };
  
  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : galleryImages.length - 1;
      setCurrentImageIndex(newIndex);
      setSelectedImage(galleryImages[newIndex]);
    } else {
      const newIndex = currentImageIndex < galleryImages.length - 1 ? currentImageIndex + 1 : 0;
      setCurrentImageIndex(newIndex);
      setSelectedImage(galleryImages[newIndex]);
    }
  };
  
  if (!project) {
    return (
      <div className="min-h-screen bg-portfolio-bg text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="glass rounded-lg px-6 py-3 hover:glow transition-all duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-portfolio-bg text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <i className="ph ph-arrow-left text-xl"></i>
              <span>Back to Portfolio</span>
            </button>
            <h1 className="text-xl font-bold glow-text">{project.title}</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="pt-24 pb-20" ref={ref}>
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6 glow-text">{project.title}</h1>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Project Description */}
          <motion.div
            className="glass rounded-xl p-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 glow-text">Project Overview</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            className="glass rounded-xl p-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6 glow-text">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <i className="ph ph-check-circle text-accent text-xl"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photo Gallery */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center glow-text">Photo Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  onClick={() => openImageModal(image, index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    src={image}
                    alt={`${project.title} - Photo ${index + 1}`}
                    className="w-full aspect-video object-cover rounded-xl shadow-lg hover-lift"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                    <i className="ph ph-magnifying-glass-plus text-3xl text-white"></i>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </main>
      
      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt={`Gallery Image ${currentImageIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <i className="ph ph-x text-xl"></i>
              </button>
              
              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors"
              >
                <i className="ph ph-chevron-left text-xl"></i>
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors"
              >
                <i className="ph ph-chevron-right text-xl"></i>
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
