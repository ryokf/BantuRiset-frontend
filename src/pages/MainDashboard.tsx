import ResearcherDashboard from './researcher/ResearcherDashboard';
import DonaturDashboard from './donatur/DonaturDashboard';
import AdminDashboard from './Admin/AdminDashboard';
import roleAuth from '../helper/roleAuth';

const MainDashboard = () => {
    // const token = localStorage.getItem("token") ?? "";
    // const role = jwtDecode(token) as { role_id: number };

    const role = roleAuth()

    if (role.role_id == 1) {
        return AdminDashboard()
    } else if (role.role_id == 2) {
        return DonaturDashboard()
    } else if (role.role_id == 3) {
        return ResearcherDashboard()
    } else {
        return <div>nguaworr</div>
    }
}

export default MainDashboard