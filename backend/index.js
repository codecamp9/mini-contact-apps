const express = require("express");
const port = 8000;
const contact = require("./controllers/contact");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", contact);

app.listen(port, () => {
  console.log(`server nyala di localhost:${port}`);
});
