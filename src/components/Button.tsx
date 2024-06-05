import React from 'react'
import { Button as FlowbiteButton } from 'flowbite-react';
import { buttonTheme } from '../themes/button';

const Button = ({children}: {children: React.ReactNode}) => {
    return (
        <FlowbiteButton color={'primary'} className='rounded-full px-4' theme={buttonTheme}>{children}</FlowbiteButton>
    )
}

export default Button