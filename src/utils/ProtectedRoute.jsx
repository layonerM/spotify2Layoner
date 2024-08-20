import { Navigate } from "react-router-dom";
import { userAtom } from "../recoil";
import { useRecoilValue } from "recoil";
const ProtectedRoute = ({ children }) => {
  const user = useRecoilValue(userAtom);
  return <>{user.user ? <Navigate to="/" replace={true} /> : children}</>;
};

export default ProtectedRoute;
