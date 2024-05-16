import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class ServiceEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;
}