const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");

//we will handle post req
router.post("/mens", async (req, res) => {
  try {
    const addingMensRecord = new MenRanking(req.body);
    console.log(addingMensRecord);
    const insertMens = await addingMensRecord.save();
    res.status(201).send(insertMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

//we will handle get req
router.get("/mens", async (req, res) => {
  try {
    const getMens = await MensRanking.find({}).sort({ ranking: 1 });
    res.send(getMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

//we will handle get req for indivisible
router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findById({ _id });
    res.send(getMen);
  } catch (e) {
    res.status(400).send(e);
  }
});

//we will handle patch req for indivisible
router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getMen);
  } catch (e) {
    res.status(500).send(e);
  }
});

//we will handle delete req for indivisible
router.delete("/mens/:id", async (req, res) => {
  try {
    const getMe = await MensRanking.findByIdAndDelete(req.params.id);
    res.send(getMe);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
