import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className='max-w-5/6 mx-auto px-4'>
            <div className='flex'>
                <div className='w-4/12 pe-4'>
                    <div className='flex flex-col'>
                        <Link to="/admin/users">Users List</Link>
                        <Link to="/admin/tasks">Tasks List</Link>
                    </div>
                </div>
                <div className='w-8/12 ps-4'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard