import {useNavigate} from "react-router-dom";
import {useUserAuth} from "../context/UserAuthContext";

const ProtectedRoute = ({children}) => {
  const navigate = useNavigate();
  const {user} = useUserAuth();
  if (!user) {
    return navigate("/signup");
  }

  return children;
};

export default ProtectedRoute;
