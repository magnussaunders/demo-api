import * as mongoose from "mongoose";

export let DirectorySchema = new mongoose.Schema({
    directoryName: String,
})