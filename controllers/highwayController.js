const Car = require("../models/car");
const checkCarLastEntry = require("../utils/calculateTime");
const {
  statusCodes,
  sendError,
  sendResponse,
  errorMessages,
} = require("../utils/responses");

const register = async (req, res) => {
  try {
    const car = await Car.findOne({ _id: req.body.carId });
    if (!car)
      return sendError(res, errorMessages.notFound, statusCodes.error.notFound);
    if (car.accessCard)
      return sendError(
        res,
        errorMessages.registered,
        statusCodes.error.badRequest
      );
    car["accessCard"] = { balance: 10 };
    const registeredCar = await car.save();
    return sendResponse(res, registeredCar, statusCodes.success.ok);
  } catch (error) {
    return sendError(res, error.message, statusCodes.error.badRequest);
  }
};

const passCar = async (req, res) => {
  try {
    const car = await Car.findOne({ _id: req.body.carId });
    if (!car)
      return sendError(res, errorMessages.notFound, statusCodes.error.notFound);

    if (!car.accessCard)
      return sendError(
        res,
        errorMessages.unregistered,
        statusCodes.error.badRequest
      );
    checkCarLastEntry(car.accessCard.updatedAt)
      ? updateCarBlance(req, res, car)
      : updateCarLastEntry(req, res, car);
  } catch (error) {
    return sendError(res, error.message, statusCodes.error.badRequest);
  }
};

const updateCarBlance = async (req, res, car) => {
  try {
    if (car.accessCard.balance < 4)
      return sendError(
        res,
        errorMessages.balanceExceeded,
        statusCodes.error.badRequest
      );
    car.accessCard.balance -= 4;
    const passedCar = await car.save();
    return sendResponse(res, passedCar, statusCodes.success.ok);
  } catch (error) {
    return sendError(res, error.message, statusCodes.error.badRequest);
  }
};

const updateCarLastEntry = async (req, res, car) => {
  try {
    const passedCar = await car.save();
    return sendResponse(res, passedCar, statusCodes.success.ok);
  } catch (error) {
    return sendError(res, error.message, statusCodes.error.badRequest);
  }
};

module.exports = { register, passCar };
