const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema, model } = mongoose;

const nameSchema = new Schema({
  first: {
    type: String,
    required: true,
  },
  middle: {
    type: String,
  },
  last: {
    type: String,
    required: true,
  },
});

const phoneSchema = new Schema({
  countryCode: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
});

const addressSchema = new Schema({
  doorNo: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const userSchema = new Schema({
  name: {
    type: nameSchema,
    get: (name) => `${name.first} ${name?.middle} ${name.last}`,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: phoneSchema,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
  },
  address: {
    type: addressSchema,
    get: (address) => `No.${address.doorNo},${address.street},
    ${address.landmark ? "near " + address.landmark + "," : ""}
    ${address.city},${address.state},
    ${address.country} - ${address.zipCode}
    `,
  },
});

userSchema.pre("save", async (req, res) => {
  const user = this;

  if (user.isModified("password")) {
    const enPass = bcrypt.hash(user.password, 10);
    user.password = enPass;
  }

  return user;
});

const user = new model("user", userSchema);

module.exports = user;
