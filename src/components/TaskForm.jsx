import React, { useContext, useState } from 'react';
import AuthContext from '../auth/AuthContext';
import TaskContext from '../context/TaskContext';

const TaskForm = () => {
    const { user } = useContext(AuthContext);
    const { addTask } = useContext(TaskContext);
    const [formData, setFormData] = useState(null);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
            userid: user.id,
            modifiedon: Date()
        }))
    }

    return (
        <div className='py-2'>
            <h3 className='text-2xl mb-4'>Create Task</h3>
            <div className='bg-white text-slate-950 shadow p-4'>
                <div className='mb-4'>
                    <label className='font-medium block mb-3'>Title</label>
                    <input type='text' name='title' className='block rounded-sm p-2 w-full border border-gray-300' onChange={handleChange} />
                </div>
                <div className='mb-4'>
                    <label className='font-medium block mb-3'>Description</label>
                    <textarea name='description' className='block rounded-sm p-2 w-full border h-28 border-gray-300' onChange={handleChange}></textarea>
                </div>

                <div className='mb-4'>
                    <label className='font-medium block mb-3'>Due Date</label>
                    <input type='datetime-local' name='duedate' className='block rounded-sm p-2 w-full border border-gray-300' onChange={handleChange} />
                </div>

                <button onClick={() => addTask(formData)} className='px-8 py-3 bg-slate-900 text-white rounded-lg cursor-pointer'>Add Task</button>
            </div>
        </div>
    )
}

export default TaskForm