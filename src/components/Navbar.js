import React from 'react'
import { MdShoppingCart as CardIcon } from 'react-icons/md'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import SearchInput from './SearchInput'

const CartButton = React.forwardRef(({ onClick, href }, ref) => {
	const quantity = useSelector((state) => state.cart.map((q) => q.quantity))

	const totalAmounts = quantity.reduce(
		(accumulator, amount) => accumulator + amount,
		0
	)
	console.log(`Total amount : ${totalAmounts}`)

	console.log('quantity ', quantity)
	return (
		<div
			onClick={onClick}
			className="relative clicked h-full mr-2 sm:mr-10 flex w-16 cursor-pointer"
		>
			<span className="absolute bottom-1 right-1 h-6 w-6 bg-[#9dcaf8] text-center rounded-full text-black font-bold">
				{totalAmounts === 0 ? 0 : totalAmounts}
			</span>
			<a href={href} ref={ref} className="w-16">
				<CardIcon className="w-full h-full" />
			</a>
		</div>
	)
})

const Navbar = () => {
	const router = useRouter()
	const cart = useSelector((state) => state.cart)
	console.log('Router :', router.asPath)

	return (
		<div className="flex h-full w-full mt-5 justify-between items-center">
			<div className="hidden sm:flex pl-10 mb-3 w-48 whitespace-nowrap cursor-pointer">
				<Link href="/" passHref>
					<h3 className="text-2xl">
						Little Brown <br /> Book Shop.
					</h3>
				</Link>
			</div>
			{router && router.asPath == '/checkout' ? '' : <SearchInput />}
			<Link href="/checkout" passHref>
				<CartButton />
			</Link>
		</div>
	)
}

export default Navbar
