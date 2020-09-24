// External Dependancies
const boom = require("boom");

// Get Data Models
const Car = require("../models/Car");

// Get all cars
exports.getCars = async (req, reply) => {
  try {
    const cars = await Car.findAll();
    return cars;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single car by ID
exports.getSingleCar = async (req, reply) => {
  try {
    return Car.findByPk(req.params.id);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new car
exports.addCar = async (req, reply) => {
  try {
    return Car.create({
      title: req.body.title,
      brand: req.body.brand,
      price: req.body.price,
      age: req.body.age,
    });
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing car
exports.updateCar = async (req, reply) => {
  try {
    const id = req.params.id;

    Car.update(req.body, {
      where: { id: id },
    });
    return Car;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a car
exports.deleteCar = async (req, reply) => {
  try {
    const id = req.params.id;
    const car = await Car.destroy({
      where: { id },
    });
    return car;
  } catch (err) {
    throw boom.boomify(err);
  }
};
