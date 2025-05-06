import { useEffect } from 'react';

const ListingsSection = () => {
  // Use effect for RealScout initialization if needed
  useEffect(() => {
    // RealScout is loaded via script tag in index.html
    // Any additional initialization can go here if needed
  }, []);

  return (
    <section className="py-20 px-4 md:px-8 bg-neutral-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Current Listings</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Explore our curated selection of luxury properties currently available in The Ridges Summerlin.
          </p>
        </div>
        
        <realscout-office-listings 
          agent-encoded-id="QWdlbnQtMjI1MDUw" 
          sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
          listing-status="For Sale" 
          property-types="SFR,MF,TC,LAL,MOBILE" 
          price-min="500000">
        </realscout-office-listings>
      </div>
    </section>
  );
};

export default ListingsSection;
