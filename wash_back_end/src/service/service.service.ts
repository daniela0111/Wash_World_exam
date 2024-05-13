import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from 'src/entities/service.entity';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>,
  ) {}

  findAll(): Promise<Service[]> {
    return this.serviceRepository.find();
  }

  findOne(id: number): Promise<Service | null> {
    return this.serviceRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.serviceRepository.delete(id);
  }
}