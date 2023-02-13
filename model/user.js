const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema ({

    name: {
        type:String,
        required: [true, 'pas de nom']
    },

firstname: {
    type:String,
    required: [true, 'pas de prénom']
},

mail: {
    type:String,
    required: [true, 'pas de mail']
},

password: {
    type:String,
    required: [true, 'pas de mdp']
},

})

const userModel = mongoose.model('users', userSchema);
module.exports = userModel