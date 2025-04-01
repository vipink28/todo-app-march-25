import React, { useContext } from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png';
import AuthContext from '../auth/AuthContext';

const Navbar = () => {
    const { user } = useContext(AuthContext)

    return (
        <header className='bg-white py-2'>
            <div className='max-w-5/6 mx-auto px-4'>
                <div className='flex items-center'>
                    <div><img src={logo} /></div>
                    <div className='ms-auto flex items-center gap-4'>
                        <Link className='font-medium text-slate-900 text-lg hover:text-slate-600' to="/">Home</Link>
                        <Link className='font-medium text-slate-900 text-lg hover:text-slate-600' to="/about">About</Link>
                        <Link className='font-medium text-slate-900 text-lg hover:text-slate-600' to="/create-task">Create Task</Link>
                        <Link className='font-medium text-slate-900 text-lg hover:text-slate-600' to="/task-list">
                            Task List
                        </Link>
                        {user &&
                            <Link className='font-medium text-slate-900 text-lg hover:text-slate-600' to="/profile">{user.fullname}</Link>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar