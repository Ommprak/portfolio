import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'Omm has a sharp eye for detail. He turned around our entire reel campaign in days and the engagement spoke for itself.',
    name: 'Sneha Kapoor',
    role: 'Marketing Lead, Khaas India',
  },
  {
    id: 2,
    quote:
      'Working with Omm felt effortless. He listened, iterated fast, and delivered visuals that actually represented our brand.',
    name: 'Rahul Verma',
    role: 'Founder, Disposal Wala',
  },
  {
    id: 3,
    quote:
      'From the brand identity to the launch reels, every asset Omm shipped felt cohesive and on-brand. Highly recommend.',
    name: 'Aanya Mehta',
    role: 'Creative Director, Mohini',
  },
];

export default function Testimonials() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="testimonials" className="py-28 relative z-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow mb-4" data-testid="testimonials-eyebrow">
            Kind Words
          </span>
          <h2 className="section-title mt-4" data-testid="testimonials-title">
            Trusted by founders & <span className="gradient-text">creative teams</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.id}
              className="surface p-6 flex flex-col gap-4 hover-lift"
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              data-testid={`testimonial-${t.id}`}
            >
              <i className="ph-fill ph-quotes text-3xl text-accent/70" aria-hidden></i>
              <blockquote className="text-foreground/90 leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-auto pt-4 border-t border-portfolio-border">
                <div className="w-10 h-10 rounded-full bg-accent/15 border border-portfolio-accent/30 flex items-center justify-center text-accent font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
