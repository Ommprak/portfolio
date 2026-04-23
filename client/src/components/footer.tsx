import { motion } from 'framer-motion';
import { useLocation } from 'wouter';

export default function Footer() {
  const [, navigate] = useLocation();
  const year = new Date().getFullYear();

  const sections = [
    {
      title: 'Explore',
      links: [
        { name: 'Home', action: () => scrollTo('home') },
        { name: 'About', action: () => scrollTo('about') },
        { name: 'Videos', action: () => scrollTo('videos') },
        { name: 'Projects', action: () => scrollTo('projects') },
      ],
    },
    {
      title: 'Pages',
      links: [
        { name: 'All Videos', action: () => navigate('/videos') },
        { name: 'Resume', action: () => navigate('/resume') },
        { name: 'Contact', action: () => scrollTo('contact') },
      ],
    },
  ];

  const socials = [
    { icon: 'ph-linkedin-logo', href: 'https://www.linkedin.com/in/omm-prakash-nayak-094916309', label: 'LinkedIn' },
    { icon: 'ph-github-logo', href: 'https://github.com/Ommprak', label: 'GitHub' },
    { icon: 'ph-instagram-logo', href: 'https://www.instagram.com/creativesuiteomm', label: 'Instagram' },
    { icon: 'ph-envelope', href: 'mailto:ommprakash0176@gmail.com', label: 'Email' },
  ];

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <footer className="relative z-20 border-t border-portfolio-border mt-12">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <motion.div
            className="md:col-span-2 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-accent/15 border border-portfolio-accent/30 flex items-center justify-center">
                <span className="text-accent font-display font-bold text-sm">O</span>
              </span>
              <span className="font-display font-semibold tracking-tight text-lg">
                Omm Prakash Nayak
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Independent designer & video editor crafting brands that move. Open to
              freelance projects, full-time roles, and creative collaborations.
            </p>
            <a
              href="mailto:ommprakash0176@gmail.com"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
              data-testid="footer-email"
            >
              <i className="ph ph-envelope"></i>
              ommprakash0176@gmail.com
            </a>
          </motion.div>

          {sections.map((section, si) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + si * 0.1 }}
            >
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={link.action}
                      className="text-foreground/80 hover:text-accent transition-colors"
                      data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-portfolio-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-muted-foreground" data-testid="footer-copyright">
            © {year} Omm Prakash Nayak. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-foreground/80 hover:text-accent hover:border-portfolio-accent/40 transition-all"
                data-testid={`footer-social-${s.label.toLowerCase()}`}
              >
                <i className={`ph ${s.icon} text-lg`}></i>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
