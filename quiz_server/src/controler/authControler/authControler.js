
const authSchema = require("../../schema/authSchema/authSchema")


module.exports = {



    createUserAccount: (req, res, next) => {
        var data = req.body
        if (data) {

            authSchema.find({ username: data.username })
                .then((data) => {
                    if (data[0] === undefined) {
                        authSchema.create(data)
                            .then(() => {
                                res.send({ response: true, message: 'Account Created Successfully' })
                            })
                            .catch((err) => {
                                res.send({ created: false, message: 'Provide All Details' })
                            })
                    }
                    else {
                        res.send({
                            created: false,
                            message: 'Username already in use'
                        })
                    }
                })
                .catch((err) => {
                    console.log(err)
                })




        }
    }


}

