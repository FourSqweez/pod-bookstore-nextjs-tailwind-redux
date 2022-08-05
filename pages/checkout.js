import React from 'react'

const Checkout = () => {
	return (
		<>
        {/* mobile */}
			<div className="sm:hidden mt-10 min-w-[280px] sm:mx-10 grid grid-cols-1 mx-2">
				<div>
					<p className="underline font-bold text-3xl text-center mb-5">
						Cart Summary
					</p>

                    {/* loop */}
					<div className="flex justify-between h-20 items-center last:border-b-black border-b-2 last:mb-5 md:border-none">
						<div className="flex w-full h-full items-center ml-2 mr-1">
							<div className="mr-2">
								<img className="w-12 h-12" src="" alt="" />
							</div>
							<div className="w-60">
								<h4 className="title" title="blaaaaa">
									Hary poter and the bbbbbbbfgfdgdgdgdfgdgdfgdgd
								</h4>
								<h4>200</h4>
							</div>
						</div>
						<div>
							<div className="w-10 text-center">dd</div>
							<div className="w-10 text-center">1</div>
						</div>
					</div>
				</div>

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
					<button className="rounded-md px-6 py-1.5">Checkout</button>
				</div>
			</div>

            {/* desktop */}

            <div className="sm:hidden mt-10 min-w-[280px] sm:mx-10 grid grid-cols-1 mx-2">
				<div>
					<p className="underline font-bold text-3xl text-center mb-5">
						Cart Summary
					</p>

                    {/* loop */}
					<div className="flex justify-between h-20 items-center last:border-b-black border-b-2 last:mb-5 md:border-none">
						<div className="flex w-full h-full items-center ml-2 mr-1">
							<div className="mr-2">
								<img className="w-12 h-12" src="" alt="" />
							</div>
							<div className="w-60">
								<h4 className="title" title="blaaaaa">
									Hary poter and the bbbbbbbfgfdgdgdgdfgdgdfgdgd
								</h4>
								<h4>200</h4>
							</div>
						</div>
						<div>
							<div className="w-10 text-center">dd</div>
							<div className="w-10 text-center">1</div>
						</div>
					</div>
				</div>

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
					<button className="rounded-md px-6 py-1.5">Checkout</button>
				</div>
			</div>
		</>
	)
}

export default Checkout
