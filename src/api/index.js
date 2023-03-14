import axios from "axios";
import { BACKEND_URL } from "../constants";

const login = async (data) => {
    try {
        const result = await axios.post(BACKEND_URL + "/api/auth/login", data);
        return result.data;
    } catch (e) {
        return []
    }
}

const register = async (data) => {
    try {
        const result = await axios.post(BACKEND_URL + "/api/auth/register", data);
        return result.data;
    } catch (e) {
        return []
    }
}

const sendVerifyCode = async (data) => {
    try {
        const result = await axios.post(BACKEND_URL + "/api/auth/sendVerifyCode", data);
        return result.data;
    } catch (e) {
        return []
    }
}
export { login, register, sendVerifyCode }