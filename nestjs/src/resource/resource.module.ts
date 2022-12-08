import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {ResourceSchema} from "./schemas/resource.schema";
import { ResourceService } from './resource.service';
import { ResourceController } from './resource.controller';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Resource', schema: ResourceSchema, collection: 'resources'}])],
    providers: [ResourceService],
    controllers: [ResourceController]
})
export class ResourceModule {}
