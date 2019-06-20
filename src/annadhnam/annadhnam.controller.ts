import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { AnnadhnamService } from './annadhnam.service';
import { AnndhnamRegister } from './dto/anndhnamRegister';

@Controller('annadhnam')
export class AnnadhnamController {
    constructor(private readonly anndhanmservice: AnnadhnamService){}
    @Get('getdata')
    async findAll() {
        return this.anndhanmservice.findData();
    }
    @Post('register')
    async register(@Body() payload) {
// tslint:disable-next-line: no-console
return await this.anndhanmservice.register(payload);
    }
    @Get(':id')
    async getbyId(@Param('id') id: number) {
      return this.anndhanmservice.read(id);
    }
    @Put(':id')
    async updateVal(@Param('id') id: number,@Body() data: AnndhnamRegister){
      return this.anndhanmservice.update(id, data);
    }

}
