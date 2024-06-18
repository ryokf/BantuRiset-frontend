import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

function DeleteConfirm() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <button onClick={() => setOpenModal(true)} className="flex my-4 flex-col justify-center items-center gradient-red w-12 rounded-xl text-white aspect-square m-auto">
                <FaRegTrashAlt size={20} />
            </button>
            <Modal className='*:!top-52 !overflow-hidden' show={openModal} size="sm" onClose={() => setOpenModal(false)} popup>
                <Modal.Body>
                    <div className="text-center pt-6 pb-2">
                        <h3 className="mb-5 text-sm font-normal dark:text-gray-400">
                            <span className=''>
                                Yakin ingin menghapus proyek :
                            </span>
                            <br />
                            <span className="text-primary">
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorem unde"
                            </span>
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="gray" onClick={() => setOpenModal(false)}>
                                tidak, batal
                            </Button>
                            <Button color="failure" onClick={() => setOpenModal(false)}>
                                iya, hapus
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default DeleteConfirm