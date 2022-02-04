import { Navigate, Outlet } from "react-router-dom";
import { supabase } from "../supabaseClient";

const PrivateRoute = () => {
  return supabase.auth.user() ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
