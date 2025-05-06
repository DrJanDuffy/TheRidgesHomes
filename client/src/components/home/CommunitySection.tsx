import { Link } from 'wouter';
import { COMMUNITY_FEATURES } from '@/lib/constants';

const CommunitySection = () => {
  return (
    <section id="community" className="py-20 px-4 md:px-8 bg-neutral-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">The Ridges Summerlin</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Discover one of Las Vegas' most prestigious master-planned communities, offering unparalleled luxury and amenities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-display font-bold text-primary mb-6">Community Highlights</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <i className="fas fa-golf-ball text-secondary text-2xl mt-1 mr-4"></i>
                  <div>
                    <h4 className="text-xl font-display font-semibold text-neutral-800 mb-2">Bear's Best Golf Course</h4>
                    <p className="text-neutral-600">
                      Designed by Jack Nicklaus, this championship course features replicas of his favorite holes from courses around the world.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-mountain text-secondary text-2xl mt-1 mr-4"></i>
                  <div>
                    <h4 className="text-xl font-display font-semibold text-neutral-800 mb-2">Stunning Views</h4>
                    <p className="text-neutral-600">
                      Elevated location offers breathtaking views of the Las Vegas Strip and the surrounding mountains.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-shield-alt text-secondary text-2xl mt-1 mr-4"></i>
                  <div>
                    <h4 className="text-xl font-display font-semibold text-neutral-800 mb-2">Gated Security</h4>
                    <p className="text-neutral-600">
                      24/7 guarded entrances and patrol services ensure privacy and peace of mind for residents.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-hiking text-secondary text-2xl mt-1 mr-4"></i>
                  <div>
                    <h4 className="text-xl font-display font-semibold text-neutral-800 mb-2">Trails & Parks</h4>
                    <p className="text-neutral-600">
                      Over 150 miles of interconnected trails and numerous parks provide ample outdoor recreation opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80" 
              alt="The Ridges Summerlin community aerial view" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMMUNITY_FEATURES.map(feature => (
            <div key={feature.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-neutral-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/community"
            className="inline-block bg-primary hover:bg-primary-light text-white font-secondary font-medium py-3 px-8 rounded transition-standard"
          >
            Explore The Ridges
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
