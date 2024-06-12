import { Label, TextInput } from "flowbite-react"
import Navbar2 from "../../components/Navbar2"
import Button from "../../components/Button"
const EditPassword = () => {
    return (
        <div className="bg-white-secondary min-h-screen">
            <Navbar2 title="Edit Password"></Navbar2>
            <form className="flex max-w-md flex-col gap-4 w-11/12 px-4 py-4 rounded-xl m-auto bg-white my-4 ">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Password lama" />
                    </div>
                    <TextInput id="email1" type="text" placeholder="" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Password baru" />
                    </div>
                    <TextInput id="email1" type="text" placeholder="" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Konfirmasi Password baru" />
                    </div>
                    <TextInput id="email1" type="text" placeholder="" required />
                </div>
                <Button className="mt-2">Simpan</Button>
            </form>
            <div className="h-20"></div>
        </div>
    )
}

export default EditPassword