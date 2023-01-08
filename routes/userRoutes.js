const express = require('express')
const router = express.Router()

const {
    auththenticateuser,authorizePermission
}= require('../middleware/authHandler')

const {
    showCurrentUser, getalluser,getsingleuser ,updateUser,upateUserPassword
} = require('../controllers/userController')

router.route('/')
      .get(auththenticateuser,authorizePermission('admin'),getalluser)

router.route('/showme').get(auththenticateuser,showCurrentUser)
router.route('/updateuser').patch(auththenticateuser,updateUser)
router.route('/updateUserPassword').patch(auththenticateuser,upateUserPassword)

router.route('/:id').get(auththenticateuser,getsingleuser)

module.exports = router
