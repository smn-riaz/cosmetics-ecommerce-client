import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ProductsContext } from "../App";


 const PrivateRoute = ({children})  => {
    const { user } = useContext(ProductsContext);
    const location = useLocation()
  
    return user.email ? children :<Navigate to="/login" state={{from:location}} replace/>
    }

export default PrivateRoute