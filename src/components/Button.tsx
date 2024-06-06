import React from 'react'
import { Button as FlowbiteButton } from 'flowbite-react';
import { buttonTheme } from '../themes/button';

const Button = ({children, color = 'primary', className}: {children: React.ReactNode, color?: string, className?: string}) => {
    return (
        <FlowbiteButton color={color} size={'responsive'} className={`rounded-full px-4 ${className}`} theme={buttonTheme}>{children}</FlowbiteButton>
    )
}

export default Button