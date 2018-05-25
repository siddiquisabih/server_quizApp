const mongoose = require('mongoose')
const schema = mongoose.Schema

const questionFormat = new schema({
    question: {
        type: String,
        required: true
    },
    answerA: {
        type: String,
        required: true
    },
    answerB: {
        type: String
    },
    answerC: {
        type: String
    },
    answerD: {
        type: String
    },
})



const quiz = new schema({

    subject: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    questions: {
        type: [questionFormat],
    },
    title: {
        type: String,
        required: true
    },
    instructorName: {
        type: String,
        required: true
    },
    userId: {
        type: String
    }
})

 


const createQuiz = mongoose.model('CreateQuiz', quiz)
module.exports = createQuiz





