import { Link } from 'react-router-dom'
import dashboardNav from '../data/dashboardNav';

const BottomNav = () => {

    const navlink = dashboardNav() || []

    console.log(window.location.pathname)

    return (
        <div className='fixed border-2 bottom-0 bg-white w-full rounded-xl py-2'>
            <div className={`grid grid-cols-${navlink.length} my-1`}>
                {
                    navlink.map((item) => {
                        return (
                            <Link to={item.href} key={item.name} className={`${item.href == window.location.pathname ? 'text-black' : 'text-gray'} flex gap-0.5 flex-col justify-center items-center`}>
                                {item.icon}
                                <h1 className='text-xs font-semibold'>{item.name}</h1>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BottomNav