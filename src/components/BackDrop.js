import { useRouter } from 'next/router'
import React from 'react'

const BackDrop = ({ setBackdropIsOpen }) => {
	const router = useRouter()
	return (
		<>
			<div className="back-drop" />
			<div className="flex h-full sm:py-5 w-full mt-32">
				<div className="flex h-full w-full justify-center">
					<div className="w-full max-w-[50rem] flex flex-col justify-center mx-5 h-auto min-h-[15rem] min-w-[20rem] sm:min-h-[20rem] px-5 bg-slate-300 rounded-md">
						<h2 className="text-center mb-5">Bill</h2>
						<div className="flex justify-between ">
							<h3 className="w-full">Order</h3>
							<h3 className="w-full text-end">bla bla</h3>
						</div>
						<div className=" flex h-auto pb-2 flex-col justify-between">
							<div className="flex h-full justify-between">
								<div className="w-full mr-2">something</div>
								<div>1997</div>
							</div>

							<div className="flex justify-center mt-14">
								<button
									onClick={() => {
										router.replace('/')
										setBackdropIsOpen(false)
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

export default BackDrop
