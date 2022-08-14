import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAll } from '../app/slices/cartSlice'

const Bill = ({
	setBackdropIsOpen,
	getTotalPrice,
	getSummary,
	getDiscount,
	paid,
	getChang,
}) => {
	const cart = useSelector((state) => state.cart)
	const dispatch = useDispatch()
	const router = useRouter()
	return (
		<>
			<div className="back-drop" />
			<div className="flex h-full sm:py-5 w-full">
				<div className="flex h-full w-full justify-center">
					<div className="w-full max-w-[50rem] flex flex-col justify-center mx-5 h-auto min-h-[15rem] min-w-[20rem] sm:min-h-[20rem] px-5 bg-slate-300 rounded-md">
						<h2 className="text-center mb-5">Bill</h2>
						<div className="flex justify-between ">
							<h3 className="w-full">Items</h3>
							<div className="flex w-full">
								<h3 className="w-full text-end">Price</h3>
								<h3 className="w-full text-end">Amount</h3>
								<h3 className="w-full text-end">Total Price</h3>
							</div>
						</div>
						<div className=" flex h-auto pb-2 flex-col justify-between">
							{cart &&
								cart.map((item) => (
									<div className="flex h-full justify-between">
										<div className="w-full title" title={item.title}>
											{item.title}
										</div>
										<div className="flex w-full justify-end">
											<div className="w-full text-end">
												{item.price}
											</div>
											<div className="w-full text-end pr-2">
												{item.quantity}
											</div>
											<div className="w-full text-end">
												{item.price * item.quantity}
											</div>
										</div>
									</div>
								))}
							<hr />

							<div className="flex justify-end gap-28">
								<div className="flex flex-col items-end w-full">
									<h4>Total :</h4>
									<h4>Discount :</h4>
									<h4>Summary :</h4>
									<h4>Paid :</h4>
									<h4>Chang :</h4>
								</div>
								<div className="text-end">
									<p>{getTotalPrice()}</p>
									<p>{getDiscount()}%</p>
									<p>{getSummary()}</p>
									<p>{paid}</p>
									<p>{getChang()}</p>
								</div>
							</div>
							<div className="flex justify-center mt-14">
								<button
									onClick={() => {
										router.replace('/')
										setBackdropIsOpen(false)
										dispatch(removeAll())
									}}
									className="button w-40 p-3"
								>
									back to shop
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Bill
