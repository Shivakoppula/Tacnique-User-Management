import { Navigate, Outlet, useLocation } from "react-router-dom";

function AuthenticationGuard() {
  const location = useLocation();
  const isAuthenticated =
    sessionStorage.getItem("isAuthenticated") === "true";

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  return <Outlet />;
}

export default AuthenticationGuard;
