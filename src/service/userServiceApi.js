import axios from "axios"


export const getUserFn = async()=>{
  try {
    const res = await axios.get('https://224a78a7e0a0.ngrok-free.app/api/cliente/mostrarusuario')
    return res.data

  } catch (error) {
    
  }
}