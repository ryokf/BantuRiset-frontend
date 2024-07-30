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
import roleAuth from '../helper/roleAuth';
// import { MdOutlineLibraryBooks } from 'react-icons/md';

const admin = [
    {
        name: "Proposal",
        href: "/dashboard",
        icon: <GoProjectRoadmap size={25}/>,
    },
    {
        name: "User",
        href: "/admin/user",
        icon: <FaRegUser size={25}/>,
    },
]

const reseacher = [
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
    {
        name: "Profile",
        href: "/profile",
        icon: <FaRegUser size={25}/>,
    },
]

const donatur = [
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
        name: "Profile",
        href: "/profile",
        icon: <FaRegUser size={25}/>,
    },
]

const dashboardNav = () => {
    const role = roleAuth()

    if (role.role_id == 1) {
        return admin
    } else if (role.role_id == 2) {
        return reseacher
    } else if (role.role_id == 3) {
        return donatur
    } else {
        return <div>nguaworr</div>
    }
}

export default dashboardNav