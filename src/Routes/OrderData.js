import express from 'express'
import Order from '../Models/order.js'
import user from '../controller/user.js'
import userModel from '../Models/users.js'
const router = express.Router()

router.post('/', async (req, res) => {
    let data = req.body.order_data
    await data.splice(0, 0, { Order_date: req.body.order_date })
    let eId = await Order.findOne({ 'email': req.body.email })
    if (eId === null) {
        try {
            await Order.create({
                email: req.body.email,
                order_data: [data],

            })
            res.status(200).send({
                message: "data geting suceefull"
            })
        } catch (error) {
            res.status(500).send({
                message: "Internal sever error"
            })
        }
    }
    else {
        try {
            await Order.findOneAndUpdate({ email: req.body.email },
                { $push: { order_data: data } })
            res.status(200).send({
                message: "data geting suceefull"
            })
        } catch (error) {
            res.status(500).send({
                message: "Internal sever error"
            })
        }
    }
})

router.post('/myorder', async (req, res) => {
    try {
        let myData = await Order.findOne({ 'email': req.body.email })
        res.status(200).send({ orderData: myData })

    } catch (error) {
        res.status(500).send({
            message: "Internal sever error"
        })
    }
})

router.get('/viewOrders',async(req,res)=>{
   try {
        const orders=await Order.find()
        res.status(200).send({
            orders
        })
   } catch (error) {
        res.status(500).send({
            message: "Internal sever error"
        })
   }
}
)


export default router