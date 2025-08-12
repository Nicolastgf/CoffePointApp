import axios from "axios"

const API_URL = "https://2d2b7ba38b24.ngrok-free.app"
export const getUserFn = async () => {
  try {
    const res = await axios.get(`${API_URL}/api/user/`)
    return res.data

  } catch (error) {

    throw new Error("Failed to fetch users");
  }
}
//serivio para crear un usuarios
export const postUserFn = async (userData) => {
  try {
    const res = await axios.post(`${API_URL}/api/user/`, userData)
    return res.data
  } catch (error) {
    throw new Error("Failed to create user");
  }
}

//serivicion para verificar la cuenta del usaurio por el codigo
export const verifyUserFn = async (code) => {
  console.log("Código enviado:", code);
  try {
    const res = await axios.put(`https://73cb20ecb9ea.ngrok-free.app/api/user/verify/${code}`)
    return res.data
  } catch (error) {
    throw new Error("Failed to verify user");
  }
}

//servicio para reeenviar el codigo de verificacion
export const resendCodeFn = async (email) => {
  console.log(email);
  try {
    const res = await axios.post(`${API_URL}/api/user/send`, { email })
    return res.data;
  } catch (error) {
    throw new Error("Failed to resend verification code");
  }
}