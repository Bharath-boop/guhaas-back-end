import express from "express";
import AppRoute from './Routes/index.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const PORT=process.env.PORT
const app=express()

app.use(cors())
app.use(express.json())
app.use('/',AppRoute)


app.listen(PORT,()=>console.log(`Application listering ${PORT}`))