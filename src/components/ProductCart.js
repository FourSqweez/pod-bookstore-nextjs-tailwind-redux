import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDeleteForever } from 'react-icons/md'
import { removeFromCart } from '../app/slices/cartSlice'
import { useRouter } from 'next/router'
import Bill from './Bill'

const ProductCart = () => {
	const dispatch = useDispatch(removeFromCart())
	const [paid, setPaid] = useState(0)
	const router = useRouter()
	const [backdropIsOpen, setBackdropIsOpen] = useState(false)
	console.log('Back Drop : ', backdropIsOpen)

	const removeProductItemFromCart = (id) => {
		dispatch(removeFromCart(id))
	}

	// Extracting cart state from redux store
	const cart = useSelector((state) => state.cart)
	//console.log("Item cart: ", cart)
	const quantity = useSelector((state) => state.cart.map((q) => q.quantity))

	const booksCartId = cart.map((book) => book.id)
	//console.log('Cart Type is : ', typeof booksCartId, booksCartId)

	const a = [1001, 1002, 1003]
	//console.log('a Type is : ', typeof a, a)

	const promotions = useSelector((state) => state.promotions)
	const promotion = promotions.map((p) => p)
	const promotion1Id = promotion.map((p) => p[0].id)
	const totalAmounts = quantity.reduce(
		(accumulator, amount) => accumulator + amount,
		0
	)

	const promotionHarryId = promotion.map((p) => p[0].id).toString()
	// const promotion4Free1Id = promotion.map((p) => p[1].id).toString()
	const [promotionHarryBookTargetIds] = promotion.map((p) => p[0].targetIds)
	const productIntersectionPromotionHarry = booksCartId?.filter((x) =>
		(promotionHarryBookTargetIds || []).includes(x)
	)

	const handleBackDrop = () => {
		setBackdropIsOpen(true)
	}

	// const [promotion4Free1BookTargetIds] = promotion.map((p) => p[1].targetIds)
	// if (Array.isArray(booksCartId)) {
	// 	const productIntersectionPromotionHarry = booksCartId.filter((x) =>
	// 		promotionHarryBookTargetIds.includes(x)
	// 	)
	// }

	// const productIntersectionPromotion4Free1 = booksCartId.filter((x) =>
	// 	promotion4Free1BookTargetIds.includes(x)
	// )

	// console.log(`Total amount : ${totalAmounts}`)

	// console.log('quantity ', quantity)

	// //console.log('promotion ', promotions)

	// //console.log('Cart Test : ', cart)

	// //console.log('promotion', promotion)

	// console.log('booksCartId :', booksCartId)

	//console.log('promotionId', promotion1Id)

	//console.log('TargetId : ',targetIds)

	// console.log('promotionHarryId : ', promotionHarryId)

	// console.log('promotion4Free1Id : ', promotion4Free1Id)

	// console.log('promotionHarryBookTargetId: ', promotionHarryBookTargetIds)

	// console.log('promotionHarryBookTargetId: ', promotionHarryBookTargetIds)
	// console.log(
	// 	'productIntersectionPromotionHarry: ',
	// 	productIntersectionPromotionHarry
	// )

	// console.log(
	// 	'productIntersectionPromotion4Free1: ',
	// 	productIntersectionPromotion4Free1
	// )

	const handlePaid = (e) => {
		setPaid(e.target.value)
	}

	const getTotalPrice = () => {
		return parseFloat(
			cart.reduce(
				(accumulator, item) => accumulator + item.quantity * item.price,
				0
			)
		)
	}

	const getDiscount = () => {
		if (booksCartId.length != 0) {
			if (promotionHarryId === '9001') {
				//console.log(' calculateHarry')
				if (productIntersectionPromotionHarry) {
					const discount = 0
					switch (productIntersectionPromotionHarry.length) {
						case 2:
							discount = 10
							break
						case 3:
							discount = 11
							break
						case 4:
							discount = 12
							break
						case 5:
							discount = 13
							break
						case 6:
							discount = 14
							break
						case 7:
							discount = 15
							break
						default:
							discount = 0
					}
					return discount
				}
			}
		}
		return 0
	}

	// const get4Free1 = () => {}

	const getSummary = () => {
		return getTotalPrice() - (getTotalPrice() * getDiscount()) / 100
	}

	const getChang = () => {
		return parseFloat(paid - getSummary()).toFixed(2)
	}

	return (
		<div className="pb-10">
			{backdropIsOpen === true ? (
				<Bill
					setBackdropIsOpen={setBackdropIsOpen}
					backdropIsOpen={backdropIsOpen}
					getTotalPrice={getTotalPrice}
					getSummary={getSummary}
					getDiscount={getDiscount}
					paid={paid}
					getChang={getChang}
				/>
			) : (
				<div className="max-w-7xl mx-auto ">
					{cart.length === 0 ? (
						<div className="flex flex-col mt-60 items-center justify-center gap-4">
							<h2 className="flex text-center justify-center">
								Your Cart is Empty!
							</h2>

							<button
								onClick={() => router.replace('/')}
								className="button p-4 font-bold"
							>
								Shop Now
							</button>
						</div>
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
											<div className="flex justify-between h-20 items-center last:mb-5 md:border-none">
												<div className="flex w-96 sm:w-full h-full items-center ml-2">
													<div className="mr-2 h-full w-20 sm:h-full relative  overflow-hidden rounded-md">
														<Image
															layout="fill"
															alt=""
															objectFit="inherit"
															priority
															src={item.images.jpeg}
														/>
													</div>
													<div className="w-full xs:w-[24rem] sm:w-[28rem]">
														<h4
															className="title w-40 xs:w-80 sm:w-full"
															title={item.title}
														>
															{item.title}
														</h4>
														<h4>{item.price}</h4>
													</div>
												</div>
												<div>
													<MdDeleteForever
														onClick={() =>
															removeProductItemFromCart(item.id)
														}
														className="w-full h-12 cursor-pointer"
													/>
													<div className="w-full h-full text-xl font-bold text-center ">
														{item.quantity}
													</div>
												</div>
											</div>
										</div>
									))}
								{/* end loop */}
								<hr />
								<div className="flex justify-between ">
									<div className="flex flex-col items-end gap-2 w-full pr-3">
										<h3>Total : </h3>
										<h3>Special Discount : </h3>
										<h3>Summary : </h3>
										<h3>Paid : </h3>
										<h3>Change : </h3>
									</div>
									<div className="flex flex-col items-end gap-2 w-auto mr-3 justify-between">
										<h3>{getTotalPrice()}</h3>
										<h3>{getDiscount()}</h3>
										<h3>{getSummary()}</h3>
										<input
											onChange={handlePaid}
											className="w-20 px-2 rounded-sm text-xl border-2 border-gray-400"
											type="text"
										/>
										<h3>{getChang()}</h3>
									</div>
								</div>
								<div className="flex justify-end mt-3 ">
									<button
										onClick={() => handleBackDrop()}
										className="rounded-md px-6 py-1.5 disabled:opacity-70 disabled:bg-red-400"
										disabled={paid >= getSummary() ? false : true}
									>
										Checkout
									</button>
								</div>
							</div>

							{/* desktop */}
							<div className="hidden md:flex flex-col mx-10 mt-10">
								<div className="w-full">
									<p className="underline font-bold  text-3xl mb-5 ">
										Cart Summary
									</p>
								</div>

								<table className="table-auto text-left">
									<thead>
										<tr>
											<th className="w-24 text-xl">Product</th>
											<th className="w-24 text-xl">Price</th>
											<th className="w-24 text-xl">Amount</th>
											<th className="w-26 text-xl">Total Price</th>
											<th className="w-16 text-xl"></th>
										</tr>
									</thead>
									{cart &&
										cart.map((item) => (
											<tbody key={item.id}>
												<tr>
													<td className="flex items-center w-[20rem] lg:w-[35rem] xl:w-[45rem] 2xl:w-[50rem]">
														<div className="h-36 w-40 text-2xl relative  overflow-hidden rounded-xl">
															<Image
																src={item.images.jpeg}
																layout="fill"
																alt=""
																objectFit="inherit"
																priority
															/>
														</div>
														<h4
															className="w-full pl-2 items-center title text-2xl"
															title={item.title}
														>
															{item.title}
														</h4>
													</td>
													<td>
														<h4 className="text-xl">
															{item.price}
														</h4>
													</td>
													<td>
														<h4 className="text-xl">
															{item.quantity}
														</h4>
													</td>
													<td className="">
														<h4 className="text-xl">
															{item.quantity * item.price}
														</h4>
													</td>
													<td className="left-0">
														<MdDeleteForever
															onClick={() =>
																removeProductItemFromCart(
																	item.id
																)
															}
															className="w-full h-full cursor-pointer"
														/>
													</td>
												</tr>
											</tbody>
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
										<h3 className="text-2xl">{getDiscount()}%</h3>
										<h3 className="text-2xl">{getSummary()}</h3>
										<input
											onChange={handlePaid}
											className="w-24 px-2 rounded-sm border-2 border-gray-400 text-xl"
											type="text"
										/>
										<h3 className="text-2xl">
											{paid === 0 ? 0 : getChang()}
										</h3>
									</div>
								</div>

								<div className="flex justify-end mt-3 ">
									<button
										onClick={() => handleBackDrop()}
										className="rounded-md px-6 py-1.5 disabled:opacity-70 disabled:bg-red-400"
										disabled={paid >= getSummary() ? false : true}
									>
										Checkout
									</button>
								</div>
							</div>
						</>
					)}
				</div>
			)}
		</div>
	)
}

export default ProductCart
