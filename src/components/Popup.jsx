import { X } from 'lucide-react';
import React, { useContext, useRef } from 'react';
import TaskContext from '../context/TaskContext';
import TaskForm from "./TaskForm";

const Popup = ({ setShowPopup, task }) => {
    const { deleteTask } = useContext(TaskContext);
    const { reqType, data } = task;
    const closeBtn = useRef(null);
    return (
        <div className='w-screen h-screen bg-slate-950/50 fixed left-0 top-0 z-50'>
            <div className='absolute w-full text-white max-w-2xl bg-slate-950 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-5'>
                <div className='flex items-center justify-end'>
                    <button ref={closeBtn} onClick={() => setShowPopup(false)} className='cursor-pointer p-2'>
                        <X />
                    </button>
                </div>
                <div className='py-5'>
                    {
                        reqType === "view" ?
                            <div>
                                <h1>{data.title}</h1>
                            </div>
                            : reqType === "edit" ?
                                <TaskForm isUpdate={true} data={data} closeBtn={closeBtn} isPopup={true} />
                                : <div>
                                    <p>Are you sure?</p>
                                    <div className='flex items-center'>
                                        <button onClick={() => deleteTask(data.id)}>Yes</button>
                                        <button onClick={() => setShowPopup(false)}>No</button>
                                    </div>
                                </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Popup