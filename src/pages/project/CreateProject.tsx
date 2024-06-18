import { Label, TextInput } from "flowbite-react"
import DashboardTemplate from "../../templates/DashboardTemplate"
import Button from "../../components/Button"

const CreateProject = () => {
    return (
        <DashboardTemplate title="Buat Proyek">
            <h1 className="text-2xl font-medium text-center m-4">Buat Rancangan Proyek Anda</h1>
            <form className="flex max-w-md flex-col gap-4 w-11/12 m-auto !my-0">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="text" placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="text" placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="text" placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="text" placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="text" placeholder="name@flowbite.com" required />
                </div>
                <Button>Submit</Button>
            </form>
        </DashboardTemplate>
    )
}

export default CreateProject