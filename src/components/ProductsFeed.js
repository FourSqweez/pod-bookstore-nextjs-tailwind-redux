import React from 'react'
import ProductItem from './ProductItem'

const ProductsFeed = ({ books }) => {
	return (
		<div className="m-w-7xl">
			<div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-8 place-items-center">
				{books &&
					books.map((product) => (
						<ProductItem product={product} key={product.id} />
					))}
			</div>
		</div>
	)
}

export default ProductsFeed
