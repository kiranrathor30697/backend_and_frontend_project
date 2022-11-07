import axios from "axios"

export const loginApi = async (payload,navigate) => {
    try {
        // const loginData = await axios.post('http://localhost:9000/api/login', payload)
        const loginData = await axios.post('https://2db1-223-236-41-72.ngrok.io/api/login', payload)
        console.log(loginData)
        if (loginData.status === 200) {
            alert('Login Successfully')
            navigate("/createbill")
        }
    } catch (error) {
        console.log(error)
    }
}