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
        name: "Fisika",
        desc: `Fisika adalah cabang ilmu pengetahuan alam yang mempelajari sifat dan fenomena alam semesta, mulai dari partikel subatom hingga galaksi besar.`,
        icon: <FaReact size={"100%"} />,
    },
    {
        id: 2,
        name: "Chemistry",
        desc : `Kimia adalah cabang ilmu pengetahuan alam yang mempelajari komposisi, struktur, sifat, dan perubahan materi. Kimia berfokus pada atom dan molekul, serta bagaimana mereka berinteraksi dan bereaksi satu sama lain`,
        icon: <MdOutlineScience size={"100%"} />,
    },
    {
        id: 3,
        name: "Biology",
        desc: `Biologi adalah cabang ilmu pengetahuan alam yang mempelajari kehidupan dan organisme hidup, termasuk struktur, fungsi, pertumbuhan, evolusi, persebaran, dan taksonomi mereka. `,
        icon: <TbDna2 size={"100%"} />,
    },
    {
        id: 4,
        name: "Computer",
        desc: `Ilmu komputer adalah bidang studi yang mempelajari teori, pengembangan, dan aplikasi perangkat lunak serta sistem komputer. `,
        icon: <GoCpu size={"100%"} />,
    },
    {
        id: 5,
        name: "Social",
        desc: `Ilmu sosial adalah cabang ilmu pengetahuan tentang kehidupan sosial. Ilmu ini mencakup berbagai aspek, mulai dari kehidupan sosial hingga kehidupan sosial yang menarik`,
        icon: <FaPeopleGroup size={"100%"} />,
    },
    {
        id: 6,
        name: "Economy",
        desc: `Ilmu ekonomi adalah cabang ilmu pengetahuan tentang kehidupan ekonomi. Ilmu ini mencakup berbagai aspek, mulai dari kehidupan ekonomi hingga kehidupan ekonomi yang menarik`,
        icon: <MdCurrencyExchange size={"100%"} />,
    },
    {
        id: 7,
        name: "Psychology",
        desc: `Ilmu psikologi adalah cabang ilmu pengetahuan tentang kehidupan psikologis. Ilmu ini mencakup berbagai aspek, mulai dari kehidupan psikologis hingga kehidupan psikologis yang menarik`,
        icon: <FaRegSmile size={"100%"} />,
    },
    {
        id: 8,
        name: "Art",
        desc: `Ilmu seni adalah cabang ilmu pengetahuan tentang kehidupan seni. Ilmu ini mencakup berbagai aspek, mulai dari kehidupan seni hingga kehidupan seni yang menarik`,
        icon: <IoIosColorPalette size={"100%"} />,
    },
];

export default category;
