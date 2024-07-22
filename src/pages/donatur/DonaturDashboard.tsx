import { useState } from 'react';
import { Card } from '../../components/Card';
import DashboardTemplate from '../../templates/DashboardTemplate';

const DonaturDashboard = () => {
    return (
        <DashboardTemplate title="Dashboard">
                <MainCard />
                <Search />
                <RecentWatch />
                <RecentWatch />
        </DashboardTemplate>

    )
}

const MainCard = () => {
    return (
        <div className="w-11/12 m-auto gradient-blue py-5 md:py-7 my-4 rounded-xl">
            <div className="flex items-center w-10/12 m-auto gap-4">
                <div className="">
                    <img src="" alt="" className='bg-gray w-16 md:w-20 rounded-full aspect-square' />
                </div>
                <div className="text-white">
                    <h1 className='font-medium md:text-lg'>Ryo khrisna fitriawan</h1>
                    <p className='text-sm md:text-base opacity-75'>ryokhrisnaf@gmail.com</p>
                </div>
            </div>
            <div className="grid grid-cols-3 mt-4 mx-4 text-white">
                <div className="flex flex-col items-center justify-center">
                    <p className='text-xs md:text-sm'>donasi</p>
                    <h1 className='text-sm md:text-base'>Rp15.000.000</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className='text-xs md:text-sm'>berhasil</p>
                    <h1 className='text-sm md:text-base'>32</h1>
                </div>
                <div className="flex flex-col items-center">
                    <p className='text-xs md:text-sm'>gagal</p>
                    <h1 className='text-sm md:text-base'>2</h1>
                </div>
            </div>
        </div>
    )
}

const Search = () => {
    const [search, setSearch] = useState('')

    const searchHandle = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        window.location.href = `/search?search=${search}`
    }
    return (
        <form className='mt-2 w-11/12 m-auto !mb-0' onSubmit={searchHandle}>
            <input onChange={(e) => setSearch(e.target.value)} type="text" className='rounded-full border border-primary w-full lg:w-10/12 placeholder:text-gray' placeholder='Cari Riset' />
        </form>
    )
}

const RecentWatch = () => {
    return (
        <div className='w-11/12 m-auto !mt-0'>
            <h1 className='font-medium m-2'>Baru saja anda lihat</h1>
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

export default DonaturDashboard