import { X } from 'lucide-react'
import React from 'react'

const Popup = ({ setShowPopup }) => {
    return (
        <div className='w-screen h-screen bg-slate-950/50 fixed left-0 top-0 z-50'>
            <div className='absolute w-full text-white max-w-2xl bg-slate-950 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-5'>
                <div className='flex items-center justify-end'>
                    <button onClick={() => setShowPopup(false)} className='cursor-pointer p-2'>
                        <X />
                    </button>
                </div>

                <div className='py-5'>
                    Content Area
                </div>
            </div>
        </div>
    )
}

export default Popup