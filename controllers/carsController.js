const Car = require("../models/car");
const {
  statusCodes,
  sendError,
  sendResponse,
  errorMessages,
} = require("../utils/responses");

const getCarById = async (req, res) => {
  try {
    const car = await Car.findOne({ _id: req.params.id });
    if (!car)
      return sendError(res, errorMessages.notFound, statusCodes.error.notFound);
    return sendResponse(res, car, statusCodes.success.ok);
  } catch (error) {
    return sendError(res, error.message, statusCodes.error.badRequest);
  }
};

const getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    return sendResponse(res, cars, statusCodes.success.ok);
  } catch (error) {
    return sendError(res, error.message, statusCodes.error.badRequest);
  }
};

const createCar = async (req, res) => {
  try {
    const car = await Car.create(req.body);
    return sendResponse(res, car, statusCodes.success.ok);
  } catch (error) {
    return sendError(res, error.message, statusCodes.error.badRequest);
  }
};

const updateCar = async (req, res) => {
  try {
    const updatedCar = await Car.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedCar)
      return sendError(res, errorMessages.notFound, statusCodes.error.notFound);
    return sendResponse(res, updatedCar, statusCodes.success.ok);
  } catch (error) {
    return sendError(res, error.message, statusCodes.error.badRequest);
  }
};

const deleteCar = async (req, res) => {
  try {
    const deletedCar = await Car.findOneAndDelete({ _id: req.params.id });
    if (!deletedCar)
      return sendError(res, errorMessages.notFound, statusCodes.error.notFound);
    return sendResponse(res, deletedCar, statusCodes.success.ok);
  } catch (error) {
    return sendError(res, error.message, statusCodes.error.badRequest);s
  }
};

module.exports = { getCars, createCar, getCarById, updateCar, deleteCar };
