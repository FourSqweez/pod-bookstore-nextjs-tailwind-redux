import React from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addToCart } from '../app/slices/cartSlice' 

const ProductItem = ({ product }) => {
	const dispatch = useDispatch()

	const addProductItemToCart = () => {
		dispatch(addToCart(product))
	}

	return (
		<div className="w-40 h-full border-2 hover:border-[#F692B2] bg-[#ffd580] sm:w-48 sm:h-full overflow-hidden rounded-xl hover:opacity-100 hover:shadow-slate-200 hover:shadow-lg hover:scale-110 duration-200 ease-ou">
			<div className="h-52 w-full sm:h-60 sm:w-full relative overflow-hidden rounded-t-xl">
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
				<button className="w-10 h-full rounded-l-lg">
					<p className="text-xl font-bold pb-1">-</p>
				</button>
				<p className="text-xl border-b-2 font-bold  text-center flex items-center">
					1
				</p>
				<button className=" flex pb-1 justify-center items-center text-center  w-10 h-full rounded-r-lg">
					<p className="text-xl font-bold">+</p>
				</button>
			</div>

			<button
				onClick={addProductItemToCart}
				className="p-0.5 mt-2 sm:mt-0 sm:p-2 rounded-md w-full sm:h-10 bg-[#aff892]"
			>
				<p className="text-[11px] sm:text-lg text-[#212b38]">Add to cart</p>
			</button>
		</div>
	)
}

export default ProductItem
