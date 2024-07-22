import { Checkbox, Label, TextInput } from "flowbite-react";
import Button from '../../components/Button';
import { HiKey, HiMail } from "react-icons/hi";
import AuthTemplate from '../../templates/AuthTemplate';
import { useState } from "react";
import login from "../../services/Auth/login";

const LoginPage = () => {
    const [data, setData] = useState({email : '', password : ''})

    console.log(data)

    const loginHandle = async (e : ({ preventDefault: () => void })) => {
        e.preventDefault()
        console.log('halo')
        try {
            const res = await login(data.email, data.password)
            console.log('berhasil')
            console.log(await res)
            // window.location.href = res ? "/" : "/login"
        } catch (e) {
            console.log('error')
            console.log(e)
        }
    }

    return (
        <div className='h-screen max-w-2xl m-auto '>
            <AuthTemplate title="Login" subtitle="Enter your credentials to access your account" footer="Don't have an account? ">
                <form onSubmit={loginHandle} className="flex w-10/12 m-auto flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Email" />
                        </div>
                        <TextInput onChange={(e) => setData({...data, email : e.target.value})} icon={HiMail} id="email1" type="text" placeholder="name@banturiset.com" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Password" />
                        </div>
                        <TextInput onChange={(e) => setData({...data, password : e.target.value})} icon={HiKey} id="password1" type="password" placeholder="•••••••••" required />
                    </div>
                    <div className="flex items-center gap-2 my-1">
                        <Checkbox id="remember" />
                        <Label className='font-normal text-gray' htmlFor="remember">Keep me sign in</Label>
                    </div>
                    <Button type="submit" className='rounded-lg' size="md" color={'dark'}>Submit</Button>
                </form>
            </AuthTemplate>
        </div>
    )
}


export default LoginPage