import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@models/user.model';

@Injectable()
export class UsersService {
  private users: User[] = [];

  createUser(name: string, email: string): User {
    const user: User = { id: Date.now(), name, email };
    this.users.push(user);
    return user;
  }

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User {
    const user = this.users.find((u) => u.id === id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}
