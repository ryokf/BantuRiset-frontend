import AuthTemplate from '../../templates/AuthTemplate'
import { Label, TextInput } from 'flowbite-react'
import { HiKey, HiLocationMarker, HiMail, HiPhone, HiUser } from 'react-icons/hi'
import Button from '../../components/Button'

const RegisterPage = () => {
    return (
        <div className="mt-12">
            <AuthTemplate title="Buat akun anda" subtitle="Silahkan isi data diri anda untuk melanjutkan" footer="Already have an account? ">
                <form className="flex w-10/12 m-auto flex-col gap-4 my-10">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Email" />
                        </div>
                        <TextInput icon={HiMail} id="email1" type="email" placeholder="name@banturiset.com" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Password" />
                        </div>
                        <TextInput icon={HiKey} id="password1" type="password" placeholder="•••••••••" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password2" value="Confirm password" />
                        </div>
                        <TextInput icon={HiKey} id="password2" type="password" placeholder="•••••••••" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Name" />
                        </div>
                        <TextInput icon={HiUser} id="name" type="text" placeholder="John" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="address" value="Address" />
                        </div>
                        <TextInput icon={HiLocationMarker} id="address" type="text" placeholder="Jl. Raya" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="phone" value="Phone" />
                        </div>
                        <TextInput icon={HiPhone} id="phone" type="text" placeholder="08123456789" required />
                    </div>
                    <Button color='dark' className='rounded-lg my-4'>Register</Button>
                </form>
            </AuthTemplate>
        </div>
    )
}

export default RegisterPage