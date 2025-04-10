import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../auth/AuthContext';
import TaskContext from '../context/TaskContext';

const TaskForm = ({ isUpdate, setIsUpdate, data }) => {
    const init = {
        title: "",
        description: "",
        duedate: ""
    }
    const { user } = useContext(AuthContext);
    const { addTask, updateTask } = useContext(TaskContext);
    const [formData, setFormData] = useState(init);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
            userid: user.id,
            modifiedon: Date()
        }))
    }

    useEffect(() => {
        if (isUpdate) {
            setFormData(data);
        } else {
            setFormData(init);
        }
    }, [isUpdate])


    return (
        <div className='py-2'>
            <h3 className='text-2xl mb-4'>{isUpdate ? "Update Task" : "Create Task"}</h3>
            <div className='bg-white text-slate-950 shadow p-4'>
                <div className='mb-4'>
                    <label className='font-medium block mb-3'>Title</label>
                    <input type='text' name='title' className='block rounded-sm p-2 w-full border border-gray-300' value={formData.title} onChange={handleChange} />
                </div>
                <div className='mb-4'>
                    <label className='font-medium block mb-3'>Description</label>
                    <textarea name='description' className='block rounded-sm p-2 w-full border h-28 border-gray-300' onChange={handleChange} value={formData.description}></textarea>
                </div>

                <div className='mb-4'>
                    <label className='font-medium block mb-3'>Due Date</label>
                    <input type='datetime-local' name='duedate' className='block rounded-sm p-2 w-full border border-gray-300' value={formData.duedate} onChange={handleChange} />
                </div>
                {
                    isUpdate ?
                        <>
                            <button className='px-8 py-3 bg-slate-900 text-white rounded-lg cursor-pointe me-3' onClick={() => updateTask(formData)}>Update Task</button>
                            <button onClick={() => { setIsUpdate(false) }} className='px-8 py-3 bg-yellow-400 text-slate-900 rounded-lg cursor-pointer'>Cancel</button>
                        </>
                        :
                        <button onClick={() => addTask(formData)} className='px-8 py-3 bg-slate-900 text-white rounded-lg cursor-pointer'>Add Task</button>
                }
            </div>
        </div>
    )
}

export default TaskForm