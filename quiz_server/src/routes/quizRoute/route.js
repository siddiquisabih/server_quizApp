const authControler = require('../../controler/authControler/authControler')
const quizControler = require("../../controler/quizControler/quizControler")


module.exports = (app) => {

    //post Authentication
    app.post('/api/auth/createAccount', authControler.createUserAccount)
    app.post('/api/auth/signinAccount', authControler.loginUser)



    //Quiz Create 
    app.post('/api/quiz/createQuiz', quizControler.createQuiz)

    //get All Quiz for user which is created by them
    app.get('/api/quiz/getAllCreatedQuiz/:userId', quizControler.getAllCreatedQuiz)

    //request for quiz
    app.get('/api/quiz/requestForQuiz/:userId/:courseCode' , quizControler.requestForQuiz)






}