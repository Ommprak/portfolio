import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Videos from '@/components/videos';
import Projects from '@/components/projects';
import Gallery from '@/components/gallery';
import Testimonials from '@/components/testimonials';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-portfolio-bg text-foreground">
      <Header />
      <Hero />
      <About />
      <Videos />
      <Projects />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
