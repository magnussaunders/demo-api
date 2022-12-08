import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UserModule} from "./user/user.module";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from '@nestjs/config';
import {DirectoryModule} from "./directory/directory.module";
import { GroupModule } from './group/group.module';
import { ResourceModule } from './resource/resource.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, DirectoryModule, MongooseModule.forRoot(`mongodb://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_DB}?authMechanism=DEFAULT`), GroupModule, ResourceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
