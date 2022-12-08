import * as mongoose from "mongoose";

export let GroupSchema = new mongoose.Schema({
    groupName: String,
    directoryId: String,
    users: [],
    entitlements: []
})