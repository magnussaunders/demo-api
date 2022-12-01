import * as mongoose from "mongoose";

export let DirectorySchema = new mongoose.Schema({
    did: String,
    directoryName: String,
    childrenDirectories: []
})