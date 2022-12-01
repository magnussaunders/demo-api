import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import config from './config'

@Module({
  imports: [MongooseModule.forRoot(config.mongo_db_connection_string)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
