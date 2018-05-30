const mongoose = require('mongoose')
const schema = mongoose.Schema




const req = new schema({

    username: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    isAttemped: {
        type: boolean,
        required: true
    },
    attempedCourses: {
        type: [{ courseId: { type: String } }]
    },
})

const userRequest = mongoose.model('allRequest', req)
module.exports = userRequest