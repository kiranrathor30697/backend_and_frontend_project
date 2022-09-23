import axios from "axios"

export const loginApi = async (payload) => {
    try {
        const loginData = await axios.post('https://c8f9-182-70-191-68.ngrok.io/api/login',payload)
        console.log(loginData.status)
        if(loginData.status === 200){
            alert('Login Successfully')
        }
    } catch (error) {
        console.log(error)
    }
}