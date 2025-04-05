import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkUserStatus = async (email) => {
        try {
            const response = await fetch(`http://localhost:5001/users?email=${email}`)
            const user = await response.json();
            if (user.length > 0) {
                setIsLoggedIn(true);
            } else {
                localStorage.removeItem("todouser");
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const local = JSON.parse(localStorage.getItem("todouser"));
        if (local) {
            checkUserStatus(local.email);
        } else {
            localStorage.removeItem("todouser");
            navigate("/login");
        }
    }, [])

    return (
        isLoggedIn ? children : "..loading"
    )
}

export default ProtectedRoute