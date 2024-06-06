
"use client";

import { Avatar,Navbar as FlowbiteNavbar } from "flowbite-react";
import { nabarTheme } from "../themes/navbar";

function Navbar() {

    const link = [
        {
            name: "Dashboard",
            href: "#",
        },
        {
            name: "About",
            href: "#",
        },
        {
            name: "FAQ",
            href: "#",
        },
    ]

    return (
        <FlowbiteNavbar theme={nabarTheme} fluid rounded className="w-full shadow">
            <FlowbiteNavbar.Brand href="https://flowbite-react.com">
                <img src="./logo.svg" className="mr-3 h-8 sm:h-9" alt="Flowbite React Logo" />
                {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">BantuRiset</span> */}
            </FlowbiteNavbar.Brand>
            <div className="md:flex md:order-2">
                <Avatar className="" alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            </div>
            <FlowbiteNavbar.Collapse>
                {link.map((link) => (
                    <FlowbiteNavbar.Link  key={link.name} href={link.href}>{link.name}</FlowbiteNavbar.Link>
                ))}
            </FlowbiteNavbar.Collapse>
        </FlowbiteNavbar>
    );
}

export default Navbar
