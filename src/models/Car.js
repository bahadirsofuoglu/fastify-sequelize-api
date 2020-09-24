const Sequelize = require("sequelize");
const { sequelize } = require("../config/connection");

const Car = sequelize.define(
  "car",
  {
    title: {
      type: Sequelize.STRING,
    },
    brand: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.BOOLEAN,
    },
    age: {
      type: Sequelize.BOOLEAN,
    },
  },
  {
    sequelize,
    modelName: "Car",
  }
);

module.exports = Car;
