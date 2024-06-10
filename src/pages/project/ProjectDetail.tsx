import React from 'react'
import HomeTemplate from '../../templates/HomeTemplate';
import { Badge } from 'flowbite-react';

const ProjectDetail = () => {
    return (
        <div>
            <HomeTemplate>
                <div className="mt-10 mb-4 w-11/12 m-auto">
                    <div className="rounded-xl overflow-hidden">
                        <img src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                    </div>
                    <div className="my-6 mx-2">
                        <Badge color={'blue'} className='w-20 justify-center'>Physics</Badge>
                        <h1 className='text-xl font-medium my-2'>Lorem ipsum dolor sit amet consectetur adipisicing</h1>
                        <div className="my-2">
                            <p className='text-gray text-sm'>dari Rp3.000.000</p>
                            <p className='font-medium'>terkumpul <span className='text-primary'>Rp1.500.000</span></p>
                            <div className="my-2 w-full h-2 bg-[#ddd] rounded-full overflow-hidden">
                                <div className="h-2 w-[25%] bg-success"></div>
                            </div>
                        </div>
                        <div className="my-4">
                            <h1>Deskripsi</h1>
                            <p className='text-gray text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque dolore consequatur est iure, eos illo quisquam perferendis minus. Atque asperiores error, earum laboriosam dolor illo rerum eaque soluta optio perspiciatis?</p>
                        </div>
                    </div>
                </div>
                <hr className='border-4 border-gray w-full' />
                <div className="flex">
                    <div className="">
                        <img src="" alt="" />
                    </div>
                    <div className="">
                        
                    </div>
                </div>
            </HomeTemplate>
        </div>
    )
}

export default ProjectDetail