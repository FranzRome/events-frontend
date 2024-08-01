import axios from "axios";

// BE url
const API_URL = 'http://localhost:4000';

export interface Event {
   _id?: string;
   name: string;
   description: string;
   date: Date;
}

// Richiede tutti gli eventi
export const getEvents = async (): Promise<Event[]> => {
   const response = await axios.get(`${API_URL}/events`);
   return response.data;
};

// Richiede un evento specifico passando una stringa contenente l'id
export const getEventById = async (id: string): Promise<Event> => {
   const response = await axios.get(`${API_URL}/events/${id}`);
   return response.data;
};

// Crea un evento passando un tipo Event
export const createEvent = async (event: Event): Promise<Event> => {
   const response = await axios.post(`${API_URL}/events`, event);
   return response.data;
};

// Aggiorna un evento passando la stirnga del suo id ed un tipo Event
export const updateEvent = async (id: string, event: Event): Promise<Event> => {
   const response = await axios.put(`${API_URL}/events/${id}`, event);
   return response.data;
};

// Rimuove un evento passando la stringa del suo id
export const deleteEvent = async (id: string): Promise<void> => {
   await axios.delete(`${API_URL}/events/${id}`);
};