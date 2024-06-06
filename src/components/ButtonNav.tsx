import { VscChevronRight } from "react-icons/vsc";

const ButtonNav = () => {
    return (
        <a href='/category' className='flex items-center text-primary'>
            <div className="text-sm lg:text-base">Selengkapnya</div>
            <div><VscChevronRight className='lg:text-xl' /></div>
        </a>
    )
}

export default ButtonNav