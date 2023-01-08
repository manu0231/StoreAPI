const express = require('express')
const router = express.Router()
const {auththenticateuser}= require('../middleware/authHandler')
const 
{
    createReview,getAllReview,getSingleReview,updateReview,deleteReview
} = require('../controllers/reviewController')

router.route('/').post([auththenticateuser],createReview).get(getAllReview)

router.route('/:id')
      .get(getSingleReview)
      .patch([auththenticateuser],updateReview)
      .delete([auththenticateuser],deleteReview)



module.exports = router