import Navbar2 from '../../components/Navbar2';
import BottomNav from '../../components/BottomNav';

const Notification = () => {
    return (
        <div className='bg-white-secondary'>
            <Navbar2 title='Notifikasi'></Navbar2>
            <div className="w-11/12 m-auto my-4">
                <p className='text-sm font-light'>Pemberitahuan terbaru anda akan tampil disini dan akan hilang secara otomatis setelah 30 hari</p>
                <div className="">
                    <NotifTile></NotifTile>
                    <NotifTile></NotifTile>
                    <NotifTile></NotifTile>
                </div>
            </div>
            <div className="h-20"></div>
            <BottomNav></BottomNav>
        </div>
    )
}

const NotifTile = () => {
    return (
        <div className="w-11/12 m-auto my-4">
            <div className="bg-white rounded-xl p-4">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <div className="bg-blue-primary rounded-full h-12 w-12 flex items-center justify-center bg-gray">
                            {/* <img src="" alt="" className="bg-white w-full h-full"/> */}
                        </div>
                        <div className="ml-2">
                            <p className='text-sm font-medium'>Ryokhrisna Fitriawan</p>
                            <p className='text-xs font-light'>1 jam yang lalu</p>
                        </div>
                    </div>
                </div>
                <div className="my-4">
                    <p className='text-sm font-light'>Pemberitahuan terbaru anda akan tampil disini dan akan hilang secara otomatis setelah 30 hari</p>
                </div>
            </div>
        </div>
    )
}

export default Notification