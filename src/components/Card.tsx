
"use client";

import { Card as FlowbiteCard } from 'flowbite-react';
import { cardTheme } from '../themes/card';

export function Card() {
    return (
        <FlowbiteCard theme={cardTheme}
            className={`!w-60 md:!w-full sm:max-w-md flex-col rounded-xl overflow-hidden`}
            renderImage={() => <img className='w-full h-32 md:h-60 object-cover' src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="card" />}
        >
            <a href="/project/1">
                <div className="">
                    <h5 className="text-xs md:text-lg font-semibold tracking-tight text-black dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="text-gray text-[8px] md:text-xs dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </div>
                <div className="flex items-center gap-2 my-3 md:my-5">
                    <img src="" alt="" className="rounded-full bg-gray w-10 md:w-12 aspect-square" />
                    <div className="flex flex-col justify-center">
                        <h1 className="text-xs md:text-sm">Ryo khrisna fitriawan</h1>
                        <p className="text-[8px] md:text-xs text-gray">Universitas dian nuswantoro</p>
                    </div>
                </div>
                <div className="my-2">
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                        <div className="h-2 w-[20%] bg-success rounded-full"></div>
                    </div>
                </div>

                <div className="flex justify-between text-xs mt-3">
                    <div className="flex flex-col items-center">
                        <div className="text-[10px] md:text-sm">70%</div>
                        <div className="text-[10px] md:text-sm">Funded</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-[10px] md:text-sm">Rp 5.000.000</div>
                        <div className="text-[10px] md:text-sm">Goal</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-[10px] md:text-sm">10 hari</div>
                        <div className="text-[10px] md:text-sm">tersisa</div>
                    </div>
                </div>
            </a>
        </FlowbiteCard>
    );
}
