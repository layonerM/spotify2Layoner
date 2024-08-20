import { Navigate } from "react-router-dom";
import { userAtom } from "../recoil";
import { useRecoilValue } from "recoil";
const LoggedRoute = ({ children }) => {
  const user = useRecoilValue(userAtom);
  return <>{user.user ? children : <Navigate to="/" replace={true} />}</>;
};

export default LoggedRoute;
