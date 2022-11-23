import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findOne(username);

    if (user && user.passport === password) {
      delete user.passport;
      return user;
    }

    return null;
  }
}
