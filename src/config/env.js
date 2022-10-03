import { config } from 'dotenv';

config();

const {
  NODE_ENV,
  DEV_DB_URL,
  TEST_DB_URL,
  JWT_KEY,
} = process.env;

export default {
  NODE_ENV,
  DEV_DB_URL,
  TEST_DB_URL,
  JWT_KEY,
};