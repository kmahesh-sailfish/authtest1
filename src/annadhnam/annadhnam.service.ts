import { Injectable } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';
import { AnndhnamRegister } from './dto/anndhnamRegister';
import { InjectRepository } from '@nestjs/typeorm';
import { Anndhnam } from '../entity/anndhnam.entity';
import { Repository } from 'typeorm';
import { promises } from 'fs';

@Injectable()
export class AnnadhnamService {
    constructor(@InjectRepository(Anndhnam) private userrepost: Repository<Anndhnam>) {}
    async register(payload: AnndhnamRegister): Promise<any> {
      const newData = await this.userrepost.create(payload);
      return await this.userrepost.save(newData);
      }
      async findData(): Promise<any> {
          return await this.userrepost.find();
      }
      async read(anndhnamId) {
          return await this.userrepost.findOne({where: {anndhnamId}});
      }
      async  update(anndhnamId, data) {
        await this.userrepost.update({anndhnamId}, data);
        return await this.userrepost.findOne({anndhnamId});
      }
}
