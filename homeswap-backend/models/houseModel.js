const mongoose = require("mongoose");
const houseSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    userHouse: {
      province: {
        type: String,
        required: true,
      },
      municipality: {
        type: String,
        required: true,
      },
      district: {
        type: String,
        required: false,
      },
      zipcode: {
        type: String,
        required: false,
      },
      hometype: {
        type: String,
        required: true,
      },
      floor: {
        type: Number,
        required: false,
      },
      rooms: {
        type: Number,
        required: true,
      },
      area: {
        type: Number,
        required: false,
      },
      rent: {
        type: Number,
        required: true,
      },
      features: {
        type: String,
        required: true,
      },
      facilities: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },

    requestedHouse: {
      province: {
        type: String,
        required: true,
      },
      municipality: {
        type: String,
        required: true,
      },
      district: {
        type: String,
        required: false,
      },
      zipcode: {
        type: String,
        required: false,
      },
      hometype: {
        type: String,
        required: true,
      },
      floor: {
        type: Number,
        required: true,
      },
      rooms: {
        type: Number,
        required: true,
      },
      area: {
        type: Number,
        required: true,
      },
      rent: {
        type: Number,
        required: true,
      },
      features: {
        type: String,
        required: true,
      },
      facilities: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

const House = mongoose.model("House", houseSchema);

module.exports = House;
