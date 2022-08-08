import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchInput = () => {
	const router = useRouter()
	const [searchInput, setSearchInput] = useState('')

	const handleChang = async (e) => {
		e.preventDefault()
		setSearchInput(e.target.value)
		await router.push({
			pathname: '/',
			query: {
				searchInput,
				setSearchInput,
			},
		})
	}

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			// router.push({
			// 	pathname: '/',
			// 	query: {
			// 		searchInput,
			// 		setSearchInput,
			// 	},
			// })
		}
	}

	return (
		<div className="w-full mx-3 h-11 flex justify-center">
			<div className="flex max-w-3xl w-full items-center border-2 border-black rounded-xl py-1 md:shadow-sm">
				<FaSearch className="w-8 md:inline-flex h-8 text-gray-400 rounded-full p-2 mx-2" />
				<input
					value={searchInput}
					onChange={handleChang}
					onKeyUp={handleKeyPress}
					type="text"
					placeholder={'Start your search'}
					className="w-full self-center pb-1 pr-5 bg-transparent outline-none text-2xl text-black placeholder-gray-400"
				/>
			</div>
		</div>
	)
}

export default SearchInput
