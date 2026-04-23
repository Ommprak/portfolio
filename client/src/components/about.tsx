import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const skillGroups: { title: string; items: { name: string; icon: string }[] }[] = [
  {
    title: 'Design',
    items: [
      { name: 'Figma', icon: 'ph-figma-logo' },
      { name: 'Photoshop', icon: 'ph-image' },
      { name: 'Illustrator', icon: 'ph-palette' },
      { name: 'InDesign', icon: 'ph-layout' },
      { name: 'Sketch', icon: 'ph-pen-nib' },
      { name: 'Spline', icon: 'ph-cube' },
    ],
  },
  {
    title: 'Motion & Video',
    items: [
      { name: 'Premiere Pro', icon: 'ph-video' },
      { name: 'After Effects', icon: 'ph-sparkle' },
      { name: 'Cloudinary', icon: 'ph-cloud' },
    ],
  },
  {
    title: 'Code',
    items: [
      { name: 'React', icon: 'ph-atom' },
      { name: 'TypeScript', icon: 'ph-code' },
      { name: 'JavaScript', icon: 'ph-function' },
      { name: 'HTML', icon: 'ph-file-html' },
      { name: 'CSS', icon: 'ph-paint-brush' },
      { name: 'Node.js', icon: 'ph-terminal' },
    ],
  },
  {
    title: 'AI Tools',
    items: [
      { name: 'ChatGPT', icon: 'ph-robot' },
      { name: 'Claude', icon: 'ph-brain' },
      { name: 'Midjourney', icon: 'ph-magic-wand' },
      { name: 'Gemini', icon: 'ph-sparkle' },
    ],
  },
];

export default function About() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="about" className="py-28 relative z-20" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Profile column */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: -40 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div
                className="absolute inset-0 -m-4 rounded-3xl bg-accent/10 blur-2xl"
                aria-hidden
              />
              <div
                className="relative rounded-3xl overflow-hidden border border-portfolio-accent/20"
                style={{ boxShadow: '0 30px 80px -20px hsla(199, 89%, 70%, 0.35)' }}
              >
                <img
                  src="https://res.cloudinary.com/dbdnjaewg/image/upload/v1757242171/WhatsApp_Image_2025-09-03_at_4.12.40_PM_q9lbvh.jpg"
                  alt="Omm Prakash Nayak"
                  className="w-72 h-80 sm:w-80 sm:h-96 object-cover"
                  data-testid="profile-image"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-foreground/90">Available for work</span>
              </div>
            </div>
          </motion.div>

          {/* Bio + skills */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: 40 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="space-y-4">
              <span className="eyebrow" data-testid="about-eyebrow">About Me</span>
              <h2 className="section-title" data-testid="about-title">
                Visual stories that <span className="gradient-text">connect & convert</span>.
              </h2>
            </div>

            <p
              className="text-lg text-muted-foreground leading-relaxed"
              data-testid="about-description"
            >
              I'm a creative graphic designer turning ideas into impactful visuals — from
              brand identities and social campaigns to editorial layouts and short-form video.
              I blend strong typography, considered color, and thoughtful motion to ship
              work that looks sharp and performs even sharper.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '5+', label: 'Brands' },
                { value: '40+', label: 'Reels' },
                { value: '100%', label: 'On-Time' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="surface p-4 text-center"
                  data-testid={`about-stat-${s.label.toLowerCase()}`}
                >
                  <div className="text-2xl font-display font-bold text-accent">
                    {s.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6 pt-4">
              {skillGroups.map((group, gi) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + gi * 0.1 }}
                >
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="glass rounded-lg px-3 py-2 flex items-center gap-2 hover:border-portfolio-accent/40 hover:text-accent transition-all cursor-default"
                        data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <i className={`ph ${skill.icon} text-lg text-accent`}></i>
                        <span className="text-sm">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
