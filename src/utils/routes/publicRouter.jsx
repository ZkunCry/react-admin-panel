import { Outlet, useLocation, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicRouter = () => {
  const location = useLocation();
  const { accessToken } = useAuth();
  const from = location?.state?.from || "/";
  if (accessToken) return <Navigate to={from} state={location.pathname} />;

  return !accessToken ? (
    <Outlet />
  ) : (
    <Navigate to={from} state={location.pathname} />
  );
};
export default PublicRouter;
