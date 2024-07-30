import { jwtDecode } from 'jwt-decode';
import ProposalList from './Admin/ProposalList';
import ResearcherDashboard from './researcher/ResearcherDashboard';
import DonaturDashboard from './donatur/DonaturDashboard';

const MainDashboard = () => {
    const token = localStorage.getItem("token") ?? "";
    const role = jwtDecode(token) as { role_id: number };

    if (role.role_id == 1) {
        return ProposalList()
    } else if (role.role_id == 2) {
        return DonaturDashboard()
    } else if (role.role_id == 3) {
        return ResearcherDashboard()
    } else {
        return <div>nguaworr</div>
    }
}

export default MainDashboard