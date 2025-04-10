import React, { useContext, useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskContext from '../context/TaskContext';
import { formatDate } from '../utils';

const CreateTask = () => {
    const { latestTask, recentTasks } = useContext(TaskContext);
    const [isUpdate, setIsUpdate] = useState(false);

    return (
        <div className='min-h-screen'>
            <div className='flex h-screen'>
                <div className='w-1/2 flex-col h-full bg-slate-900 p-4 flex justify-center items-center text-white'>
                    <div className='w-1/2'>
                        <TaskForm isUpdate={isUpdate} setIsUpdate={setIsUpdate} data={latestTask} />
                    </div>
                </div>


                <div className='w-1/2 flex-col h-full p-4 flex justify-center items-center'>

                    <div className='w-3/4 bg-slate-900 shadow text-white p-4'>
                        {
                            latestTask ?
                                <div className='flex flex-col gap-4'>
                                    <div className='flex items-center justify-between'>
                                        <h3 className='text-2xl font-semibold'>Latest Task</h3>
                                        <button className='px-8 py-3 bg-blue-400 text-slate-900 rounded-lg cursor-pointer' onClick={() => setIsUpdate(true)}>Edit</button>
                                    </div>

                                    <div className='flex flex-col gap-3'>
                                        <h1>{latestTask.title}</h1>
                                        <p>{latestTask.description}</p>
                                        <div className='flex justify-between items-center'>
                                            <p>Modified On: {formatDate(latestTask.modifiedon)}</p>
                                            <p>Due Date: {formatDate(latestTask.duedate)}</p>
                                        </div>
                                    </div>

                                </div>
                                :
                                <p>No Tasks, Please add a task</p>
                        }
                    </div>

                    <div className='w-3/4 mt-5 bg-slate-900 shadow text-white p-4'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTask