import "reflect-metadata"
import { DataSource } from "typeorm"
import UserEntity from "../../modules/users/domain/entities/user.entity"

export const AppDataSource = new DataSource({
    host: "localhost",
    port: 27017,
    type: "mongodb",
    database: "tasks",
    username: "root",
    password: "root",
    authSource: 'admin',
    synchronize: true,
    logging: false,
    entities: [
      UserEntity,
    ],
    migrations: [],
    subscribers: [],
})
