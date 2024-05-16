import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class ExtraEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

}