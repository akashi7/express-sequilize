import { config } from 'dotenv';
import express, { json, urlencoded } from 'express';
import routes from './routes';
import DBService from './services/db';


config();
const app = express();
app.enable('trust proxy');
app.use(require('cors')());
app.use(require('morgan')('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));


DBService.connectDB();
app.use(routes);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});
