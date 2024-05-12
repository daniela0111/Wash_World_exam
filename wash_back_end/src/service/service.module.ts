import { Module  } from '@nestjs/common';
import {  TypeOrmModule } from '@nestjs/typeorm';
import { ServiceService  } from './service.service';
import { ServiceController } from './service.controller';
import { ServiceEntity } from 'src/entities/service.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ServiceEntity])],
    providers:[ServiceService],
    controllers:[ServiceController]
})
export class ServiceModule{}