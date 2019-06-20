import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnadhnamModule } from './annadhnam/annadhnam.module';
import { AnnadhnamService } from './annadhnam/annadhnam.service';

@Module({
  imports: [TypeOrmModule.forRoot(), AnnadhnamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
