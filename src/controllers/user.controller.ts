import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from '@src/services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.userService.registerUser(name, email, password);
  }

  @Get()
  async getUsers() {
    return this.userService.getAllUsers();
  }
}
