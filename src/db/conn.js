const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/olympics", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection sucess...");
  })
  .catch((e) => {
    console.log("no connection");
  });
