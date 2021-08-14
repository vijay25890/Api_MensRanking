const express = require("express");
const MensRanking = require("./models/mens");
require("./db/conn");
const router = require("./routers/men");

const MenRanking = require("./models/mens");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`connection at port ${port}`);
});
