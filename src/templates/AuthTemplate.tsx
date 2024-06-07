import React from 'react'

const AuthTemplate = ({ children, title, subtitle, footer }: { children: React.ReactNode, title: string, subtitle: string, footer: string }) => {
    return (
        <>
            <Header title={title} subtitle={subtitle} />
                {children}
            <Footer footer={footer}/>
        </>
    )
}


const Header = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <div className='w-full flex flex-col items-center h-1/3 justify-center'>
            <h1 className='text-3xl font-medium mb-2'>{title}</h1>
            <p className='text-gray max-w-60 text-center'>{subtitle}</p>
        </div>
    )
}

const Footer = ({ footer }: { footer: string }) => {
    return (
        <div className='w-full flex flex-col items-center h-1/3 justify-end'>
            <p className='text-black text-sm mb-6'>
                {footer}<a href="/register" className="text-primary"> sign up</a>
            </p>
        </div>
    )
}

export default AuthTemplate