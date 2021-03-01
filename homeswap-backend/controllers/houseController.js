const House = require("../models/houseModel");

const getAll = async (req, res) => {
  try {
    let houses = await House.find({});

    if (houses) {
      res.json({ houses });
    }
  } catch (error) {
    console.log(error);
  }
};

const createAdvertisement = async (req, res) => {
  console.log(req.body.userHouse);
  let data = {
    user: req.body._id,

    userHouse: {
      province: req.body.userHouse.province,
      municipality: req.body.userHouse.municipality,
      district: req.body.userHouse.district,
      zipcode: req.body.userHouse.zipcode,
      hometype: req.body.userHouse.hometype,
      floor: req.body.userHouse.floor,
      rooms: req.body.userHouse.rooms,
      area: req.body.userHouse.area,
      rent: req.body.userHouse.rent,
      features: req.body.userHouse.features,
      facilities: req.body.userHouse.facilities,
      description: req.body.userHouse.description,
    },

    requestedHouse: {
      province: req.body.requestedHouse.province,
      municipality: req.body.requestedHouse.municipality,
      district: req.body.requestedHouse.district,
      zipcode: req.body.requestedHouse.zipcode,
      hometype: req.body.requestedHouse.hometype,
      floor: req.body.requestedHouse.floor,
      rooms: req.body.requestedHouse.rooms,
      area: req.body.requestedHouse.area,
      rent: req.body.requestedHouse.rent,
      features: req.body.requestedHouse.features,
      facilities: req.body.requestedHouse.facilities,
      description: req.body.requestedHouse.description,
    },
  };

  try {
    let createdData = await House.create(data);

    if (createdData) {
      res.status(201).json(createdData);
    } else {
      res.json({ error: "Something went wrong" });
    }
  } catch (error) {
    res.json({ error: "Missing fields" });
    console.log(error.errors);
  }
};

module.exports = {
  createAdvertisement,
  getAll,
};
