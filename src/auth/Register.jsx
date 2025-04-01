import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(null);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
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
    return (
        <div className='text-slate-900'>

            <div className='mb-4'>
                <label className='font-medium block mb-3'>Full Name</label>
                <input type='text' name='fullname' className='block rounded-sm p-2 w-full border border-gray-300' onChange={handleChange} />
            </div>
            <div className='mb-4'>
                <label className='font-medium block mb-3'>Email</label>
                <input type='text' name='email' className='block rounded-sm p-2 w-full border border-gray-300' onChange={handleChange} />
            </div>
            <div className='mb-4'>
                <label className='font-medium block mb-3'>Password</label>
                <input type='password' name='password' className='block rounded-sm p-2 w-full border border-gray-300' onChange={handleChange} />
            </div>
            <button onClick={handleSubmit} className='px-8 py-3 bg-slate-900 text-white rounded-lg cursor-pointer'>Register</button>

        </div>
    )
}

export default Register