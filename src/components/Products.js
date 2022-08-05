import React from 'react'
import ProductItem from './ProductItem'

const Products = () => {
	return (
		<div className="max-w-7xl">
			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-2 place-items-center">
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
			</div>
		</div>
	)
}

export default Products
