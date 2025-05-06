import { useEffect } from 'react';
import ContactSection from '@/components/home/ContactSection';

const Contact = () => {
  // Set page title and meta description
  useEffect(() => {
    document.title = "Contact Dr. Jan Duffy | The Ridges Summerlin Real Estate";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Contact Dr. Jan Duffy, luxury real estate specialist for The Ridges Summerlin. Schedule a consultation, request property information, or get expert advice on buying and selling in Las Vegas.");
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80')" }}
        >
        </div>
        <div className="absolute inset-0 gradient-overlay"></div>
        
        <div className="container mx-auto h-full px-4 md:px-8 relative z-10 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              Contact <span className="text-secondary">Dr. Jan Duffy</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />
    </>
  );
};

export default Contact;
