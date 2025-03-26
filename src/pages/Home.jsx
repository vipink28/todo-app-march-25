import React from 'react';
import { Link, Outlet } from 'react-router';
import illustration from '../assets/illustration.png';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <div className='flex h-screen'>
                <div className='w-1/2 flex-col h-full bg-slate-900 p-4 flex justify-center items-center text-white'>
                    <h1 className='text-4xl uppercase text-center'>
                        An App to<br />
                        make your life<br />
                        <span className='text-7xl'>Organised</span>
                    </h1>

                    <img className='max-w-full inline-block mt-6' src={illustration} alt='illustatrion' />
                </div>


                <div className='w-1/2 flex-col h-full p-4 flex justify-center items-center'>

                    <div className='w-1/2 bg-white shadow'>
                        <div className='flex'>
                            <Link to="/login" className='py-3 text-center w-1/2'>Login</Link>
                            <Link to="/register" className='py-3 text-center w-1/2 bg-slate-900 text-white'>Register</Link>
                        </div>
                        <div className='p-4'>
                            <Outlet />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home