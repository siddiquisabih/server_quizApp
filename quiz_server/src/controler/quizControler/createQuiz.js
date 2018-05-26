const createQuiz = require('../../schema/quizSchema/createQuiz')






module.exports = {

    //create quiz

    createQuiz: (req, res, next) => {
        var data = req.body
        createQuiz.create(data)
            .then((response) => {
                //yahan pay wapis save karana hai ek code jo quiz invitation code hoga.
                res.send({ message: 'quiz created' })
            })
            .catch((err) => {
                res.send(err)
            })
    }
}