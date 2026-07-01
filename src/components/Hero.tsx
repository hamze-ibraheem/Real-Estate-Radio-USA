import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import FadeIn from './FadeIn';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-brand-navy">
      {/* Cinematic AI-Generated Architectural Concept Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80" 
          alt="Luxury Architecture Concept" 
          className="w-full h-full object-cover opacity-60 mix-blend-overlay scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/70 via-brand-navy/60 to-brand-navy/85"></div>
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-teal-950/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left copy column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <FadeIn>
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-gold/10 text-brand-gold font-semibold text-xs tracking-widest uppercase mb-6 border border-brand-gold/30">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                Boca Raton, Florida
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white font-bold leading-[1.1] mb-6 font-serif">
                Your Trusted Real Estate Experts in <span className="text-brand-gold italic">South Florida</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
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

          {/* Right beautifully-framed, premium image column */}
          <div className="lg:col-span-5 relative w-full max-w-lg mx-auto lg:max-w-none">
            <FadeIn delay={0.4}>
              <motion.div 
                className="relative z-10"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Gold aesthetic border frame */}
                <div className="absolute inset-0 border border-brand-gold/30 rounded-lg translate-x-4 translate-y-4 -z-10"></div>
                
                {/* Premium Main Image */}
                <div className="overflow-hidden rounded-lg shadow-2xl border-2 border-brand-gold/40 bg-brand-navy-light relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Premium Luxury South Florida Real Estate Concept Design" 
                    className="w-full h-[320px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Image light reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent"></div>
                  
                  {/* Premium floating tag */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-brand-navy/90 backdrop-blur-sm border border-brand-gold/30 text-white flex justify-between items-center">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-brand-gold font-bold">Concept Render</p>
                      <h4 className="font-serif text-sm font-semibold text-white mt-0.5">Palm Beach Coastal Estate</h4>
                    </div>
                    <span className="text-xs bg-brand-gold/20 text-brand-gold px-2.5 py-1 rounded font-bold uppercase tracking-widest border border-brand-gold/30">AI DESIGN</span>
                  </div>
                </div>
              </motion.div>
            </FadeIn>

            {/* Glowing gold backdrops */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
