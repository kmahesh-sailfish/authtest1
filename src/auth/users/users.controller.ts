import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {

    @Get('userlist')
    // @UseGuards(AuthGuard())
    getAll(){
        console.log('called');
        return 1;
    }
}
