import axios from 'axios'
axios.defaults.baseURL = process.env.STORE_URL

export const getPromotionsAPI = async () =>
	axios.get(`/promotions`).catch((error) => console.error(error))

export const getBookByIdAPI = async (id) => axios.get(`/promotions/${id}`)