import { Link } from 'react-router-dom'
import { GiTakeMyMoney,GiArchiveResearch } from "react-icons/gi";

const RegisterRole = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="text-center">
                <h1 className='text-2xl font-bold my-2'>Siapa kamu ?</h1>
                <p className='text-gray max-w-xs'>Klik salah satu pilihan dibawah untuk melanjutkan</p>
                <div className="grid grid-cols-2 w-2/3 lg:w-full my-4 m-auto">
                    <Link to="/register/1" className="h-20 lg:h-32 lg:w-32 w-20 m-auto gradient-sky rounded-xl flex flex-col text-white justify-center items-center gap-1">
                        <div className="w-[30px] lg:w-16 aspect-square">
                            <GiTakeMyMoney size={"100%"}/>
                        </div>
                        <p className="text-sm lg:text-base font-medium">Donatur</p>
                    </Link>
                    <Link to="/register/2" className="h-20 w-20 lg:h-32 lg:w-32 m-auto gradient-indigo rounded-xl flex flex-col text-white justify-center items-center gap-1">
                    <div className="w-[30px] lg:w-16 aspect-square">
                            <GiArchiveResearch size={"100%"}/>
                        </div>
                        <p className="text-sm lg:text-base font-medium">Peneliti</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RegisterRole