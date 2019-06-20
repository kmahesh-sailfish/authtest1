import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entity/users.entity';
import { UserTypes } from '../entity/userstype.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly authservice:AuthService,
    @InjectRepository(Users) private readonly userstab:Repository<Users>,
    @InjectRepository(UserTypes) private readonly usertypestab:Repository<UserTypes>
    ) {}
    

  async createToken(dto:JwtPayload) { 

    const accessToken = this.jwtService.sign(dto);
    return {
      expiresIn: 3600,
      accessToken,
    };
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    // put some validation logic here
    // for example query user by id/email/username
    return {};
  }
}
