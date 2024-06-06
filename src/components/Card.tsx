
"use client";

import { Card as FlowbiteCard } from 'flowbite-react';
import {cardTheme} from '../themes/card';

export function Card() {
    return (
        <FlowbiteCard theme={cardTheme}
            className={`max-w-sm sm:max-w-md flex-col rounded-xl overflow-hidden`}
            renderImage={() => <img width={500} height={500} src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="card" />}
        >
            <div className="">
                <h5 className="text-lg font-semibold tracking-tight text-black dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="text-gray text-xs dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </div>
            <div className="flex gap-2 my-1">
                <img src="" alt="" className="rounded-full bg-gray h-12 w-12" />
                <div className="flex flex-col justify-center">
                    <h1 className="text-sm">Ryo khrisna fitriawan</h1>
                    <p className="text-xs text-gray">Universitas dian nuswantoro</p>
                </div>
            </div>
            <div className="my-2">
                <div className="h-2 w-full bg-gray-200 rounded-full">
                    <div className="h-2 w-[20%] bg-success rounded-full"></div>
                </div>
            </div>

            <div className="flex justify-between text-xs">
                <div className="flex flex-col items-center">
                    <div className="">70%</div>
                    <div className="">Funded</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="">Rp 5.000.000</div>
                    <div className="">Goal</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="">10 hari</div>
                    <div className="">tersisa</div>
                </div>
            </div>
        </FlowbiteCard>
    );
}
