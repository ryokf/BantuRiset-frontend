import { GrAppsRounded } from "react-icons/gr";
import { FaBook, FaQuestionCircle } from "react-icons/fa";

const navlink = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: <GrAppsRounded size={30}/>,
        color : "gradient-blue"
    },
    {
        name: "About",
        href: "/about",
        icon: <FaBook size={23}/>,
        color : "gradient-purple"
    },
    {
        name: "FAQ",
        href: "/faq",
        icon: <FaQuestionCircle size={23}/>,
        color : "gradient-pink"
    },
]

export default navlink