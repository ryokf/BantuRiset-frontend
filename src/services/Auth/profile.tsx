import axios from "axios"

const profile = async (token?: string) => {
    try {
        const res = await axios.get(
            'http://103.63.25.209:8080/api/user/profile',
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        return res.data
    } catch (err) {
        console.log(err)
    }
}

export default profile