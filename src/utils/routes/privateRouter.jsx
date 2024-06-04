import useAuth from "../hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRouter = () => {
  const { accessToken } = useAuth();
  const location = useLocation();
  return accessToken ? (
    <Outlet />
  ) : (
    <Navigate to={"/signin"} state={{ from: location.pathname }} replace />
  );
};

export default PrivateRouter;
