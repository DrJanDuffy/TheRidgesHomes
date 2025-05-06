import {
  type User,
  type InsertUser,
  type ContactRequest as ContactSubmission,
  type InsertContactRequest as InsertContactSubmission,
  type PropertyInquiry,
  type InsertPropertyInquiry,
  type ValuationRequest,
  type InsertValuationRequest
} from "@shared/schema";

// Custom types for in-memory storage
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

export interface InsertProperty {
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

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  testimonial: string;
  rating: number;
  date: string;
}

export interface InsertTestimonial {
  name: string;
  location: string;
  testimonial: string;
  rating: number;
  date: string;
}

export interface IStorage {
  // Property methods
  getProperties(): Promise<Property[]>;
  getFeaturedProperties(): Promise<Property[]>;
  getPropertyById(id: number): Promise<Property | undefined>;
  createProperty(property: InsertProperty): Promise<Property>;

  // Contact submission methods
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;

  // Testimonial methods
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  // Valuation request methods
  createValuationRequest(request: InsertValuationRequest): Promise<ValuationRequest>;
  getValuationRequests(): Promise<ValuationRequest[]>;
  getValuationRequestByEmail(email: string): Promise<ValuationRequest | undefined>;
}

export class MemStorage implements IStorage {
  private properties: Map<number, Property>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private testimonials: Map<number, Testimonial>;
  private valuationRequests: Map<number, ValuationRequest>;
  private propertyId: number;
  private contactSubmissionId: number;
  private testimonialId: number;
  private valuationRequestId: number;

  constructor() {
    this.properties = new Map();
    this.contactSubmissions = new Map();
    this.testimonials = new Map();
    this.valuationRequests = new Map();
    this.propertyId = 1;
    this.contactSubmissionId = 1;
    this.testimonialId = 1;
    this.valuationRequestId = 1;

    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Sample testimonials
    const sampleTestimonials: InsertTestimonial[] = [
      {
        name: "Michael & Sarah Thompson",
        location: "Bought in The Ridges",
        testimonial: "Dr. Duffy's expertise in The Ridges was invaluable. She knew every detail about the community and helped us find our dream home. Her negotiation skills saved us significantly on our purchase.",
        rating: 5,
        date: "March 2023"
      },
      {
        name: "Jennifer Ramirez",
        location: "Sold in Falcon Ridge",
        testimonial: "The marketing strategy Dr. Duffy implemented for our home was exceptional. Professional photography, targeted advertising, and her extensive network of high-net-worth clients led to a sale well above asking price.",
        rating: 5,
        date: "December 2022"
      },
      {
        name: "Robert & Elizabeth Chen",
        location: "Bought in Tournament Hills",
        testimonial: "As international buyers, we relied heavily on Dr. Duffy's knowledge and guidance. Her attention to detail and responsiveness made the entire process seamless despite being thousands of miles away for most of the transaction.",
        rating: 5,
        date: "August 2023"
      }
    ];

    // Sample properties
    const sampleProperties: InsertProperty[] = [
      {
        title: "Elegant Desert Masterpiece",
        address: "24 Promontory Ridge Drive",
        city: "Las Vegas",
        state: "NV",
        zipCode: "89135",
        price: 4250000,
        bedrooms: 5,
        bathrooms: 6,
        squareFeet: 6300,
        description: "Stunning luxury home with panoramic views of the Las Vegas Strip and surrounding mountains. Custom finishes throughout with a resort-style backyard.",
        features: ["Pool", "Spa", "Outdoor Kitchen", "Home Theater", "Wine Cellar", "4 Car Garage"],
        propertyType: "Single Family",
        isFeatured: true,
        status: "For Sale",
        imageUrls: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"]
      },
      {
        title: "Modern Desert Retreat",
        address: "15 Painted Feather Way",
        city: "Las Vegas",
        state: "NV",
        zipCode: "89135",
        price: 5850000,
        bedrooms: 6,
        bathrooms: 8,
        squareFeet: 7500,
        description: "Contemporary architectural masterpiece with floor-to-ceiling windows showcasing breathtaking golf course and mountain views.",
        features: ["Infinity Pool", "Smart Home", "Glass Wine Cellar", "Home Gym", "Executive Office", "6 Car Garage"],
        propertyType: "Custom Home",
        isFeatured: true,
        status: "For Sale",
        imageUrls: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"]
      },
      {
        title: "Spectacular Custom Estate",
        address: "9 Cloud Chaser Boulevard",
        city: "Las Vegas",
        state: "NV",
        zipCode: "89135",
        price: 7995000,
        bedrooms: 7,
        bathrooms: 9,
        squareFeet: 10200,
        description: "One-of-a-kind luxury estate boasting unparalleled craftsmanship and premium amenities throughout. Located on an elevated lot with sweeping views.",
        features: ["Guest House", "Resort Pool", "Indoor Basketball Court", "Chef's Kitchen", "Elevator", "Home Theater"],
        propertyType: "Estate",
        isFeatured: true,
        status: "For Sale",
        imageUrls: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"]
      }
    ];

    // Add sample testimonials
    sampleTestimonials.forEach(testimonial => {
      this.createTestimonial(testimonial);
    });

    // Add sample properties
    sampleProperties.forEach(property => {
      this.createProperty(property);
    });
  }

  // Property methods
  async getProperties(): Promise<Property[]> {
    return Array.from(this.properties.values());
  }

  async getFeaturedProperties(): Promise<Property[]> {
    return Array.from(this.properties.values()).filter(property => property.isFeatured);
  }

  async getPropertyById(id: number): Promise<Property | undefined> {
    return this.properties.get(id);
  }

  async createProperty(property: InsertProperty): Promise<Property> {
    const id = this.propertyId++;
    const newProperty = { ...property, id };
    this.properties.set(id, newProperty);
    return newProperty;
  }

  // Contact submission methods
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.contactSubmissionId++;
    const createdAt = new Date();
    
    // Ensure all fields have proper types (converting undefined to null)
    const newSubmission: ContactSubmission = {
      id,
      firstName: submission.firstName,
      lastName: submission.lastName,
      email: submission.email,
      phone: submission.phone,
      interest: submission.interest || null,
      message: submission.message || null,
      consent: submission.consent,
      createdAt
    };
    
    this.contactSubmissions.set(id, newSubmission);
    return newSubmission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  // Testimonial methods
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.testimonialId++;
    const newTestimonial = { ...testimonial, id };
    this.testimonials.set(id, newTestimonial);
    return newTestimonial;
  }
  
  // Valuation request methods
  async createValuationRequest(request: InsertValuationRequest): Promise<ValuationRequest> {
    const id = this.valuationRequestId++;
    const createdAt = new Date();
    
    // Ensure all fields have proper types (converting undefined to null)
    const newRequest: ValuationRequest = {
      id,
      firstName: request.firstName,
      lastName: request.lastName,
      email: request.email,
      phone: request.phone,
      address: request.address,
      city: request.city,
      state: request.state,
      zipCode: request.zipCode,
      propertyType: request.propertyType || null,
      estimatedValue: request.estimatedValue || null,
      timeframe: request.timeframe || null,
      createdAt
    };
    
    this.valuationRequests.set(id, newRequest);
    return newRequest;
  }

  async getValuationRequests(): Promise<ValuationRequest[]> {
    return Array.from(this.valuationRequests.values());
  }

  async getValuationRequestByEmail(email: string): Promise<ValuationRequest | undefined> {
    const requests = this.getValuationRequests();
    return (await requests).find(request => request.email.toLowerCase() === email.toLowerCase());
  }
}

export const storage = new MemStorage();
