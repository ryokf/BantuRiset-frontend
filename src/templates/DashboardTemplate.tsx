import Navbar2 from '../components/Navbar2';
import BottomNav from '../components/BottomNav';
import Navbar from '../components/Navbar';
import SideNav from '../components/SideNav';
const DashboardTemplate = ({ children, className, title }: { children?: React.ReactNode, className?: string, title?: string }) => {
  return (
    <div className={`bg-white-secondary min-h-screen flex flex-col justify-start w-full ${className} sm:bg-red-50 md:bg-blue-50 lg:bg-green-50 xl:bg-purple-50 2xl:bg-orange-50`}>
      <Navbar2 title={title} className='landscape:hidden'></Navbar2>
      <Navbar className='hidden landscape:block'></Navbar>
      <div className="md:w-11/12 xl:w-3/5 md:m-auto landscape:grid grid-cols-4 gap-8 md:mt-4 lg-mt-0">
        <div className="col-span-1 portrait:hidden">
          <SideNav></SideNav>
        </div>
        <div className="col-span-3 md:w-full md:m-auto md:bg-white md:rounded-xl">
          {children}
        </div>
      </div>
      <div className="landscape:hidden">
        <BottomNav></BottomNav>
      </div>
    </div>
  )
}

export default DashboardTemplate