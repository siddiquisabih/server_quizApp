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




const attemptByFormat = new schema({
    userId: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String
    }
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
    createdById: {
        type: String
    },
    createdByName: {
        type: String
    },
    courseCode: {
        type: String,
    },
    attemptBy: {
        type: [attemptByFormat]
    }
})




const createQuizSchema = mongoose.model('CreateQuiz', quiz)
module.exports = createQuizSchema





