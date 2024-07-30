import axios from "axios"

const register = async (fname: string, email: string, role: string, password: string, phone: string,institute: string, instituteAddress: string, postalCode: string) => {
    try {
        const res = await axios.post(
            'http://103.63.25.209:8080/api/register',
            {
                fname,
                email,
                password,
                role,
                phone,
                institute,
                institute_address: instituteAddress,
                post: postalCode
            },
        )
        
        if (res.data) {
            try {
                await axios.post(
                    `http://103.63.25.209:8080/api/user/${role}/create/${res.data.user_id}`,
                    {
                        role: role
                    },
                )

                return true
            } catch (err) {
                console.log(err)
                return false
            }
        }

        return false
    } catch (err) {
        console.log(err)
        return false
    }
}

export default register