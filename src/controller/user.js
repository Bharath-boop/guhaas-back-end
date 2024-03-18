import userModel from '../Models/users.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const getAllUser = async (req, res) => {
    try {
        let user = await userModel.find()
        res.status(200).send({
            message: "data get sucess full",
            user
        })

    } catch (error) {
        res.status(500).send({
            message: "Internal sever error"
        })
    }
}


const createUser = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email })
        if (!user) {
            const salt = await bcrypt.genSalt(10);
            let seqpassword = await bcrypt.hash(req.body.password, salt)
            let newUser = await userModel.create({
                name: req.body.name,
                password: seqpassword,
                email: req.body.email,
                location: req.body.location

            })
            res.status(200).json({
                message: "data added scuessfull",
                response: true,
            })
        }
        else {
            res.status(400).json({
                message: `already exitesd in the ${req.body.email}`,
                response: false,

            })
        }

    } catch (error) {
        res.status(500).json({
            message: "internal sever erocvfffor",
            response: false,
        })
    }
}

const login = async (req, res) => {
    try {
        let userData = await userModel.findOne({ email: req.body.email })
        let pws = await bcrypt.compare(req.body.password, userData.password)
        if (userData) {
            if (pws) {
                const data = {
                    user: {
                        id: userData.id
                    }
                }
                const authToken = jwt.sign(data, process.env.JWT_SERCRET)
                res.status(200).json({
                    message: "data geting Scuccefull",
                    response: true,
                    authToken: authToken
                })

            }
            else {
                res.status(400).json({
                    message: "enter the valid password",
                    response: false,
                })
            }
        }
        else {
            res.status(400).json({
                message: "enter valid email",
                response: false,
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "internal sever eroor",
            error,
            response: false,
        })
    }
}

export default {
    getAllUser,
    createUser,
    login
}