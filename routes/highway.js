const express = require("express");
const router = express.Router();
const highwayController = require("../controllers/highwayController");

/*
POST
Params carId
Route: /register
Results: registeredCar
*/

router.post("/register", highwayController.register);

/*
POST
Params carId
Route: /pass
Results: passedCar
*/

router.post("/pass", highwayController.passCar);

module.exports = router;
