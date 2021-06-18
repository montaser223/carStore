const { model, Schema } = require("mongoose");

const accessCardSchema = new Schema(
  {
    balance: {
      type: Number,
      required: "balance is required",
      default: 10,
    },
  },
  { timestamps: true }
);

const carSchema = new Schema({
  brand: {
    type: String,
    trim: true,
    lowercase: true,
    required: "car brand is required",
    minLength: [3, "car brand must be at least 3 chars"],
  },
  model: {
    type: String,
    trim: true,
    lowercase: true,
    required: "car model is required",
    minLength: [3, "car model must be at least 3 chars"],
  },
  plateNo: {
    type: String,
    trim: true,
    match: [/^[A-Za-z]{2,3}\|[0-9]{3,4}$/, "Invalid Plate Number"],
    required: "Plate number is required",
    unique: true,
  },
  accessCard: accessCardSchema,
});

const carModel = model("Car", carSchema);

module.exports = carModel;
