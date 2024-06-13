import HomeTemplate from '../../templates/HomeTemplate';
import { Avatar, Badge, Button, Drawer, Dropdown, Card as FlowbiteCard } from 'flowbite-react';
import ButtonNav from '../../components/ButtonNav';
import { Card } from '../../components/Card';
import { IoMdTime } from "react-icons/io";
import { GrSteps } from "react-icons/gr";
import Navbar2 from '../../components/Navbar2';
import { AiOutlineDownload } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5";
import { useState } from 'react';
import drawerTheme from '../../themes/drawer';
const ProjectDetail = () => {

    const ActionButton = () => {
        const [isOpen, setIsOpen] = useState(true);

        const handleClose = () => setIsOpen(false);
        return (
            <>
                <div className="flex items-center justify-center !bg-white !p-0 !m-0">
                    <button className='w-6 ' onClick={() => setIsOpen(true)}><IoMenuOutline size={"100%"}></IoMenuOutline></button>
                </div>
                <Drawer theme={drawerTheme} className='!h-40 !w-20 top-10' position='right' open={isOpen} onClose={handleClose}>
                    <div className="bg-white/75 w-full h-full blur-sm">
                        <Drawer.Header title="Drawer" />
                        <Drawer.Items className='!rounded-xl'>
                            <div className=""></div>
                        </Drawer.Items>
                    </div>
                </Drawer>
            </>
        )
    }

    return (
        <div>
            <HomeTemplate className=''>
                <Navbar2 title='Project' actionButton={<ActionButton />}></Navbar2>
                <Content></Content>
                <hr className='border-2 border-gray-200 w-full' />
                <ReportProgress></ReportProgress>
                <hr className='border-2 border-gray-200 w-full' />
                <DonaturList />
                <div className="h-20"></div>
                <Footer></Footer>
            </HomeTemplate >
        </div >
    )
}

const Content = () => {
    return (<div className="mt-10 w-11/12 m-auto">
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
    </div>)
}

const ResearcherInfo = () => {
    return (
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
    )
}

const ReportProgress = () => {
    return (
        <div className=" mb-10 w-11/12 m-auto">
            <div className="w-full flex justify-between items-center my-4">
                <h1 className='text-xl mx-2 font-medium 2'>Laporan capaian</h1>
                <Link to={'/donate'} className='text-primary text-sm'>Tambah laporan</Link>
            </div>
            <div className="flex overflow-scroll gap-4">
                {
                    [1, 2, 3, 4, 5].map((item) => {
                        return (<div key={item} className="min-w-fit">
                            <FlowbiteCard className="w-60">
                                <h1 className='text-sm font-medium text-primary'>Laporan ke-{item}</h1>
                                <h5 className="font-medium tracking-tight text-gray-900 dark:text-white">
                                    Noteworthy technology acquisitions 2021
                                </h5>
                                <p className="text-xs text-gray-700 dark:text-gray-400">
                                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                </p>
                                <Button size={'xs'} outline color={'blue'} className='!border-primary'>
                                    <span className='text-primary'>

                                        Unduh Laporan
                                    </span>
                                </Button>
                            </FlowbiteCard>
                        </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

const RelevantProject = () => {
    return (
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
    )
}

const DonaturList = () => {
    return (
        <div className="w-11/12 m-auto">
            <div className="text-lg font-medium m-2">Daftar Donatur</div>
            <div className="flex flex-col gap-3">
                <Avatar className='!w-fit mx-2' img="https://flowbite.com/docs/images/blog/image-1.jpg" rounded>
                    <div className="space-y-1 font-medium dark:text-white">
                        <div className="text-xs text-gray dark:text-gray-400 !font-normal">Ryo Khrisna Fitriawan</div>
                        <div className='text-sm !font-normal'>Menyumbang sebesar Rp 1.000.000</div>
                    </div>
                </Avatar>
                <Avatar className='!w-fit mx-2' img="https://flowbite.com/docs/images/blog/image-1.jpg" rounded>
                    <div className="space-y-1 font-medium dark:text-white">
                        <div className="text-xs text-gray dark:text-gray-400 !font-normal">Ryo Khrisna Fitriawan</div>
                        <div className='text-sm !font-normal'>Menyumbang sebesar Rp 1.000.000</div>
                    </div>
                </Avatar>
            </div>
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