import React, { useContext, useState } from 'react';
import AuthContext from './AuthContext';

const Login = () => {
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState(null);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        login(formData)
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