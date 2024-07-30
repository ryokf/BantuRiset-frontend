import { jwtDecode } from "jwt-decode";

const roleAuth = () => {
    const token = localStorage.getItem("token") ?? ""
    const role = jwtDecode(token) as { role_id: number }

    return role
}

export default roleAuth