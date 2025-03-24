import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UsersService } from '@services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() body: { name: string; email: string }) {
    return this.usersService.createUser(body.name, body.email);
  }

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.usersService.getUserById(Number(id));
  }
}
