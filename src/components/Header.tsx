import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-navy/95 backdrop-blur-sm border-b border-brand-gold/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-serif text-2xl font-bold text-white flex flex-col leading-tight">
              <span>Real Estate</span>
              <span className="text-brand-gold text-lg">Radio USA</span>
            </a>
          </div>

          <nav className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-300 hover:text-brand-gold transition-colors text-sm font-medium uppercase tracking-wider">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a href="tel:+15613397179" className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy px-5 py-2.5 rounded-sm hover:bg-white hover:text-brand-navy transition-colors font-bold shadow-lg">
              <Phone className="w-4 h-4" />
              <span>(561) 339-7179</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-brand-gold focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-navy border-b border-brand-gold/30 shadow-lg">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-brand-gold hover:bg-white/5 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 pt-4">
              <a href="tel:+15613397179" className="flex items-center justify-center gap-2 bg-brand-gold text-brand-navy px-5 py-3 rounded-sm hover:bg-white hover:text-brand-navy transition-colors font-bold w-full">
                <Phone className="w-4 h-4" />
                <span>Call (561) 339-7179</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
