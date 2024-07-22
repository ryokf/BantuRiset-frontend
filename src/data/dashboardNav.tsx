// import { AiFillHome } from "react-icons/ai";
// import { GoProjectRoadmap } from "react-icons/go";
// import { FaRegBell,FaRegUser } from "react-icons/fa";
// import { FiPlusCircle } from "react-icons/fi";
// import { MdOutlineLibraryBooks } from "react-icons/md";
// import { FaUsers } from "react-icons/fa6";
import { AiFillHome } from 'react-icons/ai';
import { FiPlusCircle } from 'react-icons/fi';
import { GoProjectRoadmap } from 'react-icons/go';
import {FaRegUser } from 'react-icons/fa';

const dashboardNav = [
    {
        name: "Home",
        href: "/dashboard",
        icon: <AiFillHome size={25}/>,
    },
    {
        name: "Buat Project",
        href: "/project/create",
        icon: <FiPlusCircle size={25}/>,
    },
    {
        name: "Project",
        href: "/project",
        icon: <GoProjectRoadmap size={25}/>,
    },
    // {
    //     name: "Notif",
    //     href: "/notification",
    //     icon: <FaRegBell size={25}/>,
    // },
    {
        name: "Profile",
        href: "/profile",
        icon: <FaRegUser size={25}/>,
    },
    // {
    //     name: "Proposal",
    //     href: "/admin/proposal",
    //     icon: <MdOutlineLibraryBooks size={25}/>,
    // },
    // {
    //     name: "User",
    //     href: "/admin/user",
    //     icon: <FaUsers size={25}/>,
    // },

]

export default dashboardNav