import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { NAV_LINKS, SITE_INFO } from '@/lib/constants';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl md:text-3xl font-display font-bold text-primary">
              <span className="text-secondary">The Ridges</span> Summerlin
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`font-secondary font-medium transition-standard ${
                  location === link.path 
                    ? 'text-secondary' 
                    : 'text-neutral-800 hover:text-secondary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={`tel:${SITE_INFO.phone.replace(/[^\d+]/g, '')}`} 
              className="flex items-center text-primary hover:text-primary-light transition-standard"
            >
              <i className="fas fa-phone-alt mr-2"></i>
              <span className="font-secondary">{SITE_INFO.phone}</span>
            </a>
            <Link 
              href="/contact" 
              className="px-6 py-2.5 bg-secondary hover:bg-secondary-dark text-white font-secondary font-medium rounded transition-standard"
            >
              Schedule a Consultation
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-neutral-800 focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg absolute w-full left-0 top-full`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`py-2 px-4 font-secondary rounded ${
                  location === link.path 
                    ? 'bg-neutral-100 text-secondary'
                    : 'text-neutral-800 hover:bg-neutral-100'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={`tel:${SITE_INFO.phone.replace(/[^\d+]/g, '')}`}
              className="py-2 px-4 text-primary font-secondary flex items-center"
            >
              <i className="fas fa-phone-alt mr-2"></i> {SITE_INFO.phone}
            </a>
            <Link 
              href="/contact" 
              className="py-2.5 px-4 bg-secondary text-white font-secondary text-center rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
