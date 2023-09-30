const express = require("express");
const port = 8000;
const contact = require("./controllers/contact");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const apiDocumentation = require("./apidoc.json");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocumentation));
app.use("/api", contact);

app.get("/", (req, res) => {
  res.send("API READY..");
});

app.listen(port, () => {
  console.log(`server nyala di localhost:${port}`);
});
