import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, isAuth }) => {
  //   return if (!isAuth) return <Navigate to="/" />;
  //   return children;

  return isAuth ? children : <Navigate to="/" />;
};
export default PrivateRoute;
