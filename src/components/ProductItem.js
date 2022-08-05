import React from 'react'

const ProductItem = () => {
	return (
		<div className="flex hover:border-2 w-full sm:w-48 h-64 sm:h-96 flex-col items-center justify-center overflow-hidden rounded-xl hover:opacity-100 hover:shadow-slate-200 hover:shadow-lg transition duration-200 ease-ou">
			<div className="w-full h-full flex flex-col justify-self-center items-center ">
				<img className="w-full h-full sm:h-40" src="test.jpg" alt="" />
			</div>
			<div className="h-10 sm:h-1 my-2 sm:mb-0 text-center">
				<h3 className="text-xs sm:text-xl sm:mt-2">bookname</h3>
				<h2 className="text-xs sm:text-lg ">price: 200 bath</h2>
			</div>

			<div className="flex h-14 p-3 sm:h-30 sm:mt-20 sm:h-20 w-full justify-evenly items-center ">
				<button className="w-10 h-full rounded-l-lg">
					<p className="text-xl">-</p>
				</button>
				<p className="text-xl p-0.5 sm:p-3 mx-1 h-full border-b-2  text-center flex items-center">
					1
				</p>
				<button className=" flex justify-center items-center text-center  w-10 h-full rounded-r-lg">
					<p className="text-xl">+</p>
				</button>
			</div>

			<div className="w-full">
				<button className="p-0.5 sm:p-3 rounded-md w-full bg-[#FFB86C]">
					<p className="text-[11px] sm:text-lg text-[#212b38]">
						Add to cart
					</p>
				</button>
			</div>
		</div>
	)
}

export default ProductItem
