import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getEvents, Event } from '../../services/eventService';
import './EventList.css';

const EventList = () => {
   const [events, setEvents] = useState<Event[]>([]);

   useEffect(() => {
      fetchEvents();
   }, []);

   const fetchEvents = async () => {
      try {
         const events = await getEvents();
         setEvents(events);
      } catch (error) {
         console.error("Error fetching events:", error);
      }
   };

   return (
      <div>
         <div className="event-list">
            {
            events.length === 0 ?
            <p>Caricamento...</p> :
            events.map(event => (
               <div key={event._id} className="event-card">
                  <h2>{event.name}</h2>
                  <p>{event.description}</p>
                  <p>
                     <strong>Data:</strong>{''}
                     {new Date(event.date).toLocaleDateString('it-IT', {
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                     })}
                  </p>
                  <Link to={`/events/${event._id}`} className="btn-details">
                     Dettagli
                  </Link>
               </div>
            ))}
         </div>
         <div className='button-container'>
               <Link to='/event-form' className='btn-add-event'>Aggiungi Evento</Link>
               <Link to="/signup" className="btn-signup">Registrati</Link>
         </div>
      </div>
   );
};

export default EventList;
