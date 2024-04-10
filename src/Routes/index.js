import express from 'express'
import indexController from '../controller/index.js'
import UserRoute from './user.js'
import DisplayRoute from './Display.js'
import OrderRoute from './OrderData.js'

const router=express.Router()

router.get('/',indexController.homePage)
router.use('/user',UserRoute)
router.use('/display',DisplayRoute)
router.use('/orderdata',OrderRoute)


export default router
