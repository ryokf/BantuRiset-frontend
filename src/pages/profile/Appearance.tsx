"use client";
import { useState } from 'react'
import Navbar2 from '../../components/Navbar2';
import { useThemeMode } from 'flowbite-react';

const Appearance = () => {
    // const darkMode = localStorage.getItem('flowbite-theme-mode') === 'dark';
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
        // localStorage.setItem('flowbite-theme-mode', isToggled ? 'light' : 'dark');
    };

    useThemeMode();
    return (
        <div className='bg-white-secondary min-h-screen'>
            <Navbar2 title='Tampilan'></Navbar2>
            <div className="w-11/12 bg-white my-4 p-4 m-auto rounded-xl flex justify-between">
                <h1 className='text-sm'>Aktifkan mode gelap</h1>
                <button
                    onClick={handleToggle}
                    className={`w-14 h-7 flex items-center rounded-full p-1 duration-300 ease-in-out ${isToggled ? 'bg-primary' : 'bg-gray-300'}`}
                >
                    <div
                        className={`bg-white w-8 border aspect-square rounded-full shadow-md transform duration-300 ease-in-out ${isToggled ? 'translate-x-5' : '-translate-x-1'}`}
                    >
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Appearance