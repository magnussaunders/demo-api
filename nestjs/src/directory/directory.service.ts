import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Directory} from "./interfaces/directory.interface";

@Injectable()
export class DirectoryService {
    constructor(@InjectModel('Directory') private readonly directoryModel: Model<Directory>) {}

    async getDirectory(directoryId: string): Promise<Directory> {
        return await this.directoryModel.findById(directoryId)
    }

    async createDirectory(directory: Directory): Promise<Directory> {
        return await this.directoryModel.create(directory)
    }

    async updateDirectory(directory: Directory): Promise<Directory> {
        return await this.directoryModel.findByIdAndUpdate(directory._id, directory)
    }

    async deleteDirectory(directoryId: string): Promise<string> {
        if (await this.directoryModel.findByIdAndRemove(directoryId)) {
            return `Directory ${directoryId} has been deleted`
        } else {
            return `Directory ${directoryId} has been deleted`
        }
    }
}
