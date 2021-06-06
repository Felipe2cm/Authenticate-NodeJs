import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Nome: string;

    @Column()
    Senha?: string;

    @Column()
    Email: string;
}