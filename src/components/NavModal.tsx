
"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import navModal from "../themes/NavModal";
import { RxCross2 } from "react-icons/rx";
import navlink from "../data/navlink";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

export function NavModal() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            {
                !openModal &&
                <div className="md:hidden fixed z-50 bottom-10 right-5">
                    <Button className="w-14 h-14 rounded-full flex justify-center items-center bg-primary" onClick={() => setOpenModal(true)}><IoMenu size={30} /></Button>
                </div>
            }
            {
                openModal &&
                <div className="fixed z-[999] bottom-10 right-5">
                    <Button className="w-14 h-14 rounded-full flex justify-center items-center bg-primary" onClick={() => setOpenModal(false)}><RxCross2 size={30} /></Button>
                </div>
            }
            <Modal
                theme={navModal}
                dismissible
                show={openModal}
                position={"bottom-right"}
                onClose={() => setOpenModal(false)}
            >
                <Modal.Body>
                    <div className="space-y-6 p-6">
                        {
                            navlink.map((item) => {
                                return (
                                    <Link to={item.href} key={item.color} className="flex items-center gap-4">
                                        <div className={`${item.color} w-10 h-10 rounded-xl flex justify-center items-center text-white`}>{item.icon}</div>
                                        <h1 className="text-xl">{item.name}</h1>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
