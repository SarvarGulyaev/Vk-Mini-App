import { Injectable } from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {Model} from "mongoose";
import {ConfigService} from "@nestjs/config";
import {InjectModel} from "@nestjs/mongoose";
import {User} from "./models/user.model";
import UserRequest from "../types/request";
import {findUser} from "../utils/findUser";

@Injectable()
export class UsersService {
  constructor(
      @InjectModel('User') private readonly userModel: Model<User>,
      private readonly configService: ConfigService,
  ) {}

  async getUser(req: UserRequest) {
    return await findUser(this.userModel, req.user?.id)
  }

  findOne(id: number) {
    return `Success find user from VK ${id}`
  }
}
