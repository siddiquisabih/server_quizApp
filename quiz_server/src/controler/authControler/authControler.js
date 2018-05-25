
const authSchema = require("../../schema/authSchema/authSchema")
 


module.exports = {

    createUserAccount: (req, res, next) => {
        var data = req.body
        if (data) {
            authSchema.find({ username: data.username })
                .then((response) => {
                    if (response[0] === undefined) {
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
    },
    loginUser: (req, res, next) => {
        var data = req.body
        if (data) {
            authSchema.find({ username: data.username})
                .then((response) => {
                    if (response[0] !== undefined) {
                        response[0].username == data.username && response[0].password == data.password ?
                        res.send({ login: true, data: response[0]  }) : res.send({login : false , data : null , message : 'invalid id and password'})
                    }
                    else {
                        res.send({ login: false, data: null, message : 'Create your account first' })
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
}