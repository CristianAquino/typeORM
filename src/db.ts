import "dotenv/config";
import { DataSource } from "typeorm";
import { User } from "./entities/user.entity";

const { HOST_DB, USERNAME_DB, PASSWORD_DB, DATABASE_DB } = process.env;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: HOST_DB as string,
  port: 5432,
  username: USERNAME_DB as string,
  password: PASSWORD_DB as string,
  database: DATABASE_DB as string,
  entities: [User],
  synchronize: true,
});
