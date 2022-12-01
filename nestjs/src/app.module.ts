import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UserModule} from "./user/user.module";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from '@nestjs/config';
import {DirectoryModule} from "./directory/directory.module";

@Module({
  imports: [ConfigModule.forRoot(), UserModule, DirectoryModule, MongooseModule.forRoot(`mongodb://${process.env.mongo_db_username}:${process.env.mongo_db_password}@${process.env.mongo_db_host}:${process.env.mongo_db_port}/${process.env.mongo_db_db}?authMechanism=DEFAULT`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
