import { PrimaryGeneratedColumn, Column, Entity, OneToMany, OneToOne, JoinColumn } from 'typeorm';
@Entity('anndhnam')
export class Anndhnam {
    @PrimaryGeneratedColumn()
    anndhnamId: number;
    @Column()
    userName: string;
    @Column()
    gowthramName: string;
    @Column()
    dateanndhnam: string;
    @Column()
    donation: number;

}
