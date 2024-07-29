import { jwtDecode } from "jwt-decode"

const roleAuth = () => {
    const token = localStorage.getItem("token") ?? ""
    const role = jwtDecode(token)

    return role.role_id;
}

export default roleAuth