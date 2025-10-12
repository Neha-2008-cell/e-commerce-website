import {useState} from "react";

import { alertData} from '../CreateContexts.jsx'

export default function AlertProvider ({children}) {
   
    const [alert, setAlert] = useState(null);

     function removeAlert() {
       setAlert(null)
     }
    return (
        <>
            <alertData.Provider value={{ alert, setAlert ,removeAlert}} >{children}</alertData.Provider>
        </>
    )
}

