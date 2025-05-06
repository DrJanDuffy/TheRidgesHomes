import { useState } from 'react';
import { useRouter } from 'wouter';

const PropertySearch = () => {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState({
    priceRange: '',
    bedrooms: '',
    bathrooms: '',
    propertyType: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build query string from form values
    const queryParams = new URLSearchParams();
    
    if (searchParams.priceRange) queryParams.append('price', searchParams.priceRange);
    if (searchParams.bedrooms) queryParams.append('beds', searchParams.bedrooms);
    if (searchParams.bathrooms) queryParams.append('baths', searchParams.bathrooms);
    if (searchParams.propertyType) queryParams.append('type', searchParams.propertyType);
    
    // Navigate to listings page with search parameters
    router(`/listings?${queryParams.toString()}`);
  };

  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="bg-white shadow-xl rounded-lg -mt-24 relative z-20 p-6 md:p-8 lg:p-10">
          <h2 className="text-2xl font-display font-bold text-primary mb-6 text-center">Find Your Dream Home</h2>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <div>
              <label htmlFor="priceRange" className="block text-neutral-700 font-secondary text-sm mb-2">Price Range</label>
              <select
                id="priceRange"
                name="priceRange"
                value={searchParams.priceRange}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-neutral-300 focus:border-secondary focus:ring focus:ring-secondary focus:ring-opacity-20 outline-none transition-standard"
              >
                <option value="">Any Price</option>
                <option value="1000000-2000000">$1M - $2M</option>
                <option value="2000000-3000000">$2M - $3M</option>
                <option value="3000000-5000000">$3M - $5M</option>
                <option value="5000000-10000000">$5M - $10M</option>
                <option value="10000000+">$10M+</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="bedrooms" className="block text-neutral-700 font-secondary text-sm mb-2">Bedrooms</label>
              <select
                id="bedrooms"
                name="bedrooms"
                value={searchParams.bedrooms}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-neutral-300 focus:border-secondary focus:ring focus:ring-secondary focus:ring-opacity-20 outline-none transition-standard"
              >
                <option value="">Any</option>
                <option value="3">3+ Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
                <option value="5">5+ Bedrooms</option>
                <option value="6">6+ Bedrooms</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="bathrooms" className="block text-neutral-700 font-secondary text-sm mb-2">Bathrooms</label>
              <select
                id="bathrooms"
                name="bathrooms"
                value={searchParams.bathrooms}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-neutral-300 focus:border-secondary focus:ring focus:ring-secondary focus:ring-opacity-20 outline-none transition-standard"
              >
                <option value="">Any</option>
                <option value="2">2+ Bathrooms</option>
                <option value="3">3+ Bathrooms</option>
                <option value="4">4+ Bathrooms</option>
                <option value="5">5+ Bathrooms</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="propertyType" className="block text-neutral-700 font-secondary text-sm mb-2">Property Type</label>
              <select
                id="propertyType"
                name="propertyType"
                value={searchParams.propertyType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-neutral-300 focus:border-secondary focus:ring focus:ring-secondary focus:ring-opacity-20 outline-none transition-standard"
              >
                <option value="">All Types</option>
                <option value="single-family">Single Family</option>
                <option value="custom">Custom Home</option>
                <option value="estate">Estate</option>
                <option value="townhome">Townhome</option>
              </select>
            </div>
            
            <div className="md:col-span-2 lg:col-span-4">
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-light text-white font-secondary font-medium py-3 px-6 rounded transition-standard"
              >
                Search Properties
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PropertySearch;
