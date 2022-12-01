import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UserModule} from "./user/user.module";
import { MongooseModule } from "@nestjs/mongoose";
import config from './config';

@Module({
  imports: [UserModule, MongooseModule.forRoot(config.mongo_connection_string)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
