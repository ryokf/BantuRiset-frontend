import { Navbar as FlowbiteNavbar } from 'flowbite-react';
import { nabarTheme } from '../themes/navbar';
import { IoChevronBackOutline } from "react-icons/io5";
const Navbar2 = ({title, actionButton, className} :{title?:string, actionButton?:React.ReactNode, className?:string}) => {
    return (
        <FlowbiteNavbar theme={nabarTheme} fluid rounded className={`!w-full shadow !py-4 !px-4 ${className}`}>
            <div className="grid grid-cols-3 w-full">
                <button className="flex items-center  text-primary" onClick={() => window.history.back()}>
                    <IoChevronBackOutline size={20}></IoChevronBackOutline>
                    <p className='text-sm'>Kembali</p>
                </button>
                <div className="text-center font-medium">{title}</div>
                <div className="flex justify-end  text-primary">
                    {actionButton}
                </div>
            </div>
        </FlowbiteNavbar>
    )
}

export default Navbar2