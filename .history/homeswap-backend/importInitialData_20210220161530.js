import mongoose from "mongoose";
import dotenv from "dotenv";

import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

//our seeder file is not connected to node
//that's why we have to bring in dotenv and conenctDB here aswell
dotenv.config();
connectDB();

const importData = async () => {
  try {
    // delete all the default data to start from 0
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // now insert the actual data
    const createdUsers = await User.insertMany(users);
    const admin = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      //return the same object but add admin field
      // for the reference
      // because in our case only admin
      // can create products

      return {
        ...product,
        user: admin,
      };
    });

    await Product.insertMany(sampleProducts);
    console.log("Data Imported ".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error.message}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // delete all the default data to start from 0
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed ".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error.message}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
