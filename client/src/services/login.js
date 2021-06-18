
import axios from "axios"
const  login = async (data) => {
    const apiURL = "http://localhost:4000/login"
    const res = await axios.post(apiURL,data);
    const {username,password} = res.data
    return {
        username,
        password
    } 
}
export default login