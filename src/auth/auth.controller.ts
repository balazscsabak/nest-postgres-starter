import { LocalAuthGuard } from './local-auth.guard';
import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login/credentials')
  async loginCredentials(@Request() req) {
    return this.authService.login(req.user);
  }
}
