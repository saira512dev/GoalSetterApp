const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please give a name']
    },
    email: {
        type: String,
        required: [true, 'Please give an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    }
},
{ 
    timestamps: true
}
)

module.exports = mongoose.model('USer', UserSchema)