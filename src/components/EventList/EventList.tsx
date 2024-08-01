import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getEvents, Event } from "../../services/eventService";
import "./EventList.css";

const EventList: React.FC = () => {
   const [events, setEvents] = useState<Event[]>([]);
   const navigate = useNavigate();

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

   const handleAddEvent = () => {
      navigate("/create-event");
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
                     <strong>Data:</strong>{" "}
                     {new Date(event.date).toLocaleDateString("it-IT", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                     })}
                  </p>
                  <Link to={`/events/${event._id}`} className="btn-details">
                     Dettagli
                  </Link>
               </div>
            ))}
         </div>
         <div className='button-container'>
               <button className='btn-add-event' onClick={handleAddEvent}>Aggiungi Nuovo Evento</button>
         </div>
      </div>
   );
};

export default EventList;
