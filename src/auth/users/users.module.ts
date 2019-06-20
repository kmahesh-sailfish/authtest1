import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { Users } from '../../entity/users.entity';
import { UserTypes } from '../../entity/userstype.entity';

@Module({
  imports:[],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
