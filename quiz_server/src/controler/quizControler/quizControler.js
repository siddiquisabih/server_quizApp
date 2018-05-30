const createQuizSchema = require('../../schema/quizSchema/quizSchema')







module.exports = {
    //create quiz

    createQuiz: (req, res, next) => {
        var data = req.body
        createQuizSchema.create(data)
            .then((response) => {
                if (response !== null) {
                    var objId = response._id.toString()
                    var courseCode = objId.slice(objId.length - 5)
                    createQuizSchema.findByIdAndUpdate({ _id: response._id }, { $set: { courseCode: courseCode } }, function (err, doc) {
                        if (err) {
                            res.send({ message: 'Error', response: false, })
                        }
                    })
                    res.send({ message: 'quiz created', response: true, })
                }
            })
            .catch((err) => {
                res.send({ err: err, err })
            })
    },

    getAllCreatedQuiz: (req, res, next) => {
        var userId = req.params.userId
        if (userId !== undefined || userId !== null) {
            createQuizSchema.find({ createdById: userId })
                .then((response) => {
                    res.send({ response })
                })
        }
    },


}
