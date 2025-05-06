import axios from 'axios';
import { InsertContactRequest } from '@shared/schema';

// Define a flexible type that can work with both client forms and server schemas
interface GenericContactData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest?: string;
  message?: string;
  consent?: boolean;
  consentGiven?: boolean;
}

const FOLLOW_UP_BOSS_API_URL = 'https://api.followupboss.com/v1';
const API_KEY = process.env.FOLLOW_UP_BOSS_API_KEY;

// Follow Up Boss expects data in a specific format
interface FollowUpBossPersonData {
  firstName: string;
  lastName: string;
  emails: { value: string; type: string }[];
  phones: { value: string; type: string }[];
  source: string;
  tags?: string[];
  notes?: string;
}

/**
 * Create a new person in Follow Up Boss CRM
 * @param formData Contact form data from the website (can be from client or server schema)
 * @returns Promise with the response from Follow Up Boss
 */
export async function createContact(formData: GenericContactData) {
  try {
    if (!API_KEY) {
      throw new Error('Follow Up Boss API Key is not set');
    }
    
    // Transform the form data into the format expected by Follow Up Boss
    const personData: FollowUpBossPersonData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      emails: [{ value: formData.email, type: 'primary' }],
      phones: [{ value: formData.phone, type: 'mobile' }],
      source: 'Website Contact Form',
      tags: [formData.interest as string], // Use interest as a tag for segmentation
      notes: formData.message || `Interest: ${formData.interest}`
    };

    // Create a basic auth header with the API key
    const auth = {
      username: API_KEY,
      password: ''
    };

    // Send the data to Follow Up Boss API
    const response = await axios.post(
      `${FOLLOW_UP_BOSS_API_URL}/people`,
      personData,
      { auth }
    );

    return response.data;
  } catch (error) {
    console.error('Error creating contact in Follow Up Boss:', error);
    throw error;
  }
}

/**
 * Check if a person already exists in Follow Up Boss
 * @param email Email address to search for
 * @returns Promise with the search results
 */
export async function checkExistingContact(email: string) {
  try {
    if (!API_KEY) {
      throw new Error('Follow Up Boss API Key is not set');
    }

    const auth = {
      username: API_KEY,
      password: ''
    };

    const response = await axios.get(
      `${FOLLOW_UP_BOSS_API_URL}/people/search?email=${encodeURIComponent(email)}`,
      { auth }
    );

    return response.data;
  } catch (error) {
    console.error('Error checking existing contact in Follow Up Boss:', error);
    throw error;
  }
}

export default {
  createContact,
  checkExistingContact
};