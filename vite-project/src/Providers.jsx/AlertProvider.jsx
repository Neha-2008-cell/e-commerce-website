import {useState} from "react";

import { alertContext} from '../CreateContexts.jsx'

export default function AlertProvider ({children}) {
   
    const [alert, setAlert] = useState(null);

     function removeAlert() {
       setAlert(null)
     }
    return (
        <>
            <alertContext.Provider value={{ alert, setAlert ,removeAlert}} >{children}</alertContext.Provider>
        </>
    )
}

