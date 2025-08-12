import axios from "axios"
import { jwtDecode } from "jwt-decode";
import { useAuthSessionStore } from "../store/authSessionStore";

const API_URL = 'https://2d2b7ba38b24.ngrok-free.app'

export const postLoginFn = async (data) => {
  

  try {
    const res = await axios.post(`${API_URL}/api/auth/login`, data)
    
    //sacamos el token que viene de la peticion
    const token = res.data.data.token;

    //decodificamos el token para obtener el usuario
    const userData = jwtDecode(token)
    const user = res.data.data.user;

    //guardamos el token y el usuario en el store de zustad
    useAuthSessionStore.getState().setToken(token)
    useAuthSessionStore.getState().setUser(user);

    return userData;
  } catch (error) {
    if (error.response) {
      const serverError = {
        status: error.response.status,
        message: error.response.data.message || "Error de conexión",
        error: error.response.data.error
      }
      throw serverError
    }
  }
}