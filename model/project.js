const mongoose = require ('mongoose')

const projectSchema = new mongoose.Schema ({

    name: {
        type:String,
        required: [true, 'pas de nom']
    },

description: {
    type:String,
    required: [true, 'pas de prénom']
},



liengithub: {
    type:String,
    required: [true, 'pas de mdp']
},

})

const projectModel = mongoose.model('projects', projectSchema);
module.exports = projectModel