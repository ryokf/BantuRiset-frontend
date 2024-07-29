import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const login = async (email: string, password: string) => {
    try {
        const res = await axios.post(
            'http://103.63.25.209:8080/api/login',
            {
                email,
                password
            },
        )
        // const userData = jwtDecode(res.data.token)
        localStorage.setItem('token', res.data.token)
        // localStorage.setItem('id', userData.id)
        // localStorage.setItem('role', userData.role)
        // localStorage.setItem('roleId', userData.roleId)
        // localStorage.setItem('email', userData.email)
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}
export default login