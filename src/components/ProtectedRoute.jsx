import {useNavigate} from "react-router-dom";

const ProtectedRoute = ({children}) => {
  const navigate = useNavigate();
  let auth = true;
  if (!auth) {
    return navigate("/home");
  }

  return children;
};

export default ProtectedRoute;
