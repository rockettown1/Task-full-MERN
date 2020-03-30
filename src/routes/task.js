const express = require("express");
const { Task } = require("../models/task");
const router = new express.Router();
const { auth } = require("../middleware/auth.js");
const mongoose = require("mongoose");

router.post("/tasks", auth, async (req, res) => {
  // const task = new Task(req.body);
  const task = new Task({
    ...req.body,
    owner: req.user._id
  });
  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.get("/main", (req, res) => {
  res.status(200).sendFile(path.join(__dirname + "../../client/build/index.html"));
});

router.get("/tasks", auth, async (req, res) => {
  try {
    const response = await Task.find({ owner: req.user._id });
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/tasks/:id", auth, async (req, res) => {
  try {
    // const task = await Task.findById(req.params.id);
    const task = await Task.findOne({ _id: req.params.id, owner: req.user._id });

    if (!task) {
      console.log("no task found");
      return res.status(404).send("No task found");
    }
    res.send(task);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
});

router.patch("/tasks/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);

  const allowedUpdates = ["done", "deadline", "description"];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid update" });
  }
  try {
    const task = await Task.findOne({ _id: req.params.id, owner: req.user._id });
    updates.forEach(update => (task[update] = req.body[update]));

    await task.save();

    if (!task) {
      return res.status(404).send();
    }
    console.log("task done");
    res.status(202).send(task);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

router.delete("/tasks/:id", auth, async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete({ _id: mongoose.Types.ObjectId(req.params.id), owner: req.user._id });
    if (!task) {
      return res.status(404).send({ erm: "dunno" });
    }
    console.log("task deleted");
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
