import { CheckCircle2, MapPin, Building2 } from 'lucide-react';
import FadeIn from './FadeIn';

export default function About() {
  const points = [
    "Local Boca Raton experts with deep market knowledge",
    "Professional office in a prestigious executive center",
    "Responsive and reachable team",
    "Dedicated to helping buyers, sellers, and investors",
    "Strong community presence in South Florida"
  ];

  return (
    <section id="about" className="py-24 bg-brand-navy-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <h2 className="text-brand-gold font-semibold tracking-widest uppercase text-sm mb-3">About Us</h2>
              <h3 className="text-3xl sm:text-5xl text-white mb-8 leading-tight">Rooted in the Heart of Boca Raton</h3>
              <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                Operating out of the prestigious Peninsula Executive Center, Real Estate Radio USA is your premier partner for real estate services in South Florida. With years of experience and a deep understanding of local market dynamics, we provide unparalleled service to our clients.
              </p>
              <p className="text-slate-300 mb-10 leading-relaxed text-lg">
                Whether you are a first-time homebuyer, a seasoned investor, or looking to sell an exclusive property, our dedicated team is here to guide you through every step of the transaction with professionalism and care.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-brand-navy flex items-center justify-center flex-shrink-0 border border-brand-gold/30">
                    <MapPin className="text-brand-gold w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white text-xl">Local Expertise</h4>
                    <p className="text-sm text-slate-400 mt-1">Unmatched knowledge of the South FL market</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-brand-navy flex items-center justify-center flex-shrink-0 border border-brand-gold/30">
                    <Building2 className="text-brand-gold w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white text-xl">Premium Network</h4>
                    <p className="text-sm text-slate-400 mt-1">Access to exclusive and off-market listings</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="relative">
            <FadeIn delay={0.3}>
              <div className="bg-brand-navy p-8 sm:p-12 rounded-sm border border-brand-gold/20 shadow-xl relative z-10">
                <h3 className="text-2xl font-serif text-white mb-8">Why Trust Our Team?</h3>
                <ul className="space-y-5">
                  {points.map((point, index) => (
                    <li key={index} className="flex flex-start gap-4">
                      <CheckCircle2 className="text-brand-gold w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200 font-medium leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            
            {/* Background design accent matching the gold/navy aesthetic */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-gold/10 -z-10 rounded-full blur-3xl"></div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-brand-navy/5 -z-10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
