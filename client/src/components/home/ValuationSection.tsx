import { useEffect } from 'react';
import { HOMEBOT_ACCOUNT_ID } from '@/lib/constants';

declare global {
  interface Window {
    Homebot?: any;
  }
}

const ValuationSection = () => {
  // Initialize Homebot widget when component mounts
  useEffect(() => {
    if (window.Homebot) {
      window.Homebot('#homebot_homeowner', HOMEBOT_ACCOUNT_ID);
    }
  }, []);

  return (
    <section id="valuation" className="py-20 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">What's Your Home Worth?</h2>
            
            <p className="text-lg text-neutral-600 mb-6">
              Get a comprehensive AI-powered valuation of your luxury property with detailed insights on market trends, equity position, and investment potential.
            </p>
            
            <div className="space-y-5 mb-8">
              <div className="flex items-start">
                <div className="bg-secondary rounded-full p-2 mr-4 text-white">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-primary">Monthly Valuation Reports</h4>
                  <p className="text-neutral-600 text-sm">Receive ongoing updates on your property's value</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary rounded-full p-2 mr-4 text-white">
                  <i className="fas fa-brain"></i>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-primary">Advanced AI Algorithms</h4>
                  <p className="text-neutral-600 text-sm">Precision valuation using multiple data points</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary rounded-full p-2 mr-4 text-white">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-primary">Mobile App Access</h4>
                  <p className="text-neutral-600 text-sm">Track your property value on-the-go</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary rounded-full p-2 mr-4 text-white">
                  <i className="fas fa-lock"></i>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-primary">Private & Secure</h4>
                  <p className="text-neutral-600 text-sm">Your information is always protected</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://homebot.page.link/?apn=com.homebot.app.android&isi=6448762620&ibi=com.homebot.app.ios&link=https%3A%2F%2Fhomebotapp.com%2F%3Fshare_code%3Ddr_jan5835" 
              className="inline-flex items-center bg-neutral-800 hover:bg-black text-white font-secondary py-3 px-6 rounded transition-standard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-mobile-alt mr-2"></i>
              Get Your Home Valuation on Mobile
            </a>
          </div>
          
          <div className="lg:col-span-3 bg-neutral-100 rounded-lg p-8 shadow-lg">
            <div id="homebot_homeowner"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuationSection;
