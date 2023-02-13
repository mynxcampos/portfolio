const routeGuard = require("../customdependance/authGuard.js");
const projectModel = require ("../model/project.js");
const projectRouter = require ("express").Router();

projectRouter.post("/addProject", routeGuard, async(req, res)=>{
    try {
        let newproject = new projectModel(req.body)
await newproject.save()
res.redirect("/portfolio")
    } catch (error) {
        res.send(error)
    }
})

projectRouter.get("/formProject", routeGuard, async(req, res)=>{
    try {
        
res.render("project.twig")
    } catch (error) {
        res.send(error)
    }
})



module.exports = projectRouter