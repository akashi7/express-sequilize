import env from "../config/env";
import db from "../database/config";


export default class DBService {

  static async DbAction(model, action, data) {
    const result = await model[action](data);
    return result;
  }

  static async connectDB() {
    await db.authenticate();
    if (env.NODE_ENV !== 'test') console.log("'Database Connected...'");
  }

}