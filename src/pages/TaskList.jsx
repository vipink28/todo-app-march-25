import { Eye, FilePenLine, Trash } from 'lucide-react';
import React, { useContext, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from '../components/Popup';
import TaskContext from '../context/TaskContext';

const reducer = (state, action) => {
    switch (action.type) {
        case "VIEW": return { reqType: "view", data: action.payload }
        case "EDIT": return { reqType: "edit", data: action.payload }
        case "DELETE": return { reqType: "delete", data: action.payload }
        default: return state;
    }
}

const TaskList = () => {
    const { allTasks } = useContext(TaskContext);
    const [showPopup, setShowPopup] = useState(false);
    const [state, dispatch] = useReducer(reducer, null);


    return (
        <div className='py-10'>
            <div className='max-w-7xl mx-auto bg-slate-950 p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-white font-semibold'>Tasks List</h3>
                    <Link className='px-8 py-3 bg-blue-400 text-slate-900 rounded-lg cursor-pointer' to="/create-task">Create Task</Link>
                </div>


                <div className='py-5'>
                    <input type='text' className='w-full block h-9 bg-white p-2' placeholder='search task' />
                </div>

                <div className='text-white'>
                    <div className='flex items-center mb-3 bg-slate-800 p-3 rounded'>
                        <div className='w-1/12'>Sr.No.</div>
                        <div className='w-3/12'>Title</div>
                        <div className='w-4/12'>Description</div>
                        <div className='w-2/12'>Due Date</div>
                        <div className='w-2/12'>Actions</div>
                    </div>
                    {
                        allTasks ?
                            allTasks.map((task) => (
                                <div key={task.id} className='flex items-center mb-3 bg-slate-800 p-3 rounded'>
                                    <div className='w-1/12'>{task.id}</div>
                                    <div className='w-3/12'>{task.title}</div>
                                    <div className='w-4/12'>{task.description}</div>
                                    <div className='w-2/12'>{task.duedate}</div>
                                    <div className='w-2/12 flex items-center'>
                                        <span className='px-3' onClick={() => {
                                            setShowPopup(true)
                                            dispatch({ type: "VIEW", payload: task })
                                        }}>
                                            <Eye />
                                        </span>
                                        <span className='px-3' onClick={() => {
                                            setShowPopup(true)
                                            dispatch({ type: "EDIT", payload: task })
                                        }}>
                                            <FilePenLine />
                                        </span>
                                        <span className='px-3' onClick={() => {
                                            setShowPopup(true)
                                            dispatch({ type: "DELETE", payload: task })
                                        }}>
                                            <Trash />
                                        </span>
                                    </div>
                                </div>
                            ))
                            :
                            <p>No tasks to show</p>
                    }

                </div>
            </div>
            {
                showPopup &&
                <Popup setShowPopup={setShowPopup} task={state} />
            }
        </div>
    )
}

export default TaskList