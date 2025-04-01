import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const local = localStorage.getItem("todouser");
        if (local) {
            setUser(JSON.parse(local));
        }
    }, [])



    return (
        <AuthContext.Provider value={{
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext;