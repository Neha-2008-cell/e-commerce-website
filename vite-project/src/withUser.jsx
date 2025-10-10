import React , { useContext } from "react";
import { userData } from './App.jsx';
export default function withUser (IncomingComponent) {
     
   
    return function OutgoingComponent(props) {
      const {user , setUser } = useContext(userData)

        return (
        <>
         <IncomingComponent {...props} user={user} setUser={setUser} />
        </>
        )
    }
}

