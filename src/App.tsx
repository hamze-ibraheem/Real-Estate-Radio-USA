import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingPromo from './components/FloatingPromo';

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-brand-navy text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingPromo />
    </div>
  );
}
