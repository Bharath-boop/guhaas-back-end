import mongoose from "./index.js";

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        requied: [true, "name is requied"]
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        requied: [true, "password is requied"]
    },
    location: {
        type: String,
        requied: [true, "name is requied"]
    },
    date: {
        type: Date,
        default: Date.now()
    },
    type:{
        type:String,
        default:'user'
    }
}, {
    collection: 'user',
    versionKey: false
})



const userModel = mongoose.model('user', userSchema)

export default userModel