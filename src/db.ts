import { DataSource } from 'typeorm'
import {EMPLOYEE, USERPASS} from './entities/User'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "10.232.12.198", //OJO si se cambia de conexión a red, cambiar IP
    port: 3306,
    username: "wp03",
    password: "wp03",
    database: "companydb",
    logging: true, //Muestra las queries hechas   
    entities: [EMPLOYEE],
    synchronize: false
})

export const AppDataSource2 = new DataSource({
    type: "mysql",
    host: "10.232.12.198", //OJO si se cambia de conexión a red, cambiar IP
    port: 3306,
    username: "wp03",
    password: "wp03",
    database: "companydb",
    logging: true, //Muestra las queries hechas   
    entities: [USERPASS],
    synchronize: false
})

/*export const AppDataSource = new DataSource({
    type: "oracle",
    host: "10.232.12.198",
    port: 1521,
    username: "wp03",
    password: "wp03",
    database: "companydb",
    //schema:"wp03",
    sid: "xe",
    logging: true, //Muestra las queries hechas
    entities: [EMPLOYEE],
    synchronize: false
})*/