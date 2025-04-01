import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(null);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async () => {
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
    return (
        <div className='text-slate-900'>
            <div className='mb-4'>
                <label className='font-medium block mb-3'>Email</label>
                <input type='text' name='email' className='block rounded-sm p-2 w-full border border-gray-300' onChange={handleChange} />
            </div>
            <div className='mb-4'>
                <label className='font-medium block mb-3'>Password</label>
                <input type='password' name='password' className='block rounded-sm p-2 w-full border border-gray-300' onChange={handleChange} />
            </div>
            <button onClick={handleSubmit} className='px-8 py-3 bg-slate-900 text-white rounded-lg cursor-pointer'>Login</button>

        </div>
    )
}

export default Login