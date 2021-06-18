const sendResponse = (res, data, code) =>
  res.status(code).send({ data, message: {} });

const sendError = (res, message, code) =>
  res.status(code).send({ data: {}, message });

const BALANCE = 4;

const statusCodes = {
  success: {
    ok: 200,
  },

  error: {
    badRequest: 400,
    notFound: 404,
  },
};

const errorMessages = {
  notFound: "Not found",
  registered: "car already registered",
  unregistered: "car is not registered",
  balanceExceeded: `your balance is lass then $${BALANCE} you have to charge your card`,
};

module.exports = { errorMessages, sendError, sendResponse, statusCodes };
