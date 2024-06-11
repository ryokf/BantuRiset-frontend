import HomeTemplate from '../../templates/HomeTemplate'
import Navbar2 from '../../components/Navbar2';
import BottomNav from '../../components/BottomNav';

const InvestorDashboard = () => {
    return (
        <div className="bg-white-secondary">
            <HomeTemplate>
                <Navbar2 title='Dashboard'></Navbar2>
                <div className="w-11/12 m-auto gradient-blue py-5 rounded-xl">
                    <div className="flex items-center w-10/12 m-auto gap-4">
                        <div className="">
                            <img src="" alt="" className='bg-gray w-16 rounded-full aspect-square' />
                        </div>
                        <div className="text-white">
                            <h1 className='font-medium'>Ryo khrisna fitriawan</h1>
                            <p className='text-sm opacity-75'>ryokhrisnaf@gmail.com</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 mt-4 mx-4 text-white">
                        <div className="flex flex-col items-center justify-center">
                            <p className='text-xs'>donasi</p>
                            <h1 className='text-sm'>Rp15.000.000</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className='text-xs'>berhasil</p>
                            <h1 className='text-sm'>32</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className='text-xs'>gagal</p>
                            <h1 className='text-sm'>2</h1>
                        </div>
                    </div>
                </div>
                <BottomNav></BottomNav>
            </HomeTemplate>
        </div>
    )
}

export default InvestorDashboard