import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Resource} from "./interfaces/resource.interface";

@Injectable()
export class ResourceService {
    constructor(@InjectModel('Resource') private readonly resourceModel: Model<Resource>) {}

    async getAllResources(): Promise<Resource[]> {
        return await this.resourceModel.find()
    }

    async getResourceById(resourceId: string): Promise<Resource> {
        return await this.resourceModel.findById(resourceId)
    }

    async getResourcesByDirectoryId(directoryId: string): Promise<Resource[]> {
        return await this.resourceModel.find({ directoryId: directoryId })
    }

    async createResource(resource: Resource): Promise<Resource> {
        return await this.resourceModel.create(resource)
    }

    async updateResource(resourceId: string, resource: Resource): Promise<Resource> {
        return await this.resourceModel.findByIdAndUpdate(resourceId, resource)
    }

    async deleteResource(resourceId: string): Promise<string> {
        // TODO: Return the error for error handling
        if (await this.resourceModel.findByIdAndRemove(resourceId)) {
            return `Resource ${resourceId} was deleted`
        } else {
            return `Resource ${resourceId} could not be deleted`
        }
    }
}
