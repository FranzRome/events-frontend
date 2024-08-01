import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EventForm.css'; 

interface EventFormInputs {
  name: string;
  description: string;
  date: string;
}

const EventForm: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<EventFormInputs>();
  const navigate = useNavigate();

  const onSubmit = async (data: EventFormInputs) => {
    try {
      await axios.post('http://localhost:4000/events', data);
      reset();
    } catch (error) {
      console.error('Errore nella creazione dell\'evento:', error);
    }
  };

  const handleBackClick = () => {
    navigate('/events');
  };

  return (
    <div className='form-container'>
      <h1>Crea un evento</h1>
      <form className='form-group' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            {...register('name', { required: 'Il nome è obbligatorio' })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="description">Descrizione</label>
          <textarea
            id="description"
            {...register('description', { required: 'La descrizione è obbligatoria' })}
          />
          {errors.description && <p>{errors.description.message}</p>}
        </div>
        <div>
          <label htmlFor="date">Data</label>
          <input
            type="datetime-local"
            id="date"
            {...register('date', { required: 'La data è obbligatoria' })}
          />
          {errors.date && <p>{errors.date.message}</p>}
        </div>
        <div className='button-group'>
          <button className='btn-secondary' type="button" onClick={handleBackClick}>Indietro</button>
          <button className='btn-primary' type="submit">Crea Evento</button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
