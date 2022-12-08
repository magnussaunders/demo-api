import * as mongoose from "mongoose";

export let ResourceSchema = new mongoose.Schema({
    directoryId: String,
    resourceType: String,
    resourceName: String,
    accessLevels: []
})