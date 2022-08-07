import { createSlice } from '@reduxjs/toolkit'

const promotionSlice = createSlice({
	name: 'promotions',
	initialState: [],
	reducers: {
		addPromotions: (state, action) => {
         const itemExists = state.find((item) => item.id === action.payload.id)
			if (!itemExists) {
				state.push({ ...action.payload})
         } 
		},
	},
})

export const promotionReducer = promotionSlice.reducer

export const { addPromotions } = promotionSlice.actions
