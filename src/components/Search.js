import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
	return (
		<div className="mb-10 mr-3">
			<div className="flex w-full sm:w-96 lg:w-screen max-w-3xl mx-auto  items-center">
				<div className="flex sm:w-full items-center border-2 rounded-full py-1 md:shadow-sm">
					<FaSearch className="w-8 md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 mx-2" />
					<input
						// value={searchInput}
						// onChange={(e) => setSearchInput(e.target.value)}
						type="text"
						// placeholder={placeholder || 'Start your search'}
						className="w-full self-center pb-1 pr-5 bg-transparent outline-none text-2xl text-gray-300 placeholder-gray-400"
					/>
				</div>
			</div>
		</div>
	)
}

export default Search
