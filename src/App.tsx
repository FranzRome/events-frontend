import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EventDetail from './components/EventDetail/EventDetail';
import EventForm from './components/EventForm/EventForm';
import Login from './components/Login';
import EventList from './components/EventList/EventList';
import Signup from './components/Signup';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/events" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/create-event" element={<EventForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
