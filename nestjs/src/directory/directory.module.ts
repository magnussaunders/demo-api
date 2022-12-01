import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import {DirectorySchema} from "./schemas/directory.schema";
import { DirectoryService } from './directory.service';
import { DirectoryController } from './directory.controller';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Directory', schema: DirectorySchema, collection: 'directories'}])],
    controllers: [DirectoryController],
    providers: [DirectoryService],
})
export class DirectoryModule {}