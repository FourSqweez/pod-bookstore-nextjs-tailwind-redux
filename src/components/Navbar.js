import React from 'react'
import Search from './Search'
import { MdShoppingCart as CardIcon } from 'react-icons/md'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Navbar = () => {
	const router = useRouter()
	console.log('Router :', router.asPath)

	return (
		<div className="flex w-full mt-5">
			<div className="hidden sm:flex pl-10 mb-3 w-48 whitespace-nowrap cursor-pointer">
				<Link href="/">
					<div>
						<h3 className="text-2xl">Little Brown</h3>
						<h3 className="text-2xl">Book Shop.</h3>
					</div>
				</Link>
			</div>
			<div className="w-full">
				{router && router.asPath == '/checkout' ? '' : <Search />}
			</div>

			<div className="relative clicked h-full mr-2 sm:mr-10 flex w-16 cursor-pointer">
				<span className="absolute bottom-1 right-2  h-6 w-6 bg-[#9dcaf8] text-center rounded-full text-black font-bold">
					{/* {items.length} */} 4
				</span>
				<Link href="/checkout">
					<CardIcon className="w-28 h-12" />
				</Link>
			</div>
		</div>
	)
}

export default Navbar
