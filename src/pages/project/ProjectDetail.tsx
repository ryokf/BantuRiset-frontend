import HomeTemplate from '../../templates/HomeTemplate';
import { Avatar, Badge, Button, Card as FlowbiteCard } from 'flowbite-react';
import ButtonNav from '../../components/ButtonNav';
import { Card } from '../../components/Card';
import { IoMdTime } from "react-icons/io";
import Navbar2 from '../../components/Navbar2';
import { AiOutlineDownload } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { BsBarChartSteps } from "react-icons/bs";
// import { HiOutlineExclamationCircle } from "react-icons/hi";
import ProjectAction from '../../components/ProjectAction';
import Navbar from '../../components/Navbar';
import { Footer as FooterComp } from '../../components/Footer';

const ProjectDetail = ({ children }: { children?: React.ReactNode }) => {

    return (
        <HomeTemplate className=''>
            <Navbar2 title='Project' className='landscape:hidden' actionButton={<ProjectAction />}></Navbar2>
            <Navbar className='hidden landscape:block'></Navbar>
            <div className="w-11/12 lg:w-3/4 xl:w-1/2 m-auto">
                {children}
            </div>
            <div className="hidden sm:block">
                <FooterComp/>
            </div>
            <Footer></Footer>
        </HomeTemplate >
    )
}

const Content = () => {
    return (
        <div className="mt-10 ">
            <div className="my-6 landscape:my-0 grid md:grid-cols-2 xl:grid-cols- gap-4 lg:gap-8 m-auto">
                <div className="rounded-xl overflow-hidden m-auto max-w-2xl mb-6 col-span-1 flex items-start">
                    <img className='object-cover' src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                </div>
                <div className="col-span-1 flex-col justify-center landscape:mt-4">
                    <Badge color={'blue'} className='w-20 justify-center'>Physics</Badge>
                    <h1 className='text-xl font-medium my-2'>Lorem ipsum dolor sit amet consectetur adipisicing</h1>
                    <div className="grid w-full grid-cols-1 md:grid-cols-">
                        <div className="flex gap-1  items-center my-2 ">
                            <IoMdTime size={20}></IoMdTime>
                            <div className="text-sm text-gray">10 Hari tersisa</div>
                        </div>
                        <div className="flex gap-2 items-center my-2 ">
                            <BsBarChartSteps className='' size={20} />
                            <div className="text-sm text-gray"> 5 tahap</div>
                        </div>
                    </div>
                    <div className="my-2">
                        <p className='text-gray text-sm'>dari Rp3.000.000</p>
                        <p className='font-medium'>terkumpul <span className='text-primary'>Rp1.500.000</span></p>
                        <div className="my-2 max-w-xl h-2 bg-[#ddd] rounded-full overflow-hidden">
                            <div className="h-2 w-[25%] bg-success"></div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="w-80 grid grid-cols-6 gap-3">
                            <div className='col-span-1 py-2'>
                                <div className="bg-white p-2 max-h-14 border text-primary border-primary w-full rounded-xl aspect-square flex justify-center items-center">
                                    <AiOutlineDownload size={"100%"}></AiOutlineDownload>
                                </div>
                            </div>
                            <Link to={"/donate"} className='col-span-5 py-2'>
                                <div className="text-white border bg-primary w-full rounded-xl h-full flex justify-center items-center">Donasi Sekarang</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className='md:text-xl font-medium'>Deskripsi</h1>
                <p className='text-gray text-sm mt-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque dolore consequatur est iure, eos illo quisquam perferendis minus. Atque asperiores error, earum laboriosam dolor illo rerum eaque soluta optio perspiciatis?</p>
            </div>
        </div>)
}

const ResearcherInfo = () => {
    return (
        <div className="flex gap-2 lg:gap-4 m-auto items-center my-4 landscape:my-8">
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
        <div className="mt-4 mb-20 m-auto">
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
        <div className='fixed sm:hidden border-2 bottom-0 bg-white w-full rounded-xl py-1'>
            <div className="grid grid-cols-6 mx-6 gap-3">
                <div className='col-span-1 py-2'>
                    <div className="bg-white p-2 max-h-14 border text-primary border-primary w-full rounded-xl aspect-square flex justify-center items-center">
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

ProjectDetail.Content = Content
// ProjectDetail.Footer = Footer
ProjectDetail.DonaturList = DonaturList
ProjectDetail.RelevantProject = RelevantProject
ProjectDetail.ReportProgress = ReportProgress
ProjectDetail.ResearcherInfo = ResearcherInfo

export default ProjectDetail