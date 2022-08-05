import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/'

export const getBooksAPI = async () =>
	axios.get(`/books`).catch((error) => console.error(error))

export const getBookByIdAPI = async (id) => axios.get(`/books/${id}`)

export const createBookAPI = async (book) => axios.post(`/books`, book)
export const updateBookAPI = async (book) =>
	axios.put(`/books/${book.id}`, book)
export const deleteBookAPI = async (book) =>
	axios.delete(`/books/${book.id}`, book)

export const getPromotionsAPI = async () => axios.get(`/promotions`)
export const getPromotionByIdAPI = async (id) => axios.get(`/promotions/${id}`)
export const createPromotionAPI = async (promotion) =>
	axios.post(`/promotions`, promotion)
export const updatePromotionAPI = async (promotion) =>
	axios.put(`/Promotions/${promotion.id}`, promotion)
export const deletePromotionAPI = async (promotion) =>
	axios.delete(`/Promotions/${promotion.id}`, promotion)
