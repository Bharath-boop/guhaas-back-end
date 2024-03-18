import express from 'express'
import UserController from '../controller/user.js'
const router =express.Router()

router.get('/',UserController.getAllUser)
router.post('/createuser',UserController.createUser)
router.post('/login',UserController.login)

export default router
