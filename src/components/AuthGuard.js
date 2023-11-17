import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthGuard = (props) => {
  const { children } = props;
  const auth = useAuth();
  const location = useLocation();
  const [requestedLocation, setRequestLocation] = useState(null);
  console.log('auth guard called')
  if (!auth.isAuthenticated) {
    if (location.pathname !== requestedLocation) {
      setRequestLocation(location.pathname);
    }

    return <Navigate to='/' />;
  }

  if (requestedLocation && location.pathname !== requestedLocation) {
    setRequestLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
};

export default AuthGuard;