import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { Event } from "../../services/eventService";
import axios from 'axios';
import './EventDetail.css';

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  
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


   if (!id) {
      return <div>Error: Event ID not found</div>;
   }

   if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="event-detail-container">
      <h1 className='name'>{event.name}</h1>
      <p className='date'>{new Date(event.date).toLocaleDateString()}</p>
      <p className='description'>{event.description}</p>
      <Link to="/events">Indietro</Link>
    </div>
  );
};

export default EventDetail;
