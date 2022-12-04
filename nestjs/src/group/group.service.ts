import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Group} from "./interfaces/group.interface";

@Injectable()
export class GroupService {
    constructor(@InjectModel('Group') private readonly groupModel: Model<Group>) {}

    async getAllGroups(): Promise<Group[]> {
        return await this.groupModel.find()
    }

    async getGroupById(groupId: string): Promise<Group> {
        return await this.groupModel.findById(groupId)
    }

    async createGroup(group: Group): Promise<Group> {
        return await this.groupModel.create(group)
    }

    async updateGroup(group: Group): Promise<Group> {
        return await this.groupModel.findByIdAndUpdate(group)
    }

    async deleteGroup(groupId: string): Promise<string> {
        if (await this.groupModel.findByIdAndRemove(groupId)) {
            return `Group ${groupId} was deleted`
        } else {
            return `Group ${groupId} could not be deleted`
        }
    }
}
