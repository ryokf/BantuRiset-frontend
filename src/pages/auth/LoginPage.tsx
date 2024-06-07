import { Checkbox, Label, TextInput } from "flowbite-react";
import Button from '../../components/Button';
import { HiKey, HiMail } from "react-icons/hi";
import AuthTemplate from '../../templates/AuthTemplate';

const LoginPage = () => {
    return (
        <div className='h-screen'>
            <AuthTemplate title="Login" subtitle="Enter your credentials to access your account" footer="Don't have an account? ">
                <form className="flex w-10/12 m-auto flex-col gap-4">
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
                    <div className="flex items-center gap-2 my-1">
                        <Checkbox id="remember" />
                        <Label className='font-normal text-gray' htmlFor="remember">Keep me sign in</Label>
                    </div>
                    <Button className='rounded-lg' color={'dark'}>Submit</Button>
                </form>
            </AuthTemplate>
        </div>
    )
}


export default LoginPage