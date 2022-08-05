import React from 'react'
import Search from './Search'

const Navbar = () => {
	return (
		<div className="flex w-full justify-center">
			<div className="w-full">
				<Search />
			</div>

			<div className="">
				<div>Card</div>
				<div>Icon</div>
			</div>
		</div>
	)
}

export default Navbar
