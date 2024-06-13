import Navbar2 from '../components/Navbar2';
import BottomNav from '../components/BottomNav';
const DashboardTemplate = ({children, className} : {children?: React.ReactNode, className?: string}) => {
  return (
    <div className={`bg-white-secondary min-h-screen flex flex-col justify-start w-full ${className}`}>
      <Navbar2 title='Dashboard'></Navbar2>
        {children}
        <BottomNav></BottomNav>
    </div>
  )
}

export default DashboardTemplate