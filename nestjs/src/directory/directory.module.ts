import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import {DirectorySchema} from "./schemas/directory.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: 'Directory', schema: DirectorySchema, collection: 'directories'}])],
    controllers: [],
    providers: [],
})
export class UserModule {}