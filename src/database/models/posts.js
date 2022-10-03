import { DataTypes } from "sequelize";
import db from "../config";
import User from "./user";

const Posts = db.define(
  'Posts', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  picture: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
  {
    timestamps: true, updatedAt: 'modifiedAt'
  },
);

Posts.belongsTo(User, { as: "user", onDelete: "cascade", onUpdate: "cascade" });

export default Posts;