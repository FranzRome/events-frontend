import React from "react";
import { Routes, Route } from "react-router-dom";
import EventDetail from "./components/EventDetail/EventDetail";
import EventForm from "./components/EventForm/EventForm";
import EventList from "./components/EventList/EventList";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PrivateRoute element={<EventList />} />} />
        <Route path="/events" element={<PrivateRoute element={<EventList />} />} />
        <Route path="/events/:id" element={<PrivateRoute element={<EventDetail />} />} />
        <Route path="/event-form" element={<PrivateRoute element={<EventForm />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
