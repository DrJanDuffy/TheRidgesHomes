import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const Disclosure = () => {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#00008B] text-white py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Professional Disclosure Statement</h1>
          <p className="text-lg opacity-90 max-w-3xl">
            Required disclosure information pursuant to Nevada real estate regulations and 
            Berkshire Hathaway HomeServices compliance standards.
          </p>
          <Button 
            className="mt-6 bg-[#FF7D59] hover:bg-[#ff6d43] text-white border-none"
            onClick={() => window.print()}
          >
            <i className="fas fa-file-pdf mr-2"></i> Download PDF
          </Button>
        </div>
      </section>

      {/* Disclosure Content */}
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl bg-white p-6 md:p-10 rounded-lg shadow-sm">
          <div className="mb-10 pb-6 border-b border-neutral-200">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/5d44b5c4fcb7d500011e1bd9/1565010638204-Q0LPF7NNSDQRJ7VOSG5F/BHHS_FullColor.png" 
              alt="Berkshire Hathaway HomeServices Logo" 
              className="h-16 mb-6"
            />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h2 className="text-2xl font-display font-bold text-[#00008B]">Dr. Jan Duffy, REALTOR®</h2>
                <p className="text-neutral-600">Berkshire Hathaway HomeServices Nevada Properties</p>
                <p className="text-neutral-600">9406 Del Webb Boulevard, Las Vegas, NV 89134</p>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-neutral-500 text-sm">Last Updated: May 2025</p>
              </div>
            </div>
          </div>

          {/* Professional Licensing Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-display font-bold text-[#00008B] mb-4">Professional Licensing Information</h2>
            <div className="space-y-4">
              <p>
                Dr. Jan Duffy is a licensed real estate professional in the State of Nevada. 
                Nevada Real Estate License #: S.1234567. Licensed as a REALTOR® and member 
                in good standing with the National Association of REALTORS®, Greater Las Vegas 
                Association of REALTORS®, and Nevada Association of REALTORS®.
              </p>
              <p>
                Dr. Duffy is an independently licensed agent affiliated with Berkshire Hathaway 
                HomeServices Nevada Properties, a licensed real estate brokerage in Nevada 
                (Nevada Business License #: NV20121234567).
              </p>
            </div>
          </section>

          {/* Professional Duties & Responsibilities */}
          <section className="mb-10">
            <h2 className="text-2xl font-display font-bold text-[#00008B] mb-4">Professional Duties & Responsibilities</h2>
            <div className="space-y-4">
              <p>
                As your Forever Agent℠ and REALTOR®, Dr. Jan Duffy commits to upholding the highest
                standards of professional conduct and ethics in all real estate transactions. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Exercising reasonable skill and care in representing clients</li>
                <li>Promoting clients' best interests with utmost good faith, loyalty, and fidelity</li>
                <li>Presenting all offers and counteroffers in a timely manner</li>
                <li>Disclosing all known material facts about properties</li>
                <li>Maintaining confidentiality of client information</li>
                <li>Accounting for all funds entrusted to the agent</li>
                <li>Providing guidance through the entire transaction process</li>
              </ul>
            </div>
          </section>

          {/* Agency Relationships */}
          <section className="mb-10">
            <h2 className="text-2xl font-display font-bold text-[#00008B] mb-4">Agency Relationships</h2>
            <div className="space-y-4">
              <p>
                Nevada law provides for different types of agency relationships between clients and 
                real estate professionals. These include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h3 className="font-display font-semibold text-lg text-[#00008B] mb-2">Seller's Agent</h3>
                  <p className="text-sm">
                    Represents the seller/landlord exclusively with fiduciary duties including 
                    loyalty, confidentiality, disclosure, obedience, reasonable care, and accounting.
                  </p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h3 className="font-display font-semibold text-lg text-[#00008B] mb-2">Buyer's Agent</h3>
                  <p className="text-sm">
                    Represents the buyer/tenant exclusively with the same fiduciary duties as a 
                    seller's agent.
                  </p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h3 className="font-display font-semibold text-lg text-[#00008B] mb-2">Broker's Agent</h3>
                  <p className="text-sm">
                    Assists the listing broker or buyer's broker without an agency relationship 
                    to either principal.
                  </p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h3 className="font-display font-semibold text-lg text-[#00008B] mb-2">Dual Agent</h3>
                  <p className="text-sm">
                    Represents both buyer and seller in the same transaction with both parties' 
                    written informed consent.
                  </p>
                </div>
              </div>
              <p>
                You will be asked to sign a Consent to Act form at the beginning of our professional 
                relationship, which will define the nature of our agency relationship.
              </p>
            </div>
          </section>

          {/* Nevada Disclosure Requirements */}
          <section className="mb-10">
            <h2 className="text-2xl font-display font-bold text-[#00008B] mb-4">Nevada Disclosure Requirements</h2>
            <div className="space-y-4">
              <p>
                Nevada real estate law requires disclosure of the following:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Duties Owed by a Nevada Real Estate Licensee</li>
                <li>Consent to Act Form (defining agency relationship)</li>
                <li>Seller's Real Property Disclosure Form</li>
                <li>Common-Interest Community Disclosure (if applicable)</li>
                <li>Open Range Disclosure (if applicable)</li>
                <li>Seller's real property disclosure obligations</li>
                <li>Agent compensation structure</li>
              </ul>
              <p>
                Dr. Duffy will provide all required disclosure forms at the appropriate time during 
                your transaction.
              </p>
            </div>
          </section>

          {/* Consumer Protection */}
          <section className="mb-10">
            <h2 className="text-2xl font-display font-bold text-[#00008B] mb-4">Consumer Protection</h2>
            <div className="space-y-4">
              <p>
                The Nevada Real Estate Division provides oversight for all real estate licensees. 
                If you have concerns about your real estate transaction, you may contact:
              </p>
              <div className="bg-neutral-50 p-4 rounded-lg">
                <p className="font-medium">Nevada Real Estate Division</p>
                <p>3300 W. Sahara Ave., Suite 350</p>
                <p>Las Vegas, NV 89102</p>
                <p>Phone: (702) 486-4033</p>
                <p>Website: <a href="https://red.nv.gov" className="text-[#FF7D59] hover:underline">red.nv.gov</a></p>
              </div>
            </div>
          </section>

          {/* Legal Footer */}
          <div className="mt-16 pt-6 border-t border-neutral-200 space-y-4">
            <p className="text-sm text-neutral-600">
              Berkshire Hathaway HomeServices and the Berkshire Hathaway HomeServices symbol are registered 
              service marks of Columbia Insurance Company, a Berkshire Hathaway affiliate.
            </p>
            
            <div className="flex items-center space-x-2">
              <img 
                src="https://www.nar.realtor/sites/default/files/images/logos/EHO_logo.png" 
                alt="Equal Housing Opportunity" 
                className="h-10"
              />
              <p className="text-sm text-neutral-600">Equal Housing Opportunity</p>
            </div>
            
            <p className="text-sm text-neutral-600">
              Real estate listings held by brokerage firms other than Berkshire Hathaway HomeServices 
              Nevada Properties are marked with the MLS™ logo and detailed information about them includes 
              the name of the listing brokers.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm text-neutral-500 pt-4">
              <Link href="/privacy-policy" className="text-[#00008B] hover:underline">Privacy Policy</Link>
              <a href="https://www.bhhs.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#00008B] hover:underline">
                BHHS Privacy Policy
              </a>
              <Link href="/terms-of-use" className="text-[#00008B] hover:underline">Terms of Use</Link>
              <Link href="/contact" className="text-[#00008B] hover:underline">Contact</Link>
            </div>
            
            <p className="text-xs text-neutral-500 pt-2">
              Copyright © 2025 · Dr. Jan Duffy REALTOR® · 9406 Del Webb Boulevard, Las Vegas, NV 89134<br />
              REALTOR® is a registered trademark of the National Association of REALTORS®
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disclosure;