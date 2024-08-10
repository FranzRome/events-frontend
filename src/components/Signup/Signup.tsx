import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "../TextField/TextField";
import "./Signup.css";

const Signup = () => {
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState<string | null>(null);
   const navigate = useNavigate();

   const handleSignup = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
         await axios.post("http://localhost:4000/users/register", {
            username,
            email,
            password,
         });
         navigate("/login");
      } catch (e: any) {
         if (
            username.length <= 0 ||
            email.length <= 0 ||
            password.length <= 0
         ) {
            setError("Please, fill all the fields inside this form");
         } else if (e.response && e.response.status === 409) {
            setError("Email lready in use");
         } else {
            setError("An error occurred. Please try again.");
         }
      }
   };

   return (
      <div className="signup-container">
         <h1>Registrazione</h1>
         <form onSubmit={handleSignup} className="signup-form">
            <div className="form-group">
               <label htmlFor="username">Username</label>
               <TextField
                  type="text"
                  id="username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
               />
            </div>
            <div className="form-group">
               <label htmlFor="email">Email</label>
               <TextField
                  type="email"
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
            </div>
            <div className="form-group">
               <label htmlFor="password">Password</label>
               <TextField
                  type="password"
                  id="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
               />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="submit-button">
               Registrati
            </button>
         </form>
         <button onClick={() => navigate(-1)} className="back-button">
            Torna Indietro
         </button>
      </div>
   );
};

export default Signup;
