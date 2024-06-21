
import axios from 'axios';

const login = async (username: string, password: string) => {
    try {
        const res = await axios.post('https://fakestoreapi.com/auth/login',
            {
                username,
                password
            }
        )

        console.log(res)
        return res.data
    } catch (err) {
        console.log(err)
    }
}
export default login