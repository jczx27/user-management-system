import { Injectable } from '@nestjs/common';
import { UserRepository } from '@repo/user.repository';
import { User } from '@models/user.model';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async registerUser(
    name: string,
    email: string,
    password: string,
  ): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('User already exists');
    }
    return this.userRepository.create({ name, email, password });
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
