import { jwtDecode } from "jwt-decode";

const roleAuth = (): number | undefined => {
    const token = localStorage.getItem("token") ?? "";
    const role = jwtDecode(token) as { role_id: number };

    return role.role_id;
};

export default roleAuth;