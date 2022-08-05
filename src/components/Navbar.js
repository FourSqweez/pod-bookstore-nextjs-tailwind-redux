import React from 'react'
import Search from './Search'
import { MdShoppingCart as CardIcon } from 'react-icons/md'

const Navbar = () => {
	return (
		<div className="flex w-full">
			<Search />
			<div className="relative clicked h-full mr-2 sm:mr-10 flex w-16 cursor-pointer">
				<span className="absolute bottom-1 right-2  h-6 w-6 bg-[#9dcaf8] text-center rounded-full text-black font-bold">
					{/* {items.length} */} 4
				</span>
				<CardIcon className="w-28 h-12" />
			</div>
		</div>
	)
}

export default Navbar
