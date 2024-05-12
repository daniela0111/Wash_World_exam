import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillService  } from './bill.service';
import { BillController } from './bill.controller';
import { BillEntity } from 'src/entities/Bill.entity';

@Module({
    imports: [TypeOrmModule.forFeature([BillEntity])],
    providers:[BillService],
    controllers:[BillController]
})
export class BillModule {}
