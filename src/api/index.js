import axios from "axios";
import { BACKEND_URL } from "../constants";

const login = async (data) => {
    try {
        const result = await axios.post(BACKEND_URL + "/api/auth/login", data);
        return result.data;
    } catch (e) {
        return e
    }
}

const register = async (data) => {
    try {
        const result = await axios.post(BACKEND_URL + "/api/auth/register", data);
        return result.data;
    } catch (e) {
        return e
    }
}

const sendVerifyCode = async (data) => {
    try {
        const result = await axios.post(BACKEND_URL + "/api/auth/sendVerifyCode", data);
        return result.data;
    } catch (e) {
        return e
    }
}

const verifyEmail = async (data) => {
    try {
        const result = await axios.post(BACKEND_URL + "/api/auth/verifyEmail", data);
        return result.data;
    } catch (e) {
        return e
    }
}
export { login, register, sendVerifyCode, verifyEmail }