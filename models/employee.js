const { model, Schema } = require("mongoose");

const employeeSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "name is required",
    minLength: [3, "name must be at least 3 chars"],
    lowercase: true,
  },
  age: {
    type: Number,
    trim: true,
    required: "age is required",
    min: [22, "age must be at least 22 chars"],
  },
  position: {
    type: String,
    trim: true,
    required: "position is required",
    lowercase: true,
  },
  user: { type: "ObjectId", ref: "Car" },
});

const employeeModel = model("Employee", employeeSchema);

module.exports = employeeModel;
