import { useSelector } from 'react-redux'

const state = store.getState()

const promotions = useSelector((state) => state.promotions)
//console.log('promotion ', promotions)
// export const calculateDiscountHelper = (promotions, booksCartId) => {
const cart = useSelector((state) => state.cart)
const quantity = useSelector((state) => state.cart.map((q) => q.quantity))
//console.log('Cart Test : ', cart)

const booksCartId = cart.map((book) => book.id)
console.log('bookId :', booksCartId)

const totalAmounts = quantity.reduce(
	(accumulator, amount) => accumulator + amount,
	0
)
console.log(`Total amount : ${totalAmounts}`)

console.log('quantity ', quantity)

const promotion = promotions.map((p) => p)

//console.log('promotion', promotion)

console.log('booksCartId :', booksCartId)

const promotion1Id = promotion.map((p) => p[0].id)
//console.log('promotionId', promotion1Id)

export const promotionHarryId = promotion.map((p) => p[0].id).toString()
export const promotion4Free1Id = promotion.map((p) => p[1].id).toString()

console.log('promotionHarryId : ', promotionHarryId)

console.log('promotion4Free1Id : ', promotion4Free1Id)

export const [promotionHarryBookTargetIds] = promotion.map(
	(p) => p[0].targetIds
)
console.log('promotionHarryBookTargetId: ', promotionHarryBookTargetIds)

export const [promotion4Free1BookTargetIds] = promotion.map(
	(p) => p[1].targetIds
)
console.log('promotionHarryBookTargetId: ', promotionHarryBookTargetIds)

// const [pTargetId] = promotionHarryBookTargetIds
// console.log('pTargetId : ', pTargetId)

export const productIntersectionPromotionHarry = booksCartId.filter((x) =>
	promotionHarryBookTargetIds.includes(x)
)
console.log(
	'productIntersectionPromotionHarry: ',
	productIntersectionPromotionHarry
)

export const productIntersectionPromotion4Free1 = booksCartId.filter((x) =>
	promotion4Free1BookTargetIds.includes(x)
)
console.log(
	'productIntersectionPromotion4Free1: ',
	productIntersectionPromotion4Free1
)

// }
