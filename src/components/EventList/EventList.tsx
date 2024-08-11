import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getEvents, Event } from '../../services/eventService';
import Button from '../Button/Button';
import Login from '../Login/Login';
import './EventList.css';

const EventList = () => {
   const [events, setEvents] = useState<Event[]>([]);
   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
   const [username, setUsername] = useState<string | null>(null);
   const navigate = useNavigate();

   useEffect(() => {
      const token = localStorage.getItem('token');
      const storedUsername = localStorage.getItem('username');
      if (token && storedUsername) {
         setIsAuthenticated(true);
         setUsername(storedUsername);
         fetchEvents();
      } else {
         navigate('/login');
      }
   }, [navigate]);

   const fetchEvents = async () => {
      try {
         const events = await getEvents();
         setEvents(events);
      } catch (error) {
         console.error("Error fetching events:", error);
      }
   };

   const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      setIsAuthenticated(false);
      navigate('/login');
   };

   return (
      <div>
         {isAuthenticated ? (
            <div>
               <h1>
                 Benvenuto, {username}!
               </h1>
               <h2>
                 Lista Eventi
               </h2>
               <div className="event-list">
                  {events.length === 0 ? (
                     <p>Caricamento...</p>
                  ) : (
                     events.map((event) => (
                        <div key={event._id} className="event-card" onClick={() => navigate(`/events/${event._id}`)}>
                           <h2 className='name'>{event.name}</h2>
                           <p className='description'>{event.description}</p>
                           <p className='date'>
                              <strong>Data:</strong>{' '}
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
                     ))
                  )}
               </div>
               <div className="button-container">
                  <Button
                    text="Aggiungi Evento"
                    backgroundColor="#28a745"
                    onClick={() => navigate('/event-form')}
                  />
                  <Button
                    text="Logout"
                    backgroundColor="#dc3545"
                    onClick={handleLogout}
                  />
               </div>
            </div>
         ) : (
            <Login />
         )}
      </div>
   );
};

export default EventList;
