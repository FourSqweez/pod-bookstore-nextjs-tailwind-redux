import React from 'react'
import Search from './Search'
import { MdShoppingCart as CardIcon } from 'react-icons/md'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const MyButtonHome = React.forwardRef(({ onClick, href }, ref) => {
	return (
		<a href={href} onClick={onClick} ref={ref}>
			<div>
				<h3 className="text-2xl">Little Brown</h3>
				<h3 className="text-2xl">Book Shop.</h3>
			</div>
		</a>
	)
})

const CartButton = React.forwardRef(({ onClick, href }, ref) => {
	return (
		<a href={href} onClick={onClick} ref={ref} className="w-full">
			<CardIcon className="w-full h-full" />
		</a>
	)
})

const Navbar = () => {
	const router = useRouter()
	const cart = useSelector((state) => state.cart)
	console.log('Router :', router.asPath)

	return (
		<div className="flex w-full mt-5">
			<div className="hidden sm:flex pl-10 mb-3 w-48 whitespace-nowrap cursor-pointer">
				<Link href="/" passHref>
					<MyButtonHome />
				</Link>
			</div>
			<div className="w-full mx-3">
				{router && router.asPath == '/checkout' ? '' : <Search />}
			</div>

			<div className="relative clicked h-full mr-2 sm:mr-10 flex w-16 cursor-pointer">
				<span className="absolute bottom-1 right-0  h-6 w-6 bg-[#9dcaf8] text-center rounded-full text-black font-bold">
					{cart.length === 0 ? 0 : cart.map(item => item.quantity)}
				</span>
				<Link href="/checkout" passHref>
					<CartButton />
				</Link>
			</div>
		</div>
	)
}

export default Navbar
