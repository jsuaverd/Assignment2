import product from '../models/product.model.js'
import extend from 'lodash/extend.js'
import errorHandler from '../helpers/dbErrorHandler.js'


	const create = async(req, res, next) => { 
        const product = new Product(req.body) 
        await product.save()
        return res.status(200).json({ 
        message: "Successfully signed up!"
        })
    }

	const list = async (req, res) => {
        try {
            let products = await product.find();
            console.log(products); // Add this line to log the products to the console.
            res.json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
	const productByID = async(req, res, next, id) => { 
        let product = await product.findById(id) 
        if (!product)
        return res.status('400').json({ 
        error: "Product not found"
        })
        req.profile = product 
        next()

     }
     const read = async (req, res) => {
        try {
            //const productId = req.params.productId;
            const product = await product.find();
            console.log(product); // Add this line to log the product data to the console.
            // ... rest of the code
            res.json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
	const update = (req, res, next) => {  }
	const remove = (req, res, next) => {  }
	export default { create, productByID, read, list, remove, update }
