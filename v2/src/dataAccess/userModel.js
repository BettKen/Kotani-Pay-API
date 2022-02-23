const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
            index: { unique: true }
        },
        lastname: {
            type: String,
            required: true,
            index: { unique: true }
        },
        organization:{
            type: String,
            required: true,

        },
        emailAddress:{
        type: String,
        required: true,
        index: { unique: true }},
        permissionLevel :{
            type: String,
            required: true,
        } ,
        countryCode:{
            type: String,
            required: true,
        },
        targetCountry: {
            type: String,
            required: true,
        },
        phoneNumber:{
            type: String,
            required: true,
        },
        localCurrency:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
        },
        created: {
            type: Date
        },
        updated: {
            type: Date
        }

    },
    {
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    }
)

module.exports = mongoose.model('User', UserSchema)
