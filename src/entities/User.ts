import {Column, Entity, PrimaryGeneratedColumn, BaseEntity, IntegerType} from 'typeorm'

@Entity('EMPLOYEE')
export class EMPLOYEE extends BaseEntity { //BaseEntity en TypeORM es una clase base proporcionada por TypeORM para definir entidades de base de datos. Cuando defines una entidad en TypeORM, puedes extenderla de BaseEntity para obtener funcionalidades adicionales como métodos de consulta predefinidos, operaciones CRUD, y más.

    @PrimaryGeneratedColumn()
    ID: number //quitar el strictpropertyInit de tsconfig.json

    @Column()
    NAME: string

    @Column()
    SALARY: number
}

@Entity('USERPASS')
export class USERPASS extends BaseEntity { //BaseEntity en TypeORM es una clase base proporcionada por TypeORM para definir entidades de base de datos. Cuando defines una entidad en TypeORM, puedes extenderla de BaseEntity para obtener funcionalidades adicionales como métodos de consulta predefinidos, operaciones CRUD, y más.

    @PrimaryGeneratedColumn()
    ID: number //quitar el strictpropertyInit de tsconfig.json

    @Column()
    USERNAME: string

    @Column()
    PASSWORD: string
}