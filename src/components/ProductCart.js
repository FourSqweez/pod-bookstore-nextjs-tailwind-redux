import React from 'react'

const ProductCart = () => {
	return (
		<div className="max-w-7xl mx-auto">
			{/* mobile */}
			<div className="md:hidden mt-10 min-w-[280px] sm:mx-10 grid grid-cols-1 mx-2">
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
							<div className="w-64 xs:w-[24rem] sm:w-[28rem]">
								<h4 className="title" title="blaaaaa">
									Hary poter and the
									bbbbbbbfgfdgdgdgdfgdgdfgdgdfgfgdgfgdg
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
					<tbody>
						<tr>
							<td className="flex items-center w-[20rem] lg:w-[35rem] xl:w-[45rem] 2xl:w-[50rem]">
								<img src="" className="w-20 h-20" alt="" />
								<h4
									className="w-full items-center title"
									title="sjfkls"
								>
									Harry Potter Lorem ipsum dolor sit
									amet,jkgjhghhfgfgfgdgfdfgdfsddgfdfdfgdgfdfgdfdgfdfdfgdgfdgfd
								</h4>
							</td>
							<td>
								<h4>200</h4>
							</td>
							<td>
								<h4>1</h4>
							</td>
							<td className="">
								<h4>200</h4>
							</td>
							<td className="left-0">
								<h4>Delete</h4>
							</td>
						</tr>
					</tbody>

					<tbody className="">
						<tr>
							<td className="flex items-center">
								<img src="" className="w-20 h-20" alt="" />
								<h4 className="w-full items-center">Harry Potter</h4>
							</td>
							<td>
								<h4>200</h4>
							</td>
							<td>
								<h4>1</h4>
							</td>
							<td className="">
								<h4>200</h4>
							</td>
							<td className="left-0">
								<h4>Delete</h4>
							</td>
						</tr>
					</tbody>
				</table>
				<hr />
			</div>
		</div>
	)
}

export default ProductCart
