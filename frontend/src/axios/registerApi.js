const axios = require('axios')
export const registerApi = async (payload,navigate) => {
    console.log(payload)
    try {
        const registerData = await axios.post('https://c8f9-182-70-191-68.ngrok.io/api/register',payload)
        console.log(registerData.status)
        if(registerData.status === 201){
            alert('Registration successfully')
            navigate('/login')
        }
    } catch (error) {
        console.log(error)
    }
}
