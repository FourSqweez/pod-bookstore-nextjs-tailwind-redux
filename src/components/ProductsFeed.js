import React from 'react'
import ProductItem from './ProductItem'

const ProductsFeed = ({ books }) => {
	const booksAndQuantity = books.map((book) => {
		return { quantity: 0, ...book }
	})

	const handleProps = () => {
		return booksAndQuantity.map((product) => {
			return (
				<ProductItem
					booksAndQuantity={booksAndQuantity}
					product={product}
					key={product.id}
				/>
			)
		})
	}

	return (
		<div className="m-w-7xl">
			<div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-8 place-items-center">
				{books && handleProps()}
			</div>
		</div>
	)
}

export default ProductsFeed
