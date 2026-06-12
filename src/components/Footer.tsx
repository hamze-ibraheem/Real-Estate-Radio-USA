import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-light text-white pt-16 pb-8 border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#" className="font-serif text-2xl font-bold flex flex-col leading-tight mb-6 inline-block">
              <span>Real Estate</span>
              <span className="text-brand-gold text-lg">Radio USA</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Your trusted partner for buying, selling, and investing in South Florida real estate. Professional service, local expertise.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">Our Services</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">2385 NW Executive Center Dr,<br/>Suite 100, Boca Raton, FL 33431</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <a href="tel:+15613397179" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">+1 (561) 339-7179</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Real Estate Radio USA. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
