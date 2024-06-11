import BottomNav from "../../components/BottomNav";
import Navbar2 from '../../components/Navbar2';

const Profile = () => {
    return (
        <div className="bg-white-secondary">
            <Navbar2 title='Profile'></Navbar2>
            <Main />
            <BankAcc />
            <BottomNav></BottomNav>
            <div className="h-96 w-full"></div>
        </div>
    )
}

const Main = () => {
    return (
        <div className="w-11/12 m-auto my-4">
            <div className="bg-white  rounded-xl">
                <div className="bg-transparent h-fit py-4">
                    <img src="https://flowbite.com/docs/images/blog/image-1.jpg" className="w-32 rounded-full aspect-square m-auto" alt="" />
                    <div className="text-center">
                        <h1 className="text-lg font-medium mt-2">Ryo khrisna fitriawan</h1>
                        <p className="text-gray text-sm">ryokhrisnaf@gmail.com</p>
                    </div>
                    <div className="mx-6 mt-8 font-light">
                        <p className="my-3">ubah profil</p>
                        <hr />
                        <p className="my-3">ubah profil</p>
                        <hr />
                        <p className="my-3 text-danger">Logout</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const BankAcc = () => {
    return (
        <div className="w-11/12 m-auto">
            <h1 className="mx-2 text-sm text-gray my-1">info rekening</h1>
            <div className="bg-white rounded-xl w-full flex gap-4 p-4">
                <img src="https://flowbite.com/docs/images/blog/image-1.jpg" className="w-10 aspect-square" alt="" />
                <div className="">
                    <h1 className="text-sm uppercase">Ryo khrisna fitriawan</h1>
                    <p className="text-xs text-gray">080797707012</p>
                </div>
            </div>
        </div>
    )
}

export default Profile