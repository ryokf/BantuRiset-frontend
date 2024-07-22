import axios from 'axios';

const login = async (email: string, password: string) => {
    try {
        const res = await axios.post(
            'http://103.63.25.209:8080/api/login',
            {
                email,
                password
            },
        )

        console.log(res)
        return res.data
    } catch (err) {
        console.log(err)
    }
}
export default login