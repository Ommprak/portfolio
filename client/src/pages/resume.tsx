import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function Resume() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-portfolio-bg text-foreground">
      <main className="pt-24 pb-20" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 glow-text">Resume</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Download my resume or view my professional experience, education, and skills.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left: Resume Preview/Download */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="glass rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-6 glow-text">Download Resume</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Get the latest version of my resume with complete details about my experience, 
                    skills, and achievements in design and development.
                  </p>
                  <motion.button
                    className="glass rounded-lg px-8 py-4 hover:glow transition-all duration-300 flex items-center gap-3 w-full justify-center"
                    style={{
                      boxShadow: "0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)"
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      // Add your resume PDF link here
                      window.open('#', '_blank');
                    }}
                  >
                    <i className="ph ph-download text-xl text-accent"></i>
                    <span className="text-lg font-medium">Download PDF Resume</span>
                  </motion.button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="glass rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 glow-text">Contact Information</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <i className="ph ph-envelope text-accent"></i>
                    <span>ommprakash0176@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="ph ph-linkedin-logo text-accent"></i>
                    <span>LinkedIn Profile</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="ph ph-github-logo text-accent"></i>
                    <span>GitHub: Ommprak</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Resume Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Skills */}
              <div className="glass rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 glow-text">Key Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Graphic Design',
                    'Web Development', 
                    'React & TypeScript',
                    'UI/UX Design',
                    'Brand Identity',
                    'Adobe Creative Suite',
                    'Figma & Sketch',
                    'JavaScript & Node.js'
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="bg-accent/20 text-accent px-3 py-2 rounded-lg text-center text-sm"
                      style={{
                        boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)"
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Experience Highlights */}
              <div className="glass rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 glow-text">Experience Highlights</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-accent pl-4">
                    <h4 className="font-semibold text-accent">Creative Designer</h4>
                    <p className="text-sm text-muted-foreground">
                      Specialized in brand identity design, visual systems, and digital artwork creation.
                    </p>
                  </div>
                  <div className="border-l-2 border-accent pl-4">
                    <h4 className="font-semibold text-accent">Web Developer</h4>
                    <p className="text-sm text-muted-foreground">
                      Full-stack development with modern frameworks and responsive design principles.
                    </p>
                  </div>
                  <div className="border-l-2 border-accent pl-4">
                    <h4 className="font-semibold text-accent">UI/UX Designer</h4>
                    <p className="text-sm text-muted-foreground">
                      User-centered design approach with focus on usability and visual appeal.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}