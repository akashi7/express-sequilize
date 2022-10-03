import db from "./config";
import User from "./models/user";
import Posts from "./models/posts";



db.sync({ logging: (msg) => console.log({ msg }) }).then(() => db.close());