import * as mongoose from "mongoose";

// TODO: Perhaps switch over to using TypeORM. It's a universal package
export let GroupSchema = new mongoose.Schema({
    groupName: String,
    directoryId: String,
    users: [],
    entitlements: []
})