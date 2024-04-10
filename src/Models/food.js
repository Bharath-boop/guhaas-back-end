import mongoose from "./index.js";

const foodItemsSchema = new mongoose.Schema({
    categoryName: {
        type: String,
        requied: [true, "categoryName is requied"]
    },
    name: {
        type: String,
        requied: [true, "Name is requied"]
    },
    img: {
        type: String,
        requied: [true, "img is requied"]
    },
    option: [
        {
            _id : false ,
            half:{
                type: Number,
                requied: [true, "half value is requied"]
            },
            full:{
                type: Number,
                requied: [true, "full value is requied"]
            }
        },
    ],
    disscription: {
        type: String,
        requied: [true, "disscription is requied"]
    }
},{
    collection:'food-items',
    versionKey:false
})


const foodCategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        requied: [true, "categoryName is requied"]
    }
},{
    collection:"foodcategory",
    versionKey:false
})



const foodItemsModel = mongoose.model('food-items', foodItemsSchema)
const foodcategoryModel=mongoose.model('foodcategory',foodCategorySchema)

export default {
    foodItemsModel,
    foodcategoryModel
}