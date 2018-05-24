const authControler = require('../../controler/authControler/authControler')

const authSchema = require("../../schema/authSchema/authSchema")



module.exports = (app) => {


    app.post('/api/auth/createAccount', authControler.createUserAccount)


}