import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {GroupSchema} from "./schemas/group.schema";
import { GroupService } from './group.service';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Group', schema: GroupSchema, collection: 'groups'}])],
    providers: [GroupService]
})
export class GroupModule {}
