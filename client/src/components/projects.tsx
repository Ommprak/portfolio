import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useLocation } from 'wouter';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  imageLeft: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Branding',
    description:
      'Comprehensive brand identity work — logo systems, guidelines, typography, and visual applications across digital and print touchpoints.',
    image:
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261821/Generated_Image_September_07_2025_-_12_22PM_x2sdww.jpg',
    tech: ['Brand Identity', 'Logo Design', 'Visual Systems', 'Typography'],
    imageLeft: true,
  },
  {
    id: 2,
    title: 'Editorial & Magazine',
    description:
      'Professional magazine layouts and editorial designs with modern typography, strong hierarchy, and considered photography for lifestyle, fashion, and business publications.',
    image:
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757263171/Generated_Image_September_07_2025_-_10_07PM_zw9j1c.jpg',
    tech: ['InDesign', 'Photoshop', 'Typography'],
    imageLeft: false,
  },
  {
    id: 3,
    title: 'Personal Collection',
    description:
      'A curated showcase of personal projects exploring unique creative concepts, experimental compositions, and visual ideas across multiple disciplines.',
    image:
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757264943/Generated_Image_September_07_2025_-_10_38PM_frkxp8.jpg',
    tech: ['Creative Design', 'Visual Arts', 'Personal'],
    imageLeft: true,
  },
  {
    id: 4,
    title: 'Client & Freelance Work',
    description:
      'A portfolio of work for corporate clients and freelance projects across industries — from brand campaigns to print collateral and digital launches.',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    tech: ['Client Projects', 'Corporate Design', 'Freelance'],
    imageLeft: false,
  },
];

export default function Projects() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [, navigate] = useLocation();

  return (
    <section id="projects" className="py-28 relative z-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow mb-4" data-testid="projects-eyebrow">
            Featured Work
          </span>
          <h2 className="section-title mt-4" data-testid="projects-title">
            Selected <span className="gradient-text">projects</span>.
          </h2>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              <motion.div
                className={`md:col-span-7 ${project.imageLeft ? '' : 'md:order-2'}`}
                initial={{ opacity: 0, x: project.imageLeft ? -40 : 40 }}
                animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <div
                  className="rounded-2xl overflow-hidden border border-portfolio-border hover-lift relative group"
                  style={{
                    boxShadow: '0 30px 60px -20px hsla(199, 89%, 70%, 0.25)',
                  }}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} project`}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    data-testid={`project-image-${project.id}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-portfolio-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-xs font-medium tracking-wider uppercase">
                    0{project.id}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className={`md:col-span-5 space-y-5 ${project.imageLeft ? '' : 'md:order-1'}`}
                initial={{ opacity: 0, x: project.imageLeft ? 40 : -40 }}
                animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.1 }}
              >
                <h3
                  className="text-3xl md:text-4xl font-display font-bold leading-tight"
                  data-testid={`project-title-${project.id}`}
                >
                  {project.title}
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  data-testid={`project-description-${project.id}`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border border-portfolio-border text-foreground/80 bg-accent/5"
                      data-testid={`project-tech-${project.id}-${t.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <motion.button
                  className="btn-ghost mt-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigate(`/project/${project.id}`)}
                  data-testid={`project-button-${project.id}`}
                >
                  <span>View Project</span>
                  <i className="ph ph-arrow-up-right"></i>
                </motion.button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
