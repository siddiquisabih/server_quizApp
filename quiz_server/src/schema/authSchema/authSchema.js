const mongoose = require('mongoose')
const schema = mongoose.Schema



//signup schema
const signup = new schema({
    username: {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
    }
})

const authDetail = mongoose.model('Authentication', signup)
module.exports = authDetail




// //login schema 
// const login = new schema({
//     username: {
//         type: String,
//         lowercase: true,
//         required: [true, "can't be blank"],
//         match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
//     },
//     password: {
//         type: String,
//         required: true,
//     },
// })



// const loginSchema = mongoose.model('Authentication', login)
// module.exports = loginSchema





