import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Component, ...rest }: any) => {
   const isAuthenticated = localStorage.getItem("token"); // Assicurati che questo controllo sull'autenticazione sia adatto alle tue esigenze

   return isAuthenticated ? Component : <Navigate to="/login" replace />;
};

export default PrivateRoute;
