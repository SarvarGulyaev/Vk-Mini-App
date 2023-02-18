import {Body, Controller, Get, Param, Post, Req} from '@nestjs/common';
import { UsersService } from './users.service';
import {CreateUserDto} from "./dto/create-user.dto";
import UserRequest from "../types/request";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('get')
  async getUser(@Req() req: UserRequest) {
    return await this.usersService.getUser(req);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }
}
