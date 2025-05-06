import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";
import followUpBossService from "./services/followUpBoss";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate the contact form data
      const validatedData = contactSchema.parse(req.body);
      
      // Store contact form data in our local storage
      const contactRequest = await storage.createContactSubmission(validatedData);
      
      // Send the contact data to Follow Up Boss CRM
      let followUpBossResponse = null;
      let followUpBossError = null;
      
      try {
        // Check if contact exists first
        const existingContact = await followUpBossService.checkExistingContact(validatedData.email);
        
        // If not found or empty results, create new contact
        if (!existingContact || existingContact.people.length === 0) {
          // Map to the Follow Up Boss service API
          followUpBossResponse = await followUpBossService.createContact(validatedData);
          console.log('Contact created in Follow Up Boss:', followUpBossResponse);
        } else {
          console.log('Contact already exists in Follow Up Boss');
        }
      } catch (crmError) {
        console.error('Error with Follow Up Boss CRM:', crmError);
        followUpBossError = crmError instanceof Error ? crmError.message : 'Unknown CRM error';
        // We don't want to fail the whole request if CRM integration fails
      }
      
      res.status(200).json({ 
        success: true, 
        message: 'Contact request received successfully',
        id: contactRequest.id,
        crmStatus: followUpBossError ? 'error' : 'success',
        crmMessage: followUpBossError || 'Contact data sent to CRM'
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
