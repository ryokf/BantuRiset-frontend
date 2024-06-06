import React from 'react'
import { Checkbox, Label, TextInput } from "flowbite-react";
import Button from '../components/Button';

const LoginPage = () => {
    return (
        <div className='h-screen'>
            <Header></Header>
            <Form></Form>
        </div>
    )
}

const Header = () => {
    return (
        <div className='w-full flex flex-col items-center h-1/3 justify-center'>
            <h1 className='text-3xl font-medium mb-2'>Login</h1>
            <p className='text-gray'>Sign in to continue</p>
        </div>
    )
}

const Form = () => {
    return (
        <form className="flex w-10/12 m-auto flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput id="password1" type="password" required />
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label className='font-normal text-gray' htmlFor="remember">Keep me sign in</Label>
            </div>
            <Button className='rounded-lg' color={'dark'}>Submit</Button>
        </form>
    )
}

export default LoginPage