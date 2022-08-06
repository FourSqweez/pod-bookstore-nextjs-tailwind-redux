import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
	return (
		<div className="mb-10 w-full flex justify-center">
			<div className="flex w-full lg:w-screen max-w-3xl items-center">
				<div className="flex w-full items-center border-2 border-black rounded-xl py-1 md:shadow-sm">
					<FaSearch className="w-8 md:inline-flex h-8 text-gray-400 rounded-full p-2 mx-2" />
					<input
						// value={searchInput}
						// onChange={(e) => setSearchInput(e.target.value)}
						type="text"
						// placeholder={placeholder || 'Start your search'}
						className="w-full self-center pb-1 pr-5 bg-transparent outline-none text-2xl text-black placeholder-gray-400"
					/>
				</div>
			</div>
		</div>
	)
}

export default Search
