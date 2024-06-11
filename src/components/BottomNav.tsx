import { Link } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import { GoProjectRoadmap } from "react-icons/go";
import { FaRegBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

const BottomNav = () => {
    return (
        <div className='fixed border-2 bottom-0 bg-white w-full rounded-xl py-2'>
            <div className="grid grid-cols-4 my-1">
                <Link to={"/donate"} className='flex gap-0.5 flex-col justify-center items-center'>
                    <AiFillHome size={25}></AiFillHome>
                    <h1 className='text-xs font-semibold'>Home</h1>
                </Link>
                <Link to={"/donate"} className='flex gap-0.5 text-gray flex-col justify-center items-center'>
                    <GoProjectRoadmap size={25}></GoProjectRoadmap>
                    <h1 className='text-xs font-semibol'>project</h1>
                </Link>
                <Link to={"/donate"} className='flex gap-0.5 text-gray flex-col justify-center items-center'>
                    <FaRegBell size={25}></FaRegBell>
                    <h1 className='text-xs font-semibod'>Notif</h1>
                </Link>
                <Link to={"/donate"} className='flex gap-0.5 text-gray flex-col justify-center items-center'>
                    <FaRegUser size={25}></FaRegUser>
                    <h1 className='text-xs font-semibld'>Profile</h1>
                </Link>
        
            </div>
        </div>
    )
}

export default BottomNav