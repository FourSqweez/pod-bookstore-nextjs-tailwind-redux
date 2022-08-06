import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000/'

export const getPromotionsAPI = async () =>
	axios.get(`/promotions`).catch((error) => console.error(error))

export const getBookByIdAPI = async (id) => axios.get(`/promotions/${id}`)