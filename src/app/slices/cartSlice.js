import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		addToCart: (state, action) => {
			const itemExists = state.find((item) => item.id === action.payload.id)
			console.log('Payload :', action.payload.quantity)
			if (itemExists) {
				itemExists.quantity += action.payload.quantity
			} else {
				const quantity = action.payload.quantity
				state.push({ ...action.payload, quantity: quantity })
			}
			console.log('book in cart : ', state.length)
		},
		removeFromCart: (state, action) => {
			const index = state.findIndex((item) => item.id === action.payload)
			state.splice(index, 1)
		},
	},
})
export const cartReducer = cartSlice.reducer

export const {
	addToCart,
	removeFromCart,
} = cartSlice.actions

export const selectBooks = (state) => state.cart.booksItems
export const selectTotal = function (state) {
	if ('promotion ' == 'promotion ') {
		return ''
	}
	return state.basket.items.reduce((total, item) => total + item.price, 0)
}
