import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useState } from 'react';

export default function Resume() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [showResumeModal, setShowResumeModal] = useState(false);
  
  const resumeImageUrl = "https://res.cloudinary.com/dbdnjaewg/image/upload/v1757410946/Black_and_White_Clean_Professional_A4_Resume_1_patltj.jpg";
  const resumePdfUrl = "https://res.cloudinary.com/dbdnjaewg/image/upload/v1757410946/Black_and_White_Clean_Professional_A4_Resume_1_patltj.jpg"; // Replace with your PDF URL

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
                <h2 className="text-3xl font-bold mb-6 glow-text">My Resume</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Click on the resume image below to view the full version with complete details about my experience, 
                    skills, and achievements in design and development.
                  </p>
                  <motion.div
                    className="relative cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowResumeModal(true)}
                  >
                    <img
                      src={resumeImageUrl}
                      alt="Omm Prakash Nayak Resume"
                      className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg"
                      style={{
                        boxShadow: "0 0 25px rgba(139, 92, 246, 0.5), 0 0 50px rgba(139, 92, 246, 0.3)"
                      }}
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                      <i className="ph ph-magnifying-glass-plus text-4xl text-white"></i>
                    </div>
                  </motion.div>
                  
                  {/* Download PDF Button */}
                  <motion.button
                    className="glass rounded-lg px-8 py-4 hover:glow transition-all duration-300 flex items-center gap-3 w-full justify-center mt-4"
                    style={{
                      boxShadow: "0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)"
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = resumePdfUrl;
                      link.download = 'Omm_Prakash_Nayak_Resume.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
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

      {/* Resume Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowResumeModal(false)}
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
                src={resumeImageUrl}
                alt="Omm Prakash Nayak Resume - Full View"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              
              {/* Close Button */}
              <button
                onClick={() => setShowResumeModal(false)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <i className="ph ph-x text-xl"></i>
              </button>
              
              {/* Download Button */}
              <button
                onClick={() => window.open(resumeImageUrl, '_blank')}
                className="absolute bottom-4 right-4 text-white bg-accent/80 rounded-full p-3 hover:bg-accent transition-colors flex items-center gap-2"
              >
                <i className="ph ph-download text-lg"></i>
                <span className="text-sm font-medium">Download</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}