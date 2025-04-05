import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    //Register User
    const registerUser = async (formData) => {
        let config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        const checkUser = await fetch(`http://localhost:5001/users?email=${formData.email}`, { method: "GET" })
        if (checkUser.ok) {
            const user = await checkUser.json();
            if (user.length > 0) {
                alert("email already exist, please login")
            } else {
                const response = await fetch("http://localhost:5001/users", config);
                if (response.status === 201) {
                    const user = await response.json();
                    localStorage.setItem("todouser", JSON.stringify(user))
                    setUser(user)
                    alert("Registered Successfully")

                    navigate("/task-list")
                } else {
                    alert("Something went wrong")
                }
            }
        } else {
            alert("something went wrong")
        }
    }


    //login user
    const login = async (formData) => {
        const response = await fetch(`http://localhost:5001/users?email=${formData.email}&password=${formData.password}`, { method: "GET" });
        if (response.ok) {
            const user = await response.json();
            if (user.length > 0) {
                alert("logged in successfully");
                localStorage.setItem("todouser", JSON.stringify(user[0]))
                setUser(user[0])
                navigate("/task-list")
            } else {
                alert("email/password did not match")
            }
        } else {
            alert("something went wrong");
        }
    }




    const checkUserStatus = async (email) => {
        try {
            const response = await fetch(`http://localhost:5001/users?email=${email}`)
            const user = await response.json();
            if (user.length > 0) {
                setUser(user[0])
            } else {
                localStorage.removeItem("todouser");
            }
        } catch (error) {
            console.log(error);
        }
    }


    //logout
    const logout = () => {
        localStorage.removeItem("todouser");
        setUser(null);
        navigate("/login");
    }


    useEffect(() => {
        const local = JSON.parse(localStorage.getItem("todouser"));
        if (local) {
            checkUserStatus(local.email);
        } else {
            localStorage.removeItem("todouser");
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            registerUser,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext;