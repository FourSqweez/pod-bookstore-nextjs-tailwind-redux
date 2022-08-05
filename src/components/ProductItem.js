import React from 'react'
import imgTest from '../../public/assets/images/test.jpg'

const ProductItem = () => {
	return (
		<div className="flex w-full sm:w-48 h-56 sm:h-96 flex-col items-center justify-center rounded-xl border border-red-500">
			<div className="w-full h-20 sm:h-40 flex flex-col justify-self-center items-center border border-yellow-600">
				<img
					className="border border-green-400 w-full h-20 sm:h-40"
					src="test.jpg"
					alt=""
				/>
			</div>
			<div className="h-10 sm:h-1 my-2 sm:mb-0 text-center">
				<h3 className="text-xs sm:text-xl sm:mt-2">bookname</h3>
				<h2 className="text-xs sm:text-lg ">price: 200 bath</h2>
			</div>

			<div className="flex h-30 p-3 sm:mt-20 sm:h-20 w-full justify-evenly items-center border-2">
				<button className="border-2  border-blue-400 w-10 h-10 rounded-l-lg">
					<p className="text-xl">-</p>
				</button>
				<p className="text-xl">1</p>
				<button className="border-2 flex justify-center items-center text-center border-blue-400 w-10 h-10 rounded-r-lg">
					<p className="text-xl">+</p>
				</button>
			</div>

			<div className="">
				<button className="p-1 sm:p-3 rounded-xl bg-[#FFB86C]">
					<p className="text-[11px] sm:text-lg text-[#212b38]">
						Add to cart
					</p>
				</button>
			</div>
		</div>
	)
}

export default ProductItem
