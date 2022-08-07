import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './slices/cartSlice'
import { promotionReducer } from './slices/promotionSlice'

const reducer = {
	cart: cartReducer,
	promotions: promotionReducer,
}

const store = configureStore({
	reducer,
})

export default store
