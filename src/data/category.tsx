import { FaReact } from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";
import { TbDna2 } from "react-icons/tb";
import { GoCpu } from "react-icons/go";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdCurrencyExchange } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";

const category = [
    {
        id: 1,
        name: "Physics",
        link: "/category/physics",
        icon: <FaReact size={30} />,
    },
    {
        id: 2,
        name: "Chemistry",
        link: "/category/chemistry",
        icon: <MdOutlineScience size={30} />,
    },
    {
        id: 3,
        name: "Biology",
        link: "/category/biology",
        icon: <TbDna2 size={30} />,
    },
    {
        id: 4,
        name: "Computer",
        link: "/category/computer",
        icon: <GoCpu size={30} />,
    },
    {
        id: 5,
        name: "Social",
        link: "/category/computer",
        icon: <FaPeopleGroup size={30} />,
    },
    {
        id: 6,
        name: "Economy",
        link: "/category/computer",
        icon: <MdCurrencyExchange size={30} />,
    },
    {
        id: 7,
        name: "Psychology",
        link: "/category/computer",
        icon: <FaRegSmile size={30} />,
    },
    {
        id: 8,
        name: "Art",
        link: "/category/computer",
        icon: <IoIosColorPalette size={30} />,
    },
];

export default category;
