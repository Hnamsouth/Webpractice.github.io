var loginAPI = (req, res) => {


    return res.render('login.ejs')
}
var registerAPI = (req, res) => {


    return res.redirect('/login-api')
}


module.exports = { loginAPI, registerAPI };