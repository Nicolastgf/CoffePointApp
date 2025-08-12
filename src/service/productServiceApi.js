import axios from "axios"

const API_URL = "https://2d2b7ba38b24.ngrok-free.app"

export const getProductFn = async () => {
  try {
    const res = await axios.get(`${API_URL}/api/products/`)
    return res.data
  } catch (error) {

  }
}