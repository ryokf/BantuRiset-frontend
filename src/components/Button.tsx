import React from 'react'
import { Button as FlowbiteButton } from 'flowbite-react';
import { buttonTheme } from '../themes/button';

const Button = ({children, color = 'primary', size = 'responsive', href , className, type}: {children: React.ReactNode, color?: string, size?: string, href?: string, className?: string, type?: "button" | "submit" | "reset"}) => {
    return (
        <FlowbiteButton type={type} href={href} color={color} size={size} className={`rounded-full px-4 ${className}`} theme={buttonTheme}>{children}</FlowbiteButton>
    )
}

export default Button