import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loading from "../page/Loading";


const PrivetRoutes = ({children}) => {
  const {user,loading}=useAuth()
  const location=useLocation()
  if (loading) {
    return <Loading></Loading>
  }
  if (user) {
    return children
  }


  return <Navigate to='/' state={{from:location}} replace></Navigate>
};

export default PrivetRoutes;