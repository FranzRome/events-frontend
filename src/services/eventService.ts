import axios from "axios";

// Backend url
const API_URL = 'http://localhost:4000';

// Event data structure
export interface Event {
   _id?: string;
   name: string;
   description: string;
   date: Date;
}

// Requests all events
export const getEvents = async (): Promise<Event[]> => {
   const response = await axios.get(`${API_URL}/events`);
   return response.data;
};

// Requests a specific event searching by id
export const getEventById = async (id: string): Promise<Event> => {
   const response = await axios.get(`${API_URL}/events/${id}`);
   return response.data;
};

// Creates a new event
export const createEvent = async (event: Event): Promise<Event> => {
   const response = await axios.post(`${API_URL}/events`, event);
   return response.data;
};

// Updates an event
export const updateEvent = async (id: string, event: Event): Promise<Event> => {
   const response = await axios.put(`${API_URL}/events/${id}`, event);
   return response.data;
};

// Removes an event searching by id
export const deleteEvent = async (id: string): Promise<void> => {
   await axios.delete(`${API_URL}/events/${id}`);
};