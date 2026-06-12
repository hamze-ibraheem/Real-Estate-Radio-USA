import { Home, Key, TrendingUp, Presentation } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Buying",
      description: "Find your dream home in South Florida. We guide you through curated property viewings, negotiations, and closing with expertise."
    },
    {
      icon: Key,
      title: "Selling",
      description: "Maximize your property's value. We provide comprehensive market analysis, professional staging advice, and aggressive marketing."
    },
    {
      icon: TrendingUp,
      title: "Real Estate Investment",
      description: "Expand your portfolio. We identify high-yield investment properties, single-family homes, and multi-unit opportunities."
    },
    {
      icon: Presentation,
      title: "Market Consultation",
      description: "Make informed decisions backed by data. Schedule a consultation to understand local trends, pricing, and strategic timing."
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-navy relative border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <h2 className="text-brand-gold font-semibold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl sm:text-5xl text-white mb-6">Comprehensive Services</h3>
            <p className="text-slate-300 text-lg">
              We offer full-service real estate solutions tailored to your unique goals, whether you are buying a primary residence, selling an estate, or expanding your investment portfolio.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-brand-navy-light/50 p-8 rounded-sm shadow-sm hover:bg-brand-navy-light transition-all duration-300 h-full border border-brand-gold/20 group">
                  <div className="w-16 h-16 bg-brand-navy text-brand-gold border border-brand-gold/30 rounded-sm flex items-center justify-center mb-8 group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-white mb-4 relative pb-4">
                    {service.title}
                    <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-brand-gold transition-all group-hover:w-full"></span>
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
