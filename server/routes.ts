import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate the contact form data
      const validatedData = contactSchema.parse(req.body);
      
      // Store contact form data
      const contactRequest = await storage.createContactRequest(validatedData);
      
      // In a real implementation, you would send an email notification here
      // and integrate with Follow Up Boss CRM for lead management
      
      res.status(200).json({ 
        success: true, 
        message: 'Contact request received successfully',
        id: contactRequest.id
      });
    } catch (error) {
      console.error('Error processing contact request:', error);
      res.status(400).json({ 
        success: false, 
        message: 'Invalid form data', 
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
    }
  });

  // Implement other API endpoints as needed
  
  const httpServer = createServer(app);
  return httpServer;
}
