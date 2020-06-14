import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from '../dtos/commands/CreateUserDto';
import { UserService } from '../services/user.service';
import { User } from '../schemas/user.schema';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {};

  @Post("create")
  @ApiResponse({ type: Boolean, status: 201 })
  async create(@Body() data: CreateUserDto): Promise<boolean> {
    const createdUser = await this.userService.create(data);
    return createdUser ? true : false;
  }

  @Get()
  @ApiResponse({ type: User, status: 200 }) 
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
