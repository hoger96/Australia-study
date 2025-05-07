const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://fourkimm:dudgusdldi96@joy.pnd427d.mongodb.net/?retryWrites=true&w=majority&appName=Joy"
  )
  .then(() => console.log("MongoDb Connected..."))
  .catch((err) => console.log(">>>>>>", err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
