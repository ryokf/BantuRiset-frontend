import React from 'react'
import { VscChevronRight } from "react-icons/vsc";

const ButtonNav = () => {
    return (
        <div className='flex items-center text-primary'>
            <div className="text-sm">Selengkapnya</div>
            <div className=""><VscChevronRight /></div>
        </div>
    )
}

export default ButtonNav