import { Link } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import { GoProjectRoadmap } from "react-icons/go";
import { FaRegBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

const BottomNav = () => {
    const navlink = [
        {
            name: "Home",
            href: "/dashboard",
            icon: <AiFillHome size={25}/>,
        },
        {
            name: "Project",
            href: "/project",
            icon: <GoProjectRoadmap size={25}/>,
        },
        {
            name: "Notif",
            href: "/notification",
            icon: <FaRegBell size={25}/>,
        },
        {
            name: "Profile",
            href: "/profile",
            icon: <FaRegUser size={25}/>,
        },
    ]

    console.log(window.location.pathname)

    return (
        <div className='fixed border-2 bottom-0 bg-white w-full rounded-xl py-2'>
            <div className="grid grid-cols-4 my-1">
                {
                    navlink.map((item, index) => {
                        return (
                            <Link to={item.href} key={index} className={`${item.href == window.location.pathname ? 'text-black' : 'text-gray'} flex gap-0.5 flex-col justify-center items-center`}>
                                {item.icon}
                                <h1 className='text-xs font-semibold'>{item.name}</h1>
                            </Link>
                        )
                    })
                }

        
            </div>
        </div>
    )
}

export default BottomNav