import { useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/user/userSlice";

const useAuth = () => {
  const { accessToken, name } = useSelector(getCurrentUser);

  return { accessToken, name };
};

export default useAuth;
