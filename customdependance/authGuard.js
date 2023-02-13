const userModel = require("../model/user");
let routeGuard = async (req, res, next)=>{
let user = await userModel.findOne({_id: req.session.userId})
if (user) {
    next()
}else{
    res.redirect('/portfolio')
}
}

module.exports = routeGuard