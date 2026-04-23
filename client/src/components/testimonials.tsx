import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface Review {
  quote: string;
  name: string;
  role: string;
}

const REVIEWS: Review[] = [
  {
    quote:
      'Omm has a sharp eye for detail. He turned around our entire reel campaign in days and the engagement spoke for itself.',
    name: 'Sneha Kapoor',
    role: 'Marketing Lead, Khaas India',
  },
  {
    quote:
      'Working with Omm felt effortless. He listened, iterated fast, and delivered visuals that actually represented our brand.',
    name: 'Rahul Verma',
    role: 'Founder, Disposal Wala',
  },
  {
    quote:
      'From the brand identity to the launch reels, every asset Omm shipped felt cohesive and on-brand. Highly recommend.',
    name: 'Aanya Mehta',
    role: 'Creative Director, Mohini',
  },
  {
    quote:
      'He gets the brief on the first call. Our social numbers doubled within a month of switching to his reels.',
    name: 'Arjun Iyer',
    role: 'Growth Lead, Frankfinn',
  },
  {
    quote:
      'Editorial layouts that finally match our content. Clients have been complimenting the new look non-stop.',
    name: 'Priya Nair',
    role: 'Editor, Spectrum Magazine',
  },
  {
    quote:
      'Reliable, fast, and genuinely creative. Omm is the rare freelancer who feels like part of the in-house team.',
    name: 'Karan Malhotra',
    role: 'Co-founder, Lunara Studio',
  },
  {
    quote:
      'The motion work he delivered for our launch had a polish I usually only see from much bigger studios.',
    name: 'Ishita Sharma',
    role: 'Brand Manager, Mohini',
  },
  {
    quote:
      'Crisp design, sharp instincts, zero drama. He just gets it done — and it always looks great.',
    name: 'Rohan Desai',
    role: 'Product Lead, Disposal Wala',
  },
  {
    quote:
      'Our reels finally feel cinematic. Omm understands pacing, color, and story in a way most editors miss.',
    name: 'Meera Pillai',
    role: 'Content Strategist',
  },
  {
    quote:
      'Brought a tired identity back to life. The new system is flexible, modern, and genuinely ours.',
    name: 'Vikram Joshi',
    role: 'Founder, Studio Verve',
  },
  {
    quote:
      'Fast turnarounds without sacrificing craft. Omm is now my first call for any visual project.',
    name: 'Tanya Bose',
    role: 'Art Director',
  },
  {
    quote:
      'Every deliverable came back better than the brief. That almost never happens.',
    name: 'Aditya Rao',
    role: 'Marketing Director',
  },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Testimonials() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const rows = useMemo(() => {
    const shuffled = shuffle(REVIEWS);
    const half = Math.ceil(shuffled.length / 2);
    return [shuffled.slice(0, half), shuffled.slice(half)];
  }, []);

  return (
    <section id="testimonials" className="py-28 relative z-20 overflow-hidden" ref={ref}>
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
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10 bg-gradient-to-r from-portfolio-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10 bg-gradient-to-l from-portfolio-bg to-transparent" />

        <div className="flex flex-col gap-6">
          <Marquee items={rows[0]} duration={90} direction="left" />
          <Marquee items={rows[1]} duration={110} direction="right" />
        </div>
      </div>
    </section>
  );
}

function Marquee({
  items,
  duration,
  direction,
}: {
  items: Review[];
  duration: number;
  direction: 'left' | 'right';
}) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        {loop.map((item, i) => (
          <figure
            key={i}
            className="surface p-6 w-[340px] md:w-[420px] shrink-0 flex flex-col gap-4"
            data-testid={`testimonial-card-${i}`}
          >
            <i className="ph-fill ph-quotes text-2xl text-accent/70" aria-hidden></i>
            <blockquote className="text-foreground/90 leading-relaxed text-[15px]">
              {item.quote}
            </blockquote>
            <figcaption className="flex items-center gap-3 mt-auto pt-4 border-t border-portfolio-border">
              <div className="w-10 h-10 rounded-full bg-accent/15 border border-portfolio-accent/30 flex items-center justify-center text-accent font-semibold">
                {item.name.charAt(0)}
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold">{item.name}</div>
                <div className="text-xs text-muted-foreground">{item.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </motion.div>
    </div>
  );
}
