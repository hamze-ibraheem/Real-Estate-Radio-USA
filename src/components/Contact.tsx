import { MapPin, Phone, Clock } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-navy relative border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <FadeIn>
              <h2 className="text-brand-gold font-semibold tracking-widest uppercase text-sm mb-3">Get in Touch</h2>
              <h3 className="text-3xl sm:text-5xl text-white mb-6 leading-tight">Let's Discuss Your Real Estate Goals</h3>
              <p className="text-slate-300 mb-10 text-lg leading-relaxed">
                Whether you are looking to buy, sell, or invest, our team is ready to provide you with the insights and service you need. Fill out the form or contact us directly.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-8 mb-10">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-brand-navy-light border border-brand-gold/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white text-xl mb-1">Office Location</h4>
                    <p className="text-slate-300 leading-relaxed">
                      Peninsula Executive Center, Floor 1<br />
                      2385 NW Executive Center Dr, Suite 100<br />
                      Boca Raton, FL 33431
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-brand-navy-light border border-brand-gold/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white text-xl mb-1">Phone</h4>
                    <p className="text-slate-300">
                      <a href="tel:+15613397179" className="hover:text-brand-gold transition-colors">+1 (561) 339-7179</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-brand-navy-light border border-brand-gold/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white text-xl mb-1">Business Hours</h4>
                    <p className="text-slate-300">
                      Mon - Fri: Open till 5:00 PM<br />
                      Sat - Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="relative">
            <FadeIn delay={0.3}>
              <div className="bg-brand-gold p-8 sm:p-12 rounded-sm shadow-2xl flex flex-col gap-8 h-full relative z-10 text-brand-navy">
                <h3 className="text-2xl font-serif text-brand-navy font-bold">Send Us a Message</h3>
                <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-brand-navy/80 mb-2 tracking-wide uppercase">Full Name</label>
                    <input type="text" id="name" className="w-full bg-white/90 border-none rounded-sm px-4 py-3 text-brand-navy placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-navy/50 transition-shadow" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-brand-navy/80 mb-2 tracking-wide uppercase">Email Address</label>
                    <input type="email" id="email" className="w-full bg-white/90 border-none rounded-sm px-4 py-3 text-brand-navy placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-navy/50 transition-shadow" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-brand-navy/80 mb-2 tracking-wide uppercase">Phone Number</label>
                    <input type="tel" id="phone" className="w-full bg-white/90 border-none rounded-sm px-4 py-3 text-brand-navy placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-navy/50 transition-shadow" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-brand-navy/80 mb-2 tracking-wide uppercase">How can we help you?</label>
                    <textarea id="message" rows={4} className="w-full bg-white/90 border-none rounded-sm px-4 py-3 text-brand-navy placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-navy/50 transition-shadow resize-none" placeholder="I'm interested in buying..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-brand-navy text-white font-bold py-4 rounded-sm hover:bg-brand-navy-light transition-colors mt-2 text-lg uppercase tracking-wider">
                    Submit Request
                  </button>
                </form>
              </div>
            </FadeIn>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-gold/10 -z-10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <FadeIn delay={0.4}>
          <div className="mt-24 rounded-sm overflow-hidden border border-brand-gold/30 h-[450px] shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113941.5901309301!2d-80.2078693757303!3d26.371510983363363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8e20251147a45%3A0xe5a3bb45f9bd2a1d!2s2385%20NW%20Executive%20Center%20Dr%20%23100%2C%20Boca%20Raton%2C%20FL%2033431!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Real Estate Radio USA Office Location"
            ></iframe>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
