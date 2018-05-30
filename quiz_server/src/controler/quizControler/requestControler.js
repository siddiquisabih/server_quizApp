const userRequest = require('../../schema/quizSchema/quizRequest')


module.exports = {
    //create quiz


    requestForQuiz: (req, res, next) => {

        var userId = req.params.userId
        var courseCode = req.params.courseCode
        var data = req.body
        // userRequest.create()





    }
}