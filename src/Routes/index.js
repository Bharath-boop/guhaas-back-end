import express from 'express'
import indexController from '../controller/index.js'
import UserRoute from './user.js'
import DisplayRoute from './Display.js'

const router=express.Router()

router.get('/',indexController.homePage)
router.use('/user',UserRoute)
router.use('/display',DisplayRoute)

export default router
