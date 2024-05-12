import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExtraService  } from './extra.service';
import { ExtraController } from './extra.controller';
import {Extra} from '../entities/Extra';

@Module({
    imports: [TypeOrmModule.forFeature([Extra])],
    providers:[ExtraService],
    controllers:[ExtraController]
})
export class ExtraModule{}