const House = require("../models/houseModel.js");
const User = require("../models/userModel.js");

//@descrption Auth user
//@route  GET  /api/users
//@access public route
const getUsers = async (req, res) => {
  // find all users
  const users = await User.find({});
  res.status(200).json(users);
};

//@descrption Auth user & get token
//@route  POST  /api/users/login
//@access public route

const authUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        notifications: user.notifications,
        isAdmin: user.isAdmin,
      });
    } else {
      res.json({ error: "Invalid email or password" });
    }
  } catch (error) {
    res.json({ error });
  }
};

//@descrption Register use
//@route  POST  /api/users
//@access public route

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.json({ error: "User already exists" });
  }

  const user = await User.create({ name, email, password });
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      notifications: user.notifications,
      isAdmin: user.isAdmin,
    });
  } else {
    res.json({ error: "Invalid user data" });
  }
};

const updateNotification = async (req, res) => {
  let _id = req.body.user;
  let { loggedUser } = req.body;

  const foundUser = await User.findOne({ _id });
  const offeredHouse = await House.findOne({ user: loggedUser });

  foundUser.notifications.push(offeredHouse);
  foundUser.save();

  res.json({ foundUser });
};

module.exports = {
  getUsers,
  authUser,
  registerUser,
  updateNotification,
};
