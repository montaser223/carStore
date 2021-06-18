const express = require("express");
const router = express.Router();
const carsController = require("../controllers/carsController");

/*
GET
Route: / 
Results: all cars
*/

router.get("/", carsController.getCars);

/*
GET
Route: /:id
Results: get one car by its id
*/

router.get("/:id", carsController.getCarById);

/*
POST
Route: / 
Results: new car
*/

router.post("/", carsController.createCar);

/*
PUT
Route: /:id
Results: updated car
*/

router.put("/:id", carsController.updateCar);

/*
DELETE
Route: /:id
Results: deleted car
*/

router.delete("/:id", carsController.deleteCar);

module.exports = router;
