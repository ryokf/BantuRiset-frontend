import { Drawer } from "flowbite-react";
import { useState } from "react";
import DeleteConfirm from "./DeleteConfirm";
import { FaPencil } from "react-icons/fa6";
import { IoMenuOutline, IoShareSocial } from "react-icons/io5";
import drawerTheme from "../themes/drawer";

const ProjectAction = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);
    return (
        <>
            <div className="flex items-center justify-center !bg-white !p-0 !m-0">
                <button className='w-6 ' onClick={() => setIsOpen(true)}><IoMenuOutline size={"100%"}></IoMenuOutline></button>
            </div>
            <Drawer theme={drawerTheme} className='!h-52 !w-20 top-20' position='right' open={isOpen} onClose={handleClose}>
                <Drawer.Header title="Drawer" />
                <Drawer.Items className='!rounded-xl'>
                    <div className="flex flex-col my-4 justify-center items-center gradient-amber w-12 rounded-xl text-white aspect-square m-auto">
                        <FaPencil size={20} />
                    </div>
                    <DeleteConfirm></DeleteConfirm>
                    <div className="flex flex-col justify-center items-center gradient-blue w-12 rounded-xl text-white aspect-square m-auto">
                        <IoShareSocial size={20} />
                    </div>
                </Drawer.Items>
            </Drawer>
        </>
    )
}

export default ProjectAction