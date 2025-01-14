import { Navigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const PrivetRoute = (children) => {
  const { user } = useAuth();
  if (user) {
    {
      children;
    }
  }
  return <Navigate to="/signin"></Navigate>;
};

export default PrivetRoute;
