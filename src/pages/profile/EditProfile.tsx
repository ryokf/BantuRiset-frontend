import { Label, TextInput } from "flowbite-react"
import Navbar2 from "../../components/Navbar2"
import Button from "../../components/Button"
import { FaPencil } from "react-icons/fa6";

const EditProfile = () => {
    return (
        <div className="bg-white-secondary">
            <Navbar2 title="Edit profil"></Navbar2>
            <form className="flex max-w-md flex-col gap-4 w-11/12 px-4 py-4 rounded-xl m-auto bg-white my-4 ">
                <div className="rounded-full overflow-hidden flex justify-center items-center w-fit m-auto bg-cover bg-[url('https://flowbite.com/docs/images/blog/image-1.jpg')]">
                    <div className="w-24 aspect-square bg-black/60 flex justify-center items-center">
                        <FaPencil className="text-white"></FaPencil>
                    </div>  
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="text" placeholder="ryo khrisna f" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="text" placeholder="ryo khrisna f" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="text" placeholder="ryo khrisna f" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="text" placeholder="ryo khrisna f" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="text" placeholder="ryo khrisna f" required />
                </div>
                <Button className="mt-2">Simpan</Button>
            </form>
            <div className="h-20"></div>
        </div>
    )
}

export default EditProfile