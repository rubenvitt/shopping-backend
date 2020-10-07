import { Injectable } from '@nestjs/common';
import { UsersService, withoutPassword } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/users.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === password) {
      return withoutPassword(user);
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user._doc.email, sub: user._doc._id };
    return {
      access_token: this.jwtService.sign(payload),
    }
  }

  async register(createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return withoutPassword(user);
    //return await promiseWithoutPassword(this.usersService.create(createUserDto));
  }
}
