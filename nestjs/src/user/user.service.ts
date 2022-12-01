import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {User} from "./interfaces/user.interface";

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async getAllUsers(): Promise<User[]> {
        return await this.userModel.find()
    }

    async getUserById(userId: string): Promise<User> {
        return await this.userModel.findById(userId)
    }

    async createUser(user: User): Promise<User> {
        return await this.userModel.create(user)
    }

    async updateUser(userId: string, user: User): Promise<User> {
        return await this.userModel.findByIdAndUpdate(userId, user)
    }

    async deleteUser(userId: string): Promise<string> {
        if (await this.userModel.findByIdAndRemove(userId)) {
            return `User ${userId} has been deleted`
        } else {
            return `User ${userId} could not be deleted`
        }
    }
}
