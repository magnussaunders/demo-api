import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {GroupSchema} from "./schemas/group.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: 'Group', schema: GroupSchema, collection: 'groups'}])]
})
export class GroupModule {}
