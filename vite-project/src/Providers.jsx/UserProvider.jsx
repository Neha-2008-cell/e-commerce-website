import { useState } from "react";
import { userData } from "../CreateContexts";
export default function UserProvider({children}) {
    
    const [user, setUser] = useState(null);

    return (
        <>
            <userData.Provider value ={{ user, setUser }}>{children}</userData.Provider>
        </>
    )
}

