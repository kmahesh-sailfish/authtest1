import { Module } from '@nestjs/common';
import { AnnadhnamController } from './annadhnam.controller';
import { AnnadhnamService } from './annadhnam.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Anndhnam } from '../entity/anndhnam.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Anndhnam])],
  controllers: [AnnadhnamController],
  providers: [AnnadhnamService ],
})
export class AnnadhnamModule {}
