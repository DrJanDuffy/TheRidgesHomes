import { Link } from 'wouter';
import { TESTIMONIALS } from '@/lib/constants';

const TestimonialsSection = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i 
        key={i} 
        className={`fas fa-star ${i < rating ? 'text-secondary' : 'text-neutral-300'}`}
      ></i>
    ));
  };

  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 bg-primary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Client Testimonials</h2>
          <p className="text-lg text-neutral-200 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience working with Dr. Jan Duffy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map(testimonial => (
            <div key={testimonial.id} className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="font-display font-bold text-primary text-lg">{testimonial.name}</h4>
                  <p className="text-neutral-600 text-sm">{testimonial.type}</p>
                </div>
                <div className="text-secondary">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <p className="text-neutral-600 italic mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="text-sm text-neutral-400">
                {testimonial.date}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/contact"
            className="inline-block bg-white hover:bg-neutral-100 text-primary font-secondary font-medium py-3 px-8 rounded transition-standard"
          >
            Share Your Experience
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
