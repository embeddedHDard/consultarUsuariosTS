//Arranca todo el proyecto

import "reflect-metadata"
import app from "./app"
import { AppDataSource, AppDataSource2} from "./db" //Se importa así porque es un export individual

async function main(){
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!");
  } catch (err) {
    console.error("Error during Data Source initialization", err);
  }

  try {
    await AppDataSource2.initialize();
    console.log("Password Source has been initialized!");
  } catch (err) {
    console.error("Error during Password Source initialization", err);
  }
    app.listen(3000)
    console.log("Listening on port 3000")
}

main();
