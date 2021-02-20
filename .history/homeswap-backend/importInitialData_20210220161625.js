const dotenv = require("dotenv");
const users = require("./data/users.js");
const products = require("./data/products.js");
const User = require("./models/userModel.js");
const Product = require("./models/productModel.js");
const Order = require("./models/orderModel.js");
const connectDB = require("./config/db.js");

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
