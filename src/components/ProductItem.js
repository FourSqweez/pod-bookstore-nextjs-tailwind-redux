import React, { useState } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addToCart } from '../app/slices/cartSlice'

const ProductItem = ({ booksAndQuantity, product, handleModal }) => {
	const dispatch = useDispatch()
	const [itemQuantity, setItemQuantity] = useState(0)

	const addProductItemToCart = () => {
		product = { ...product, quantity: itemQuantity }
		dispatch(addToCart(product))
	}

	const incrementQuantity = (id) => {
		const item = booksAndQuantity.find((product) => product.id === id)
		const newBooks = [{ ...item.quantity, quantity: (item.quantity += 1) }]
		const [itemQuantity] = newBooks.map((item) => item.quantity)
		setItemQuantity(itemQuantity)
		return newBooks.quantity
	}

	const decrementQuantity = (id) => {
		const item = booksAndQuantity.find((product) => product.id === id)
		const newBooks = [{ ...item.quantity, quantity: (item.quantity -= 1) }]
		const [itemQuantity] = newBooks.map((item) => item.quantity)
		setItemQuantity(itemQuantity)

		return newBooks.quantity
	}

	return (
		<>
			<div
				key={product.id}
				className="w-40 h-full border-2 hover:border-[#F692B2] bg-[#ffd580] sm:w-48 sm:h-full overflow-hidden rounded-xl hover:opacity-100 hover:shadow-slate-200 hover:shadow-lg hover:scale-110 duration-200 ease-out"
			>
				<div
					onClick={() => handleModal(product.id)}
					className="h-52 w-full sm:h-60 sm:w-full relative overflow-hidden rounded-t-xl cursor-pointer"
				>
					<Image
						src={product.images.jpeg}
						layout="fill"
						alt=""
						objectFit="inherit"
						priority
					/>
				</div>

				<div className="flex px-2 flex-col justify-end sm:mb-0 sm:w-full ">
					<h4
						className="text-xs h-full sm:text-sm title"
						title={product.title}
					>
						{product.title}
					</h4>
					<h4 className="text-xs sm:text-sm h-full">
						price: {product.price}
					</h4>
				</div>

				<div className="flex w-full justify-center gap-4 sm:my-1 items-center">
					<button
						onClick={() => decrementQuantity(product.id)}
						disabled={itemQuantity === 0 ? true : false}
						className="w-10 h-full rounded-l-lg disabled:opacity-60"
					>
						<p className="text-xl font-bold pb-1">-</p>
					</button>

					<p className="text-xl border-b-2 font-bold  text-center flex items-center">
						{itemQuantity}
					</p>
					<button
						onClick={() => incrementQuantity(product.id)}
						className=" flex pb-1 justify-center items-center text-center  w-10 h-full rounded-r-lg"
					>
						<p className="text-xl font-bold">+</p>
					</button>
				</div>

				<button
					onClick={() => addProductItemToCart(product)}
					className="p-0.5 mt-2 sm:mt-0 sm:p-2 rounded-md w-full sm:h-10 bg-[#aff892] disabled:opacity-70 disabled:bg-red-400"
					disabled={itemQuantity === 0 ? true : false}
				>
					<p className="text-[11px] sm:text-lg text-[#212b38]">
						Add to cart
					</p>
				</button>
			</div>
		</>
	)
}

export default ProductItem
