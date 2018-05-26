const authControler = require('../../controler/authControler/authControler')

const quizControler = require("../../controler/quizControler/createQuiz")


module.exports = (app) => {

    //post Authentication
    app.post('/api/auth/createAccount', authControler.createUserAccount)
    app.post('/api/auth/signinAccount', authControler.loginUser)



    //post Quiz Create 
    app.post('/api/quiz/createQuiz', quizControler.createQuiz)
    




}