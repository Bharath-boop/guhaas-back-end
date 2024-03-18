import express from 'express'
import food from '../Models/food.js'
const router =express.Router()

router.post('/',async(req,res)=>{
    try {
        let data=await food.foodItemsModel.find()
        let cata=await food.foodcategoryModel.find()
        res.status(200).send([data,cata])
    } catch (error) {
        res.status(500).send({
            message: "Internal sever error"
        })
    }
})

export default router