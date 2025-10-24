import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useLocation } from 'wouter';

export default function Projects() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [, navigate] = useLocation();

  const handleViewProject = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  const projects = [
    {
      id: 1,
      title: 'Branding',
      description: 'Comprehensive brand identity and visual design solutions that create memorable and impactful brand experiences. This project showcases expertise in developing cohesive brand systems through strategic design thinking, visual storytelling, and creative execution. The work encompasses logo design, brand guidelines, typography systems, color palettes, and visual identity applications across various touchpoints.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400',
      tech: ['Brand Identity', 'Logo Design', 'Visual Systems', 'Typography'],
      imageLeft: true
    },
    {
      id: 2,
      title: 'Creative Design',
      description: 'Professional magazine layouts and editorial designs featuring modern typography, visual hierarchy, and stunning photography. Specialized in lifestyle, fashion, and business publications.',
      image: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757263171/Generated_Image_September_07_2025_-_10_07PM_zw9j1c.jpg',
      tech: ['InDesign', 'Photoshop', 'Typography'],
      imageLeft: false
    },
    {
      id: 3,
      title: 'Own Design Collection',
      description: 'A curated showcase of personal design projects featuring unique creative concepts, experimental visual compositions, and innovative design solutions. This collection represents individual artistic expression and creative exploration across various design disciplines.',
      image: 'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757264943/Generated_Image_September_07_2025_-_10_38PM_frkxp8.jpg',
      tech: ['Creative Design', 'Visual Arts', 'Personal Projects'],
      imageLeft: true
    },
    {
      id: 4,
      title: 'Previous Company Work / Freelancing Client Work',
      description: 'A comprehensive portfolio of professional design work completed for corporate clients and freelance projects. This collection showcases versatility across different industries, client requirements, and design challenges. From corporate branding and marketing materials to digital campaigns and print collateral, each project demonstrates adaptability, professionalism, and commitment to delivering client-focused solutions that meet business objectives while maintaining creative excellence.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      tech: ['Client Projects', 'Corporate Design', 'Freelance', 'Multi-Industry'],
      imageLeft: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative z-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 glow-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          data-testid="projects-title"
        >
          Featured Projects
        </motion.h2>
        
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`grid md:grid-cols-2 gap-12 items-center ${index < projects.length - 1 ? 'mb-20' : ''}`}
          >
            <motion.div
              className={project.imageLeft ? '' : 'md:order-2'}
              initial={{ opacity: 0, x: project.imageLeft ? -50 : 50 }}
              animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <img
                src={project.id === 1 ? "https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261821/Generated_Image_September_07_2025_-_12_22PM_x2sdww.jpg" : project.image}
                alt={`${project.title} Project Screenshot`}
                className="rounded-xl hover-lift w-full aspect-video object-cover"
                style={{
                  boxShadow: "0 0 25px rgba(139, 92, 246, 0.5), 0 0 50px rgba(139, 92, 246, 0.3), 0 0 75px rgba(139, 92, 246, 0.1)"
                }}
                data-testid={`project-image-${project.id}`}
              />
            </motion.div>
            
            <motion.div
              className={`space-y-4 ${project.imageLeft ? '' : 'md:order-1'}`}
              initial={{ opacity: 0, x: project.imageLeft ? 50 : -50 }}
              animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 + 0.2 }}
            >
              <h3 className="text-3xl font-bold glow-text" data-testid={`project-title-${project.id}`}>
                {project.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`project-description-${project.id}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm"
                    style={{
                      boxShadow: "0 0 15px rgba(139, 92, 246, 0.4), 0 0 30px rgba(139, 92, 246, 0.2)"
                    }}
                    data-testid={`project-tech-${project.id}-${tech.toLowerCase()}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.button
                className="glass rounded-lg px-6 py-3 hover:glow transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleViewProject(project.id)}
                data-testid={`project-button-${project.id}`}
              >
                <span>View Project</span>
                <i className="ph ph-arrow-up-right"></i>
              </motion.button>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
