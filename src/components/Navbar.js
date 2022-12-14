import React, { useContext } from 'react'
import { MdShoppingCart as CardIcon } from 'react-icons/md'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import SearchInput from './SearchInput'
import { ModalContext } from '../context/context'

const CartButton = React.forwardRef(({ onClick, href }, ref) => {
	const quantity = useSelector((state) => state.cart.map((q) => q.quantity))
	const totalAmounts = quantity.reduce(
		(accumulator, amount) => accumulator + amount,
		0
	)
	return (
		<div
			onClick={onClick}
			className="relative clicked h-full mr-2 sm:mr-10 flex w-16 cursor-pointer "
		>
			<span className="absolute bottom-1 pt-1 right-1 h-8 w-8 bg-[#ffbb8a] text-center rounded-full text-black font-bold">
				{totalAmounts === 0 ? 0 : totalAmounts}
			</span>
			<a href={href} ref={ref} className="w-16">
				<CardIcon className="w-full h-full" />
			</a>
		</div>
	)
})

CartButton.displayName = 'CartButton'

const Navbar = () => {
	const router = useRouter()
	const { isModalOpen } = useContext(ModalContext)
	return (
		<div className="mx-auto">
			{isModalOpen ? (
				''
			) : (
				<div className="flex h-16 w-full mt-5 mb-7 sm:justify-between items-center">
					<div className="hidden sm:flex ml-10 whitespace-nowrap cursor-pointer">
						<Link href="/" passHref>
							<h3 className="text-2xl">
								Little Brown <br /> Book Shop.
							</h3>
						</Link>
					</div>
					{router && router.asPath == '/checkout' ? (
						<div className="sm:hidden ml-4 whitespace-nowrap cursor-pointer">
							<Link href="/" passHref>
								<h3 className="text-2xl">
									Little Brown <br /> Book Shop.
								</h3>
							</Link>
						</div>
					) : (
						<>
							<SearchInput />
							<Link href="/checkout" passHref>
								<CartButton />
							</Link>
						</>
					)}
				</div>
			)}
		</div>
	)
}

export default Navbar
