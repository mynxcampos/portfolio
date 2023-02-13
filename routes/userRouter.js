const userModel = require ("../model/user.js");
const userRouter = require ("express").Router();
let crypto = require('../customdependance/crypto')

userRouter.post("/addUser", async (req, res)=>{      //Créer une route avec la methode POST (POST = envoyer qlq chose (BDD)) / req = requete, res = reponse / 
try {
    req.body.password = await crypto.cryptPassword(req.body.password)   //Recupere le mdp du formulaire pour ensuite le crypté
    let newUser = new userModel(req.body)                //Nouveau model d'utilisateur qui va se créer
     await newUser.save()                               // une fois qu'il est créer tu le sauvegarde 
    res.send("sauvegardé")                              // informe moi que l'utilisateur est bien sauvegardé
} catch (error) {                                       //si erreur attrape la et informe moi / send = envoyer
    res.send(error)
}
}) 

userRouter.get("/addUser", async (req, res)=>{      //Créer une route avec la methode GET (Get = me donner qlq chose (BDD)) 
    try {
        let users = await userModel.find()   //Trouver tout les utilisateurs FIND = trouver                                      
        res.send(users)                    // envoie moi tout les utilisateurs que tu as trouvé
    } catch (error) {     //si erreur attrape la et informe moi / send = envoyer
        res.send(error)
    }
    }) 



module.exports = userRouter
