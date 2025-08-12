import axios from "axios"

const API_URL = "https://2d2b7ba38b24.ngrok-free.app"

export const getPromocionFn = async ()=>{

  try {
    const res = await axios.get(`${API_URL}/api/product/`)
    return res
  } catch (error) {
    
  }
}