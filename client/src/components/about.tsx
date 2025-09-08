import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function About() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const skills = [
    { name: 'Figma', icon: 'ph-figma-logo' },
    { name: 'Photoshop', icon: 'ph-image' },
    { name: 'Illustrator', icon: 'ph-palette' },
    { name: 'Sketch', icon: 'ph-pen-nib' },
    { name: 'Spline', icon: 'ph-cube' },
    { name: 'InDesign', icon: 'ph-layout' }
  ];

  return (
    <section id="about" className="py-20 relative z-20" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Profile Images */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-80 h-80">
              {/* Main Profile Image */}
              <div className="absolute top-0 left-0 z-30">
                <img
                  src="https://res.cloudinary.com/dbdnjaewg/image/upload/v1757242171/WhatsApp_Image_2025-09-03_at_4.12.40_PM_q9lbvh.jpg"
                  alt="Omm Prakash Nayak - Developer Profile"
                  className="w-80 h-80 rounded-full object-cover hover-lift glow border-4 border-accent/20"
                  data-testid="profile-image"
                />
              </div>
              
              {/* Additional Profile Images */}
              <motion.div 
                className="absolute top-32 -right-16 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <img
                  src=""
                  alt="Additional Profile Image 1"
                  className="w-80 h-80 rounded-full object-cover hover-lift glow border-4 border-accent/20 bg-gray-800"
                  data-testid="profile-image-2"
                />
              </motion.div>
              
              <motion.div 
                className="absolute top-32 -left-16 z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img
                  src=""
                  alt="Additional Profile Image 2"
                  className="w-80 h-80 rounded-full object-cover hover-lift glow border-4 border-accent/20 bg-gray-800"
                  data-testid="profile-image-3"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Bio and Skills */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-6 glow-text" data-testid="about-title">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-description">
              I'm a creative graphic designer with a passion for turning ideas into impactful visuals. 
              From crafting unique brand identities and engaging social media designs to producing 
              clean layouts and stunning digital artwork, I focus on blending creativity with functionality. 
              With an eye for detail and a strong sense of aesthetics, I aim to create designs that not 
              only look appealing but also communicate stories effectively. My journey in design has been 
              about exploring colors, typography, and visual harmony to deliver designs that leave a lasting impression.
            </p>
            
            {/* Skills Icons */}
            <div className="flex flex-wrap gap-4 mt-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="glass rounded-lg p-3 hover-lift cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: "0 0 25px rgba(139, 92, 246, 0.6)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  data-testid={`skill-${skill.name.toLowerCase()}`}
                >
                  <motion.i 
                    className={`ph ${skill.icon} text-3xl text-accent`}
                    whileHover={{ 
                      color: "#a855f7",
                      filter: "drop-shadow(0 0 8px rgba(168, 85, 247, 0.8))",
                      transition: { duration: 0.3 }
                    }}
                  ></motion.i>
                  <span className="block text-sm mt-2">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
