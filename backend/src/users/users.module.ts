import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {UserModel} from "./models/user.model";

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'User', schema: UserModel}]),
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
