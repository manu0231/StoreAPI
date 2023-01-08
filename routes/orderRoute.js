const express = require('express')
const router = express.Router()

const {authorizePermission,auththenticateuser} = require('../middleware/authHandler')


//getAllOrder:GET:/
//createOrder:POST:/
//getCurrentUserOrders:GET/ShowAllMyOrders
//getSingleOrder:GET:ID
//updateOrder:PATCH/ID

const {
    getAllOrder,
    getCurrentUserOrders,
    getSingleOrder,
    createOrder,
    updateOrder
}=require('../controllers/orderController')

router.route('/')
        .post([auththenticateuser],createOrder)
        .get([auththenticateuser,authorizePermission('admin')],getAllOrder)

router.route('/ShowAllMyOrders').get([auththenticateuser],getCurrentUserOrders)

router.route('/:id')
        .get([auththenticateuser],getSingleOrder)
        .patch([auththenticateuser],updateOrder)


module.exports=router