import AuthTemplate from '../../templates/AuthTemplate'
import { Label, TextInput } from 'flowbite-react'
import { HiKey, HiLocationMarker, HiMail, HiPhone, HiUser } from 'react-icons/hi'
import Button from '../../components/Button'
import register from '../../services/Auth/register'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const RegisterPage = () => {
    const { role } = useParams()

    let roleInfo;
    if (role == "1") {
        roleInfo = "donatur"
    } else if (role == "2") {
        roleInfo = "peneliti"
    } else {
        return <div>nguaworr</div>
    }

    const [data, setData] = useState({
        fname: "",
        email: "",
        role: "",
        password: "",
        phone: "",
        institute: "",
        instituteAddress: "",
        postalCode: "",
    });

    const [isError, setIsError] = useState(false)

    const updatedData = {
        ...data,
        role: roleInfo
    }

    const registerHandle = async (e: ({ preventDefault: () => void })) => {
        e.preventDefault()
        try {
            const res = await register(updatedData.fname, updatedData.email, updatedData.role, updatedData.password, updatedData.phone, updatedData.institute, updatedData.instituteAddress, updatedData.postalCode)

            if (await res) {
                alert("registrasi sukses. Mohon tunggu verifikasi akun dari admin")
                window.location.href = '/'
            } else {
                setIsError(true)
            }
        } catch (e) {
            console.log(e)
        }
    }

    console.log(data)

    return (
        <div className="mt-12 max-w-2xl m-auto">
            <AuthTemplate title="Buat akun anda" subtitle="Silahkan isi data diri anda untuk melanjutkan" footer="Already have an account? ">
                <form onSubmit={registerHandle} className="flex w-10/12 m-auto flex-col gap-4 my-10">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your name" />
                        </div>
                        <TextInput id="name" type="text" placeholder="ryo khrisna f" required onChange={(e) => setData({ ...data, fname: e.target.value })} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Email" />
                        </div>
                        <TextInput id="email" type="email" placeholder="name@banturiset.com" required onChange={(e) => setData({ ...data, email: e.target.value })} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Password" />
                        </div>
                        <TextInput id="password" type="password" placeholder="********" required onChange={(e) => setData({ ...data, password: e.target.value })} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Phone" />
                        </div>
                        <TextInput id="phone" type="text" placeholder="081234567890" required onChange={(e) => setData({ ...data, phone: e.target.value })} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Institute" />
                        </div>
                        <TextInput id="Institute" type="text" placeholder="Institut Teknologi Bandung" required onChange={(e) => setData({ ...data, institute: e.target.value })} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Institute Address" />
                        </div>
                        <TextInput id="InstituteAddress" type="text" placeholder="Jl. Pahlawan No. 1 Bandung" required onChange={(e) => setData({ ...data, instituteAddress: e.target.value })} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Institute postal code" />
                        </div>
                        <TextInput id="postal" type="text" placeholder="50712" required onChange={(e) => setData({ ...data, postalCode: e.target.value })} />
                    </div>

                    <ul className="text-sm ">
                        <li className="text-red-500">{isError ? 'pastikan email dan nomer telepon belum terdaftar' : ''}</li>
                        <li className="text-red-500">{isError ? 'pastikan nama lebih dari 8 karakter' : ''}</li>
                    </ul>

                    <Button type="submit" color='dark' className='rounded-lg my-4'>Register</Button>
                </form>
            </AuthTemplate>
        </div>
    )
}

export default RegisterPage