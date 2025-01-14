import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import { Spinner } from "keep-react";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <Spinner className="w-12 mx-auto h-12 my-auto" color="success" />;
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/signin"></Navigate>;
};

export default PrivetRoute;
