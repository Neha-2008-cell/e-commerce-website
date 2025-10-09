import React , { useContext } from "react";
import { userData  } from "./App";
import { Navigate } from "react-router-dom";
export default function NonLoggedin({ children }) {
    const {user} = useContext(userData)
    if (user) {
     return <Navigate to="/"/>   
    }
    return  children
}
