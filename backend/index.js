const express = require("express");
const port = 8000;
const contact = require("./controllers/contact");

const app = express();

app.use("/api", contact);

app.listen(port, () => {
    console.log(`server nyala di localhost:${port}`);
})