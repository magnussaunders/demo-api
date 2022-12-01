import * as mongoose from "mongoose";

export let DirectorySchema = new mongoose.Schema({
    _id: String,
    directoryName: String,
})