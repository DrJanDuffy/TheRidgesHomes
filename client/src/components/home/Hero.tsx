import { Link } from 'wouter';

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] bg-primary overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200&q=80')" }}
        aria-hidden="true"
      >
      </div>
      <div className="absolute inset-0 gradient-overlay" aria-hidden="true"></div>
      
      <div className="container mx-auto h-full px-4 md:px-8 relative z-10 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-4">
            Luxury Living in<br />
            <span className="text-secondary">The Ridges Summerlin</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-100 mb-8 font-light">
            Exclusive properties in Las Vegas' most prestigious community, expertly curated by Dr. Jan Duffy.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/listings" 
              className="px-8 py-3 bg-secondary hover:bg-secondary-dark text-white font-secondary font-medium rounded transition-standard text-center"
            >
              View Luxury Listings
            </Link>
            <Link 
              href="/#valuation" 
              className="px-8 py-3 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white border border-white border-opacity-40 font-secondary font-medium rounded transition-standard text-center"
            >
              Get Your Home Valuation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
