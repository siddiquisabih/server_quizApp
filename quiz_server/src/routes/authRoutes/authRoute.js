const authControler = require('../../controler/authControler/authControler')

 



module.exports = (app) => {


    app.post('/api/auth/createAccount', authControler.createUserAccount)
    app.post('/api/auth/signinAccount' , authControler.loginUser)

}