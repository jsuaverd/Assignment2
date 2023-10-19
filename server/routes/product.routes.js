import express from 'express'
import productCtrl from '../controllers/product.controller.js' 
const router = express.Router()

	router.route('/api/product') 
	.get(productCtrl.list)
	.post(productCtrl.create)

	router.route('/api/product/:productID') 
	.get(productCtrl.read)
	.put(productCtrl.update) 
	.delete(productCtrl.remove)

	router.param('productId', productCtrl.productByID)
    router.route('/api/product').post(productCtrl.create)
    router.route('/api/product').get(productCtrl.list)
    router.param('productId', productCtrl.productByID)
    router.route('/api/product/:productID').get(productCtrl.read)
    router.route('/api/product/:productID').put(productCtrl.update)
    router.route('/api/product/:productID').delete(productCtrl.remove)




	export default router
