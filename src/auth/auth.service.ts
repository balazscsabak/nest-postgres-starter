import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { comparePassword } from '../common/helper/password.helper';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<Partial<User>> {
    const user = await this.userService.findOne(username);

    if (user && (await comparePassword({ password, hash: user.password }))) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: User) {
    const payload = user;

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
