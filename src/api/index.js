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

const register = async (data, token) => {
    console.log(data, token);
    try {
        const result = await axios.post(BACKEND_URL + "/api/auth/register", data, {
            headers: {
                Authorization: `Verify ${token}`
            }
        });
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
        const result = await axios.post(BACKEND_URL + "/api/auth/verifyEmail", data)
        return result.data;
    } catch (e) {
        return e
    }
}

const socialVerify = async (data) => {
    try {
        const result = await axios.post(BACKEND_URL + "/api/auth/socialVerify", data)
        return result.data;
    } catch (e) {
        return e
    }
}
export { login, register, sendVerifyCode, verifyEmail, socialVerify }