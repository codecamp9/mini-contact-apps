const express = require("express");
const router = express.Router();
const contact = require("../model/Contact");

router.get("/", (req, res) => {
  res.send('<a href="/api-docs">Documentation</a>');
});

router.get("/contacts", (req, res) => {
  contact.getAll(req, res);
});

router.post("/contacts", (req, res) => {
  contact.add(req, res);
});

router.get("/contacts/:id", (req, res) => {
  contact.show(req, res);
});

router.patch("/contacts/:id", (req, res) => {
  contact.edit(req, res);
});

router.delete("/contacts/:id", (req, res) => {
  contact.drop(req, res);
});

module.exports = router;
