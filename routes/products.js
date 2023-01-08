const express = require('express')

const router = express.Router()

const {createProduct,getAllProducts,getProduct,updateProduct,deleteProduct,uploadfile} = require('../controllers/products')
const {getSingleProductreviews}=require('../controllers/reviewController')
router
    .route('/')
    .post(createProduct)
    .get(getAllProducts)

router
    .route('/:id')
    .get(getProduct)
    .patch(updateProduct)
    .delete(deleteProduct)

router
    .route('/upload')
    .post(uploadfile)
    
router
    .route('/:id/reviews')
    .get(getSingleProductreviews)
    
module.exports = router