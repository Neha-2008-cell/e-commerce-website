import { useState } from "react";
import { userContext } from "../CreateContexts";
export default function UserProvider({children}) {
    
    const [user, setUser] = useState(null);

    return (
        <>
            <userContext.Provider value ={{ user, setUser }}>{children}</userContext.Provider>
        </>
    )
}

