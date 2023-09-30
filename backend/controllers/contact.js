const express = require("express");
const router = express.Router();
const contact = require("../model/Contact");

router.get("/", (req, res) => {
  res.json({
    status: 200,
    payload: "default router",
  });
});

router.get("/contacts", (req, res) => {
  contact.getAll(req, res);
});

router.post("/contacts", (req, res) => {
  contact.add(req, res);
});

router.delete("/contacts/:id", (req, res) => {
  contact.drop(req, res);
});

router.patch("/contacts/:id", (req, res) => {
  contact.edit(req, res);
});

module.exports = router;
