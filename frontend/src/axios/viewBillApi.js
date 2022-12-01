import axios from "axios";

let details
export const viewBillApi = async () => {
    try {
         details = await axios.get('http://localhost:8000/api/customerInfo')
         return details
    } catch (error) {
        console.error(error);
    }
}