require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const configs = require("./config");

// get the enviornment configs
const ENV = process.env.NODE_ENV || "dev";
const { DB_URI, PORT } = configs[ENV];

//connect to data base
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(PORT, (err) => {
      if (err) return console.log(err);
      console.log("Server started on port: " + PORT);
    });
  })
  .catch((err) => console.log(err));

// add middlewares
app.use(express.json());
app.use(cors());

// add routes
app.use("/cars", require("./routes/cars"));
app.use("/highway", require("./routes/highway"));
