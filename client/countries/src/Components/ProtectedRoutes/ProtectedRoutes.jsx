import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider/AuthProvider";

export const ProtectedRoute = ({ element }) => {
  const auth = useAuth();
  return auth.isAuthenticated ? element : <Navigate to="/" />;
};
