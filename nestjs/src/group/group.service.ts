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

    async getGroupsByDirectoryId(directoryId: string): Promise<Group[]> {
        return await this.groupModel.find({ directoryId: directoryId })
    }

    async createGroup(group: Group): Promise<Group> {
        return await this.groupModel.create(group)
    }

    async updateGroup(groupId: string, group: Group): Promise<Group> {
        return await this.groupModel.findByIdAndUpdate(groupId, group)
    }

    async addUserToGroup(groupId: string, userId: string): Promise<string> {
        // TODO: Add error handling
        let group = await this.groupModel.findById(groupId)

        for (let user of group.users) {
            if (user === userId) {
                return `User ${userId} is already a member of group ${groupId}`
            }
        }

        group.users.push(userId)

        const result = await this.groupModel.findByIdAndUpdate(groupId, group)
        if (result) {
            return `User ${userId} has been added to group ${groupId}`
        } else {
            return `User ${userId} could not be added to group ${groupId}`
        }
    }

    async removeUserFromGroup(groupId: string, userId: string) {
        let group = await this.groupModel.findById(groupId)

        // TODO: Separate duplicated logic into a separate function
        // TODO: Assign results to a descriptive variable so that it is more readable. When reading the code, you don't need to analyze what the code is doing, you can look at the variable name
        const matchingUsers = group.users.filter(user => user === userId)
        if (matchingUsers.length !== 0) {
            group.users = group.users.filter(user => user !== userId)

            if (await this.groupModel.findByIdAndUpdate(groupId, group)) {
                return `User ${userId} has been removed from group ${groupId}`
            } else {
                return `User ${userId} could not be removed from group ${groupId}`
            }
        } else {
            return `User ${userId} is not a member of group ${groupId}`
        }
    }

    async deleteGroup(groupId: string): Promise<string> {
        if (await this.groupModel.findByIdAndRemove(groupId)) {
            return `Group ${groupId} was deleted`
        } else {
            return `Group ${groupId} could not be deleted`
        }
    }
}
