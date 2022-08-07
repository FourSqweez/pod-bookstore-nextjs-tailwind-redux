export const calculateDiscountHelper = (promotions, booksCartId) => {
	const promotion = promotions.map((p) => p)
	//console.log('promotion', promotion)

	const promotion1Id = promotion.map((p) => p[0].id)
	//console.log('promotionId', promotion1Id)

	const promotionHarryType = promotion.map((p) => p[0].type)
	const promotion4Free1Type = promotion.map((p) => p[1].type)

	console.log('promotionHarryType : ', promotionHarryType)

	//let union = [...new Set([...arrA, ...arrB)];

	const promotionTypeUnion = [
		...new Set([...promotionHarryType, ...promotion4Free1Type]),
	]
	console.log('promotionTypeUnion :', promotionTypeUnion)

	console.log('promotion4Free1Type : ', promotion4Free1Type)

	const [promotionHarryBookTargetIds] = promotion.map((p) => p[0].targetIds)
	console.log('promotionHarryBookTargetId: ', promotionHarryBookTargetIds)

	const [promotion4Free1BookTargetIds] = promotion.map((p) => p[1].targetIds)
	console.log('promotionHarryBookTargetId: ', promotionHarryBookTargetIds)

	// const [pTargetId] = promotionHarryBookTargetIds
	// console.log('pTargetId : ', pTargetId)

	const productIntersectionPromotionHarry = booksCartId.filter((x) =>
		promotionHarryBookTargetIds.includes(x)
	)
	console.log(
		'productIntersectionPromotionHarry: ',
		productIntersectionPromotionHarry
	)

	const productIntersectionPromotion4Free1 = booksCartId.filter((x) =>
		promotion4Free1BookTargetIds.includes(x)
	)
	console.log(
		'productIntersectionPromotion4Free1: ',
		productIntersectionPromotion4Free1
	)

	if (booksCartId.length > 1) {
		if (promotionTypeUnion[1] === '4_FREE_1') {
			if (productIntersectionPromotion4Free1.length % 4 === 0) {
				return console.log(
					`productIntersectionPromotion4Free1: = ${productIntersectionPromotion4Free1.length} Free 1 `
				)
			}
			return console.log(
				`productIntersectionPromotion4Free1: = ${productIntersectionPromotion4Free1.length} buy more ${productIntersectionPromotion4Free1.length - 4} to Free 1 `
			)
		}
		if (promotionTypeUnion[0] === 'MULTI_HARRY') {
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
					discount = 8
			}
			return discount
		}
		return 8
	}

	return 8
}
