import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExtraService  } from './extra.service';
import { ExtraController } from '..extra/extra.controller';
import {ExtraEntity } from '../entities/Extra';

@Module({
    imports: [TypeOrmModule.forFeature([ExtraEntity])],
    providers:[ExtraService],
    controllers:[ExtraController]
})
export class ExtraModule{}