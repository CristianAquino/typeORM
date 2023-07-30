import { app } from "./app";
import "reflect-metadata";
import { AppDataSource } from "./db";

const main = async () => {
  try {
    await AppDataSource.initialize();
    console.log("database connected");
    app.listen(3000, () => {
      console.log("run in port 3000");
    });
  } catch (error) {
    console.error(error);
  }
};

main();
