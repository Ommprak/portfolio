import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function About() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const skills = [
    { name: 'Figma', icon: 'ph-figma-logo' },
    { name: 'Photoshop', icon: 'ph-image' },
    { name: 'Illustrator', icon: 'ph-palette' },
    { name: 'Sketch', icon: 'ph-pen-nib' },
    { name: 'Spline', icon: 'ph-cube' }
  ];

  return (
    <section id="about" className="py-20 relative z-20" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Profile Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dbdnjaewg/image/upload/v1757242171/WhatsApp_Image_2025-09-03_at_4.12.40_PM_q9lbvh.jpg"
                alt="Omm Prakash Nayak - Developer Profile"
                className="w-80 h-80 rounded-full object-cover hover-lift glow border-4 border-accent/20"
                data-testid="profile-image"
              />
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
                  className="glass rounded-lg p-3 hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  data-testid={`skill-${skill.name.toLowerCase()}`}
                >
                  <i className={`ph ${skill.icon} text-3xl text-accent`}></i>
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
