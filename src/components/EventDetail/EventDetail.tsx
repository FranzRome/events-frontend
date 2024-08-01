import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {Event } from "../../services/eventService";
import axios from 'axios';

/*interface Params {
  id: string;
}*/

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get<Event>(`http://localhost:4000/events/${id}`);
        setEvent(response.data);
      } catch (error) {
        console.error('Failed to fetch event:', error);
      }
    };

    fetchEvent();
  }, [id]);
  
  const handleBackClick = () => {
    navigate('/events');
  };

   if (!id) {
      return <div>Error: Event ID not found</div>;
   }

   if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      <p>{new Date(event.date).toLocaleDateString()}</p>
      <button type="button" onClick={handleBackClick}>Indietro</button>
    </div>
  );
};

export default EventDetail;
