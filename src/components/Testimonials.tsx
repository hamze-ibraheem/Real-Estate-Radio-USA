import { Star, Quote } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah & David M.",
      role: "First-time Buyers",
      location: "Boca Raton, FL",
      text: "The team at Real Estate Radio USA made our first home buying experience incredibly smooth. Their knowledge of the Boca Raton area helped us find exactly what we were looking for. Highly recommended!"
    },
    {
      name: "Michael T.",
      role: "Real Estate Investor",
      location: "Delray Beach, FL",
      text: "I've worked with many agencies in South Florida, but their responsiveness and deep market insights stand out. They found an off-market investment property that exceeded all my ROI expectations."
    },
    {
      name: "Elena R.",
      role: "Home Seller",
      location: "Coral Springs, FL",
      text: "Selling my family home was emotional, but their team handled it with such professionalism and care. The marketing strategy was excellent, and we closed above asking price within three weeks."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-brand-navy-light text-white relative overflow-hidden border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <h2 className="text-brand-gold font-semibold tracking-widest uppercase text-sm mb-3">Client Success</h2>
            <h3 className="text-3xl sm:text-5xl mb-6">What Our Clients Say</h3>
            <p className="text-gray-400 text-lg font-light">
              Don't just take our word for it. Read examples of how we've helped South Florida residents achieve their real estate goals.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-brand-navy p-10 rounded-sm relative h-full border border-brand-gold/20">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5" />
                <div className="flex gap-1 mb-8 text-brand-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed text-lg">
                  "{t.text}"
                </p>
                <div className="border-t border-white/10 pt-6">
                  <h4 className="font-serif font-bold text-xl mb-1">{t.name}</h4>
                  <p className="text-brand-gold font-medium">{t.role}</p>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                    {t.location}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
