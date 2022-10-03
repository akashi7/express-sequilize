import { Sequelize } from "sequelize";
import env from "../../config/env";

const dbEnv = () => {
  if (env.NODE_ENV === 'production') return env.DATABASE_URL;
  return env.DEV_DB_URL;
};

const db = new Sequelize(dbEnv(), {
  dialect: 'postgres',
  protocol: 'postgres',
});

export default db;