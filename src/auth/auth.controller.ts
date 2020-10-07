import { AuthService } from './auth.service';
import { Body, Controller, Get, Post, Request, UseFilters, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { ValidationExceptionFilter } from '../database/mongo-exception.filter';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/auth/login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() request) {
    return this.authService.login(request.user);
  }

  @Post('/register')
  @UseFilters(ValidationExceptionFilter)
  async register(@Body() user) {
    return this.authService.register(user);
  }

  @Get('/profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() request) {
    return request.user;
  }
}