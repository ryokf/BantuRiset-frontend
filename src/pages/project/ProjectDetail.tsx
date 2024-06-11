import HomeTemplate from '../../templates/HomeTemplate';
import { Badge } from 'flowbite-react';
import ButtonNav from '../../components/ButtonNav';
import { Card } from '../../components/Card';
import { IoMdTime } from "react-icons/io";
import { GrSteps } from "react-icons/gr";
import Navbar2 from '../../components/Navbar2';
import { AiOutlineDownload } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ProjectDetail = () => {
    return (
        <div>
            <HomeTemplate className=''>
                <Navbar2 title='Project'></Navbar2>
                <div className="mt-10 w-11/12 m-auto">
                    <div className="rounded-xl overflow-hidden">
                        <img src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                    </div>
                    <div className="my-6 mx-2">
                        <Badge color={'blue'} className='w-20 justify-center'>Physics</Badge>
                        <h1 className='text-xl font-medium my-2'>Lorem ipsum dolor sit amet consectetur adipisicing</h1>
                        <div className="grid w-full grid-cols-1">
                            <div className="flex gap-2 items-start my-2 ">
                                <IoMdTime size={30}></IoMdTime>
                                <div className="text-sm">10 Hari tersisa</div>
                            </div>
                            <div className="flex gap-2 items-start my-2 ">
                                <GrSteps size={30}></GrSteps>
                                <div className="text-sm">5 tahap</div>
                            </div>
                        </div>
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
                <hr className='border-2 border-gray-200 w-full' />
                <div className="flex gap-2 w-10/12 m-auto items-center my-4">
                    <div className="rounded-full w-20 aspect-square bg-gray">
                        <img src="" alt="" />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <h1 className='font-medium'>Ryo Khrisna Fitriawan</h1>
                        <p className='text-xs text-gray'>Semarang, jawa tengah, indonesia</p>
                        <p className='text-xs text-gray'>universitas dian nuswantoro</p>
                        <ButtonNav></ButtonNav>
                    </div>
                </div>
                <hr className='border-2 border-gray-200 w-full' />
                <div className="mt-4 mb-20 w-11/12 m-auto">
                    <h1 className='text-xl mx-2 font-medium mb-2'>Riset Terkait</h1>
                    <div className="flex overflow-scroll">
                        <div className="min-w-fit mx-2">
                            <Card className='w-60'></Card>
                        </div>
                        <div className="min-w-fit mx-2">
                            <Card className='w-60'></Card>
                        </div>
                        <div className="min-w-fit mx-2">
                            <Card className='w-60'></Card>
                        </div>
                        <div className="min-w-fit mx-2">
                            <Card className='w-60'></Card>
                        </div>
                        <div className="min-w-fit mx-2">
                            <Card className='w-60'></Card>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </HomeTemplate>
        </div>
    )
}

const Footer = () => {
    return (
        <div className='fixed border-2 bottom-0 bg-white w-full rounded-xl py-1'>
            <div className="grid grid-cols-6 mx-6 gap-3">
                <div className='col-span-1 py-2'>
                    <div className="bg-white p-2 border text-primary border-primary w-full rounded-xl aspect-square flex justify-center items-center">
                        <AiOutlineDownload size={"100%"}></AiOutlineDownload>
                    </div>
                </div>
                <Link to={"/donate"} className='col-span-5 py-2'>
                    <div className="text-white border bg-primary w-full rounded-xl h-full flex justify-center items-center">Donasi Sekarang</div>
                </Link>
            </div>
        </div>
    )
}

export default ProjectDetail