import { Link } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
// import { GoProjectRoadmap } from "react-icons/go";
import { FaRegBell,FaRegUser } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";

const BottomNav = () => {
    const navlink = [
        // {
        //     name: "Home",
        //     href: "/dashboard",
        //     icon: <AiFillHome size={25}/>,
        // },
        // {
        //     name: "Buat Project",
        //     href: "/project/create",
        //     icon: <FiPlusCircle size={25}/>,
        // },
        // {
        //     name: "Project",
        //     href: "/project",
        //     icon: <GoProjectRoadmap size={25}/>,
        // },
        // {
        //     name: "Notif",
        //     href: "/notification",
        //     icon: <FaRegBell size={25}/>,
        // },
        // {
        //     name: "Profile",
        //     href: "/profile",
        //     icon: <FaRegUser size={25}/>,
        // },
        {
            name: "Proposal",
            href: "/admin/proposal",
            icon: <MdOutlineLibraryBooks size={25}/>,
        },
        {
            name: "User",
            href: "/admin/user",
            icon: <FaUsers size={25}/>,
        },

    ]

    console.log(window.location.pathname)

    return (
        <div className='fixed border-2 bottom-0 bg-white w-full rounded-xl py-2'>
            <div className={`grid grid-cols-${navlink.length} my-1`}>
                {
                    navlink.map((item) => {
                        return (
                            <Link to={item.href} key={item.name} className={`${item.href == window.location.pathname ? 'text-black' : 'text-gray'} flex gap-0.5 flex-col justify-center items-center`}>
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