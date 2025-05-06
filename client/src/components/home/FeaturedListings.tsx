import { Link } from 'wouter';
import { FEATURED_PROPERTIES } from '@/lib/constants';
import type { Property } from '@/types';

const PropertyCard = ({ property }: { property: Property }) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    });
  };

  return (
    <div className="property-card bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover"
        />
        {property.tag && (
          <div className="absolute top-4 left-4">
            <span className={`bg-${property.tag.color} text-white text-sm py-1 px-3 rounded font-secondary`}>
              {property.tag.type}
            </span>
          </div>
        )}
        <div className="absolute bottom-4 right-4">
          <span className="bg-white bg-opacity-90 text-primary text-sm py-1 px-3 rounded font-secondary font-bold">
            {formatPrice(property.price)}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-primary mb-2">{property.title}</h3>
        <p className="text-neutral-600 mb-4">{property.address}</p>
        
        <div className="flex justify-between mb-6">
          <div className="flex items-center">
            <i className="fas fa-bed text-secondary mr-2"></i>
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-bath text-secondary mr-2"></i>
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-ruler-combined text-secondary mr-2"></i>
            <span>{property.sqft.toLocaleString()} SqFt</span>
          </div>
        </div>
        
        <Link 
          href={`/listings/${property.id}`}
          className="block text-center bg-white border border-primary text-primary hover:bg-primary hover:text-white transition-standard font-secondary font-medium py-2 px-4 rounded"
        >
          View Property
        </Link>
      </div>
    </div>
  );
};

const FeaturedListings = () => {
  return (
    <section id="listings" className="py-16 px-4 md:px-8 bg-neutral-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Featured Luxury Properties</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Discover exceptional homes in The Ridges Summerlin, where luxury and location create the perfect lifestyle opportunity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROPERTIES.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/listings"
            className="inline-block bg-primary hover:bg-primary-light text-white font-secondary font-medium py-3 px-8 rounded transition-standard"
          >
            View All Listings
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
