import { Controller, Get, UseGuards, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('token')
  async createToken(@Body() payload): Promise<any> {
    console.log(payload);
    return await this.authService.createToken(payload);
  }

  @Get('data')
  // @UseGuards(AuthGuard())
  findAll() {
    console.log('called');
    // this route is restricted by AuthGuard
    // JWT strategy
  }
}
