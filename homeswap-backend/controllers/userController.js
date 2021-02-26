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
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
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
    res.status(400).json({ error: "User already exists" });
  }

  const user = await User.create({ name, email, password });
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400).json({ error: "Invalid user data" });
  }
};

module.exports = {
  getUsers,
  authUser,
  registerUser,
};
