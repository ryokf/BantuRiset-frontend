
"use client";

import { Footer as FlowbiteFooter } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import footerTheme from "../themes/footer";

export function Footer() {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <FlowbiteFooter container theme={footerTheme}>
            <div className="w-full relative bottom-0">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className="flex my-4">
                        <FlowbiteFooter.Brand
                            href="https://flowbite.com"
                            src="./logo.png"
                            alt="Flowbite Logo"
                        />
                        <div className="">
                            <h1 className="text-2xl font-bold">BantuRiset</h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <FlowbiteFooter.Title title="menu" />
                            <FlowbiteFooter.LinkGroup col>
                                <FlowbiteFooter.Link href="#">dashboard</FlowbiteFooter.Link>
                                <FlowbiteFooter.Link href="#">about</FlowbiteFooter.Link>
                                <FlowbiteFooter.Link href="#">faq</FlowbiteFooter.Link>
                            </FlowbiteFooter.LinkGroup>
                        </div>
                        <div>
                            <FlowbiteFooter.Title title="Follow us" />
                            <FlowbiteFooter.LinkGroup col>
                                <FlowbiteFooter.Link href="#">Instagram</FlowbiteFooter.Link>
                                <FlowbiteFooter.Link href="#">Twitter</FlowbiteFooter.Link>
                            </FlowbiteFooter.LinkGroup>
                        </div>
                        <div>
                            <FlowbiteFooter.Title title="Legal" />
                            <FlowbiteFooter.LinkGroup col>
                                <FlowbiteFooter.Link href="#">Privacy Policy</FlowbiteFooter.Link>
                                <FlowbiteFooter.Link href="#">Terms &amp; Conditions</FlowbiteFooter.Link>
                            </FlowbiteFooter.LinkGroup>
                        </div>
                    </div>
                </div>
                <FlowbiteFooter.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <FlowbiteFooter.Copyright href="#" by="BantuRiset™" year={year} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <FlowbiteFooter.Icon href="#" icon={BsFacebook} />
                        <FlowbiteFooter.Icon href="#" icon={BsInstagram} />
                        <FlowbiteFooter.Icon href="#" icon={BsTwitter} />
                        <FlowbiteFooter.Icon href="#" icon={BsGithub} />
                        <FlowbiteFooter.Icon href="#" icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </FlowbiteFooter>
    );
}
