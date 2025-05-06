// Property types
export interface Property {
  id: number;
  title: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  description: string;
  features: string[];
  propertyType: string;
  isFeatured: boolean;
  status: string;
  imageUrls: string[];
}

// Contact form types
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  message?: string;
  consentGiven: boolean;
}

// Testimonial types
export interface Testimonial {
  id: number;
  name: string;
  location: string;
  testimonial: string;
  rating: number;
  date: string;
}

// Navigation link type
export interface NavLink {
  name: string;
  path: string;
  external?: boolean;
}

// Community feature type
export interface CommunityFeature {
  title: string;
  description: string;
  icon: string;
}

// Community highlight type
export interface CommunityHighlight {
  title: string;
  description: string;
  image: string;
}

// Home valuation benefit type
export interface ValuationBenefit {
  title: string;
  description: string;
  icon: string;
}
