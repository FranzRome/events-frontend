import React, { FormEvent, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import "./Login.css";

const Login = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const navigate = useNavigate();

   const handleLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      try {
         const response = await axios.post("http://localhost:4000/auth/login", {
            username,
            password,
         });
         console.log(response.data)
         localStorage.setItem("token", response.data.access_token);
         localStorage.setItem('username', response.data.user);
         navigate("/events"); // Update with success route
      } catch (error: any) {
         // Error handling
         console.log(error)
         const errorMessage =
            error.response?.data?.message || "Login failed. Please try again.";
         setError(errorMessage);
      }
   };

   return (
      <div className="login-container">
         <h1>Login</h1>
         <form onSubmit={handleLogin}>
            <div className="username">
               <label>Username:</label>
               <TextField
                  type="text"
                  value={username}
                  id="username"
                  onChange={e => setUsername(e.target.value)}
               />
            </div>
            <div className="password">
               <label>Password:</label>
               <TextField
                  type="password"
                  value={password}
                  id="username"
                  onChange={e => setPassword(e.target.value)}
               />
            </div>
            <div className="btn-login">
               <Button
                       text="Login"
                       backgroundColor="#007bff"
                       onClick={() => handleLogin}
                     />
            </div>
         </form>
         {error && <p style={{ color: "red" }}>{error}</p>}
         <p>
            Non hai un account? <Link to="/signup">Iscriviti</Link>
         </p>
      </div>
   );
};

export default Login;
