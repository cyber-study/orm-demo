import { DataSource } from "typeorm";
import CommodityEntity from "./entitys/CommodityEntity";
import PleaceholderEntity from "./entitys/PleaceholderEntity";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "orders",
  logging: true,
  synchronize: true,
  entities: [CommodityEntity, PleaceholderEntity],
  subscribers: [],
  migrations: [],
});

(async () => {
  await AppDataSource.initialize();
})();
