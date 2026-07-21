import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Component, ...rest }: any) => {
   const isAuthenticated = localStorage.getItem("token");

   return isAuthenticated ? Component : <Navigate to="/login" replace />;
};

export default PrivateRoute;
