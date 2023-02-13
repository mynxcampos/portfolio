const loginRouter = require('express').Router();
const userModel = require('../model/user.js');
let crypto = require('../customdependance/crypto.js');


loginRouter.get('/login', async(req, res)=>{
    try {
        res.render('login.twig')
    } catch (error) {
        res.send(error)
    }
})


loginRouter.post('/loginUser', async (req, res)=>{
try {
  let user = await userModel.findOne({name: req.body.name})
  if (user) {
 if (await crypto.comparePassword(req.body.password, user.password)) {
  req.session.userId = user._id
  res.redirect('formProject')
 }else{
  res.send('Mot de passe incorrect')
 }
    
  }else{
    res.send("non valide")
  }
} catch (error) {
    res.send(error)
}

})





























module.exports = loginRouter


