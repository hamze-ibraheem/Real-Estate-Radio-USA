import { ArrowRight, Phone } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1549517045-bc93de0ce7f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Luxury home in South Florida" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/85 mix-blend-multiply"></div>
        {/* Subtle gradient overlay to mimic the teal/sage architecture feel */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy via-brand-navy/90 to-teal-900/30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center lg:text-left">
        <div className="max-w-3xl">
          <FadeIn>
            <span className="inline-block py-1.5 px-4 rounded-full bg-brand-gold/10 text-brand-gold font-medium text-sm tracking-widest uppercase mb-6 border border-brand-gold/30">
              Boca Raton, Florida
            </span>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.1] mb-6">
              Your Trusted Real Estate Experts in <span className="text-brand-gold italic">South Florida</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Based in the prestigious Peninsula Executive Center, we connect buyers, sellers, and investors with exceptional properties across the South Florida market.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href="tel:+15613397179" className="w-full sm:w-auto bg-brand-gold text-brand-navy px-8 py-4 rounded-sm hover:bg-white transition-colors font-bold uppercase tracking-wider flex items-center justify-center gap-2 group text-sm shadow-xl">
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Call Us Now
              </a>
              <a href="#contact" className="w-full sm:w-auto bg-white/5 text-white border border-brand-gold/30 px-8 py-4 rounded-sm hover:bg-white/10 transition-colors font-bold uppercase tracking-wider flex items-center justify-center gap-2 group text-sm backdrop-blur-sm">
                Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
