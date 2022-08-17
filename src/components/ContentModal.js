import Image from 'next/image'
import React from 'react'

const ContentModal = ({ handleModal, book }) => {
	const { title, author, description, images, price } = book
	return (
		<>
			<div onClick={() => handleModal()} className="back-drop" />
			<div className="flex h-screen justify-center items-center">
				<div className="sm:top-[160px] border-4 border-[#F692B2] rounded-xl bg-[#ffd7bc] w-[280px] h-[520px] sm:w-[680px] sm:h-[420px] text-black">
					<div className="sm:flex w-full h-full sm:justify-center sm:items-center p-2 sm:p-5 gap-2 ">
						<div className="h-48 w-36 sm:h-full sm:w-96 relative overflow-hidden mx-auto">
							<Image
								src={images.jpeg}
								layout="fill"
								alt=""
								objectFit="inherit"
								priority
							/>
						</div>
						<div className="w-full flex flex-col gap-2 max-h-full">
							<p>
								<b>Title : </b>
								{title}
							</p>
							<p>
								<b>Author : </b>
								{author}
							</p>
							<div className="w-full sm:min-h-fit max-h-48 sm:max-h-fit overflow-y-scroll">
								<p>
									<b>Description : </b>
									{description}
								</p>
							</div>
							<p>
								<b>Price : </b>
								{price}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ContentModal
