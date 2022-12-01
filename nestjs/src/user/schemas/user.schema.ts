import * as mongoose from 'mongoose'

export let UserSchema = new mongoose.Schema({
    uid: String,
    firstName: String,
    lastName: String,
    preferredName: String,
    gender: String,
    dateOfBirth: Date,
    parentContainer: String,
    roles: [{
        roleId: String
    }],
    entitlements: []
})