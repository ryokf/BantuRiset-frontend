import { Link } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { TbLetterCase } from "react-icons/tb";
import DashboardTemplate from "../../templates/DashboardTemplate";
import { useEffect, useState } from "react";
import profile from "../../services/Auth/profile";

const Profile = () => {
    // const dataUser = JSON.parse(localStorage.getItem("user") || "{}");
    const [dataUser, setDataUser] = useState({})

    useEffect(() => {
        if(localStorage.getItem("token") == undefined){
            window.location.href = "/login"
        }

        const getProfile = async () => {
            const token = localStorage.getItem("token") ?? ""
            try{
                const res = await profile(token)
                setDataUser(res.data)
            } catch(err) {
                window.location.href = "/login"
            }
        }

        getProfile()
    }, [])

    return (
        <DashboardTemplate title="Profile">
            <Main dataUser={dataUser}/>
            <BankAcc dataUser={dataUser}/>
            <Personalization />
            <div className="h-20"></div>
        </DashboardTemplate>
    )
}

const Main = ({ dataUser }: { dataUser: any }) => {
    return (
        <div className="w-11/12 m-auto my-4">
            <div className="bg-white  rounded-xl">
                <div className="bg-transparent h-fit py-4">
                    <img src={`https://ui-avatars.com/api/?name=${dataUser?.FName}` }className="w-32 rounded-full aspect-square m-auto" alt="" />
                    <div className="text-center">
                        <h1 className="text-lg font-medium mt-2">{dataUser?.FName}</h1>
                        <p className="text-gray text-sm">{dataUser?.Email}</p>
                    </div>
                    <div className="mx-6 mt-8 font-light">
                        <Link to={"/profile/edit"} className="my-3 block">ubah profil</Link>
                        <hr />
                        <Link to={"/profile/edit-password"} className="my-3 block">ubah password</Link>
                        <hr />
                        <p className="my-3 text-danger">Logout</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const BankAcc = ({dataUser}: {dataUser: any}) => {
    return (
        <div className="w-11/12 m-auto">
            <h1 className="mx-2 text-sm text-gray my-1">info rekening</h1>
            <div className="bg-white rounded-xl w-full flex gap-4 p-4">
                <img src="/brilogo.png" className="w-10 object-cover" alt="" />
                <div className="">
                    <h1 className="text-sm uppercase">{dataUser?.FName}</h1>
                    <p className="text-xs text-gray">{dataUser?.NoRek}</p>
                </div>
            </div>
        </div>
    )
}

const Personalization = () => {
    return (
        <div className="w-11/12 m-auto mt-4">
            <h1 className="mx-2 text-sm text-gray my-1">Personalisasi</h1>
            <div className="px-6 py-2 font-light bg-white rounded-xl">
                <Link to="" className="my-3 flex gap-3 items-center">
                    <div className="gradient-orange aspect-square text-white rounded-xl w-10 flex justify-center items-center">
                        <FiSun size={"55%"}></FiSun>
                    </div>
                    <Link to={"/profile/appearance"} className="">
                        <h1 className="font-medium">Tampilan</h1>
                        <p className="text-xs text-gray">mode terang</p>
                    </Link>
                </Link>
                <hr />
                <Link to="" className="my-3 flex gap-3 items-center">
                    <div className="gradient-purple aspect-square text-white rounded-xl w-10 flex justify-center items-center">
                        <TbLetterCase size={"55%"} />
                    </div>
                    <div className="">
                        <h1 className="font-medium">Bahasa</h1>
                        <p className="text-xs text-gray">Bahasa indonesia</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Profile