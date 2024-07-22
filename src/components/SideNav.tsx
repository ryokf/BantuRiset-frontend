import dashboardNav from '../data/dashboardNav'
import { Link } from 'react-router-dom'

const SideNav = () => {

    const navlink = dashboardNav

    console.log(window.location.pathname)
    return (
        <div className='bg-white rounded-xl'>
            <div className={`grid grid-row-${navlink.length} my-1 py-4`}>
                {
                    navlink.map((item) => {
                        return (
                            <Link to={item.href} key={item.name} className={`${item.href == window.location.pathname ? 'text-black' : 'text-gray'} flex gap-2 items-center justify-start w-3/4 m-auto mb-4`}>
                                <span>
                                    {item.icon}
                                </span>
                                <h1 className='text-lg'>{item.name}</h1>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SideNav