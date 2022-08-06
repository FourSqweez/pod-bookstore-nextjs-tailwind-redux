import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const ProductCart = () => {
	// Extracting cart state from redux store
	const cart = useSelector((state) => state.cart)
	const [paid, setPaid] = useState(0)

	console.log('Cart Test : ', cart)

	// Reference to the dispatch function from redux store
	const dispatch = useDispatch()

	const handlePaid = (e) => {
		setPaid(e.target.value)
	}

	const getTotalPrice = () => {
		return cart
			.reduce(
				(accumulator, item) => accumulator + item.quantity * item.price,
				0
			)
			.toFixed(2)
	}
	const getDiscount = () => {
		return 100
	}

	const getSummary = () => {
		return getTotalPrice() - getDiscount().toFixed(2)
	}

	const getChang = () => {
		return (paid - getSummary()).toFixed(2)
	}

	return (
		<div className="max-w-7xl mx-auto mb-10">
			{cart.length === 0 ? (
				<h1>Your Cart is Empty!</h1>
			) : (
				<>
					{/* mobile */}
					<div className="md:hidden mt-10 min-w-[280px] sm:mx-10 grid grid-cols-1 mx-2">
						<p className="underline font-bold text-3xl text-center mb-5">
							Cart Summary
						</p>

						{/* loop */}
						{cart &&
							cart.map((item) => (
								<div key={item.id}>
									<div className="flex justify-between h-20 items-center last:border-b-black border-b-2 last:mb-5 md:border-none">
										<div className="flex w-full h-full items-center ml-2 mr-1">
											<div className="mr-2">
												<Image
													layout="fill"
													alt=""
													objectFit="inherit"
													priority
													src={item.images}
												/>
											</div>
											<div className="w-64 xs:w-[24rem] sm:w-[28rem]">
												<h4 className="title" title="blaaaaa">
													{item.title}
												</h4>
												<h4>{item.price}</h4>
											</div>
										</div>
										<div>
											<div className="w-10 text-center">dd</div>
											<div className="w-10 text-center">1</div>
										</div>
									</div>
								</div>
							))}
						{/* end loop */}
						<div className="flex justify-between ">
							<div className="flex flex-col items-end gap-2 w-full pr-3">
								<h3 className="">Special Discount : </h3>
								<h3 className=" ">Summary : </h3>
								<h3 className="">Paid : </h3>
								<h3 className=" ">Change : </h3>
							</div>
							<div className="flex flex-col items-end gap-2 w-auto mr-3">
								<h3>40</h3>
								<h3>560</h3>
								<input className="w-20 px-2 rounded-sm" type="text" />
								<h3>440</h3>
							</div>
						</div>
						<div className="flex justify-end mt-3 ">
							<button className="rounded-md px-6 py-1.5">
								Checkout
							</button>
						</div>
					</div>

					{/* desktop */}
					<div className="hidden md:flex flex-col mx-10 mt-10 ">
						<div className="w-full">
							<p className="underline font-bold  text-3xl mb-5 ">
								Cart Summary
							</p>
						</div>

						<table className="table-auto text-left">
							<thead>
								<tr>
									<th className="w-40">Product</th>
									<th className="w-24">Price</th>
									<th className="w-24">Amount</th>
									<th className="w-24">Total Price</th>
									<th className="w-16"></th>
								</tr>
							</thead>
							{cart &&
								cart.map((item) => (
									<>
										<tbody>
											<tr>
												<td className="flex items-center w-[20rem] lg:w-[35rem] xl:w-[45rem] 2xl:w-[50rem]">
													<div className="h-full w-full sm:h-32 sm:w-32 relative  overflow-hidden rounded-xl">
														<Image
															src={item.images.jpeg}
															layout="fill"
															alt=""
															objectFit="inherit"
															priority
														/>
													</div>
													<h4
														className="w-full pl-2 items-center title"
														title={item.title}
													>
														{item.title}
													</h4>
												</td>
												<td>
													<h4>{item.price}</h4>
												</td>
												<td>
													<h4>{item.quantity}</h4>
												</td>
												<td className="">
													<h4>{item.quantity * item.price}</h4>
												</td>
												<td className="left-0">
													<h4>Delete</h4>
												</td>
											</tr>
										</tbody>
									</>
								))}
						</table>

						<hr />

						<div className="flex justify-between">
							<div className="flex flex-col items-end gap-2 w-full pr-12">
								<h3 className="text-2xl">Total : </h3>
								<h3 className="text-2xl">Special Discount : </h3>
								<h3 className="text-2xl">Summary : </h3>
								<h3 className="text-2xl">Paid : </h3>
								<h3 className="text-2xl">Change : </h3>
							</div>
							<div className="flex flex-col items-end gap-2 w-auto mr-3">
								<h3 className="text-2xl">{getTotalPrice()}</h3>
								<h3 className="text-2xl">{getDiscount()}</h3>
								<h3 className="text-2xl">{getSummary()}</h3>
								<input
									onChange={handlePaid}
									className="w-24 px-2 rounded-sm border-2 border-gray-400"
									type="text"
								/>
								<h3 className="text-2xl">
									{paid === 0 ? 0 : getChang()}
								</h3>
							</div>
						</div>

						<div className="flex justify-end mt-3 ">
							<button className="rounded-md px-6 py-1.5">
								Checkout
							</button>
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default ProductCart
