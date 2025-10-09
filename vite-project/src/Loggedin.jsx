import React , { useContext } from "react";
import { userData  } from "./App";
import { Navigate } from "react-router-dom";
export default function Loggedin({ children }) {
    const {user} = useContext(userData)
    if (!user) {
    return <Navigate to="/Login"/>   
    }
    return children
}

