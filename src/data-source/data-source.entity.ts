import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DataSource {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    url: string;

    // Outros campos e métodos relacionados à entidade de origem de dados
}