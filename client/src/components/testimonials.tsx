import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const NAMES = [
  'Sneha Kapoor', 'Rahul Verma', 'Aanya Mehta', 'Arjun Iyer', 'Priya Nair',
  'Karan Malhotra', 'Ishita Sharma', 'Rohan Desai', 'Meera Pillai', 'Vikram Joshi',
  'Tanya Bose', 'Aditya Rao', 'Nikhil Khanna', 'Sara Dutta', 'Devansh Singh',
  'Ananya Reddy', 'Kabir Shah', 'Pooja Menon', 'Yash Agarwal', 'Riya Kulkarni',
  'Aman Bhatia', 'Divya Saxena', 'Siddharth Jain', 'Naina Chowdhury', 'Manav Patel',
  'Kritika Bansal', 'Arnav Mishra', 'Zoya Hussain', 'Harsh Vardhan', 'Nisha Pandey',
  'Aarav Gupta', 'Ritika Sen', 'Dhruv Kapoor', 'Sanya Kohli', 'Veer Chauhan',
  'Mira Choudhary', 'Aryan Sinha', 'Lavanya Iyer', 'Shaurya Bhatt', 'Tara Bose',
];

const ROLES = [
  'Founder', 'Marketing Lead', 'Creative Director', 'Brand Manager',
  'Content Strategist', 'Product Designer', 'Co-founder', 'Head of Growth',
  'Art Director', 'Social Media Lead', 'Video Producer', 'Editor',
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
    const shuffled = shuffle(NAMES);
    const half = Math.ceil(shuffled.length / 2);
    return [
      shuffled.slice(0, half).map((n, i) => ({ name: n, role: ROLES[i % ROLES.length] })),
      shuffled.slice(half).map((n, i) => ({ name: n, role: ROLES[(i + 5) % ROLES.length] })),
    ];
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
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10 bg-gradient-to-r from-portfolio-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10 bg-gradient-to-l from-portfolio-bg to-transparent" />

        <div className="flex flex-col gap-5">
          <Marquee items={rows[0]} duration={40} direction="left" />
          <Marquee items={rows[1]} duration={50} direction="right" />
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
  items: { name: string; role: string }[];
  duration: number;
  direction: 'left' | 'right';
}) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        {loop.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-5 py-3 rounded-full surface whitespace-nowrap"
            data-testid={`testimonial-chip-${i}`}
          >
            <div className="w-9 h-9 rounded-full bg-accent/15 border border-portfolio-accent/30 flex items-center justify-center text-accent font-semibold text-sm">
              {item.name.charAt(0)}
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">{item.name}</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                {item.role}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
