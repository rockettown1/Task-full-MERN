const express = require("express");
const { User } = require("../models/user");
const router = new express.Router();
const { auth } = require("../middleware/auth.js");

router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    const token = await user.generateAuthToken();
    await user.save();
    res.cookie("access_token", token, { httpOnly: true, path: "/", sameSite: "none", secure: true });
    res.status(201).send({ user });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.cookie("access_token", token, { httpOnly: true, path: "/", sameSite: "none", secure: true });
    res.send({
      user: user
    });
  } catch (error) {
    res.status(400).send({ error: "Incorrect login details" });
  }
});

router.get("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token !== req.token;
    });
    await req.user.save();
    res
      .clearCookie("access_token", { httpOnly: true, path: "/", sameSite: "none", secure: true })
      .send({ message: "successfully logged out" });
  } catch (error) {
    res.status(500).send();
  }
});

router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
});

router.patch("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).send();
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/users/me", auth, async (req, res) => {
  try {
    // const user = await User.findByIdAndDelete(req.user._id);
    // if (!user) {
    //   return res.status(404).send();
    // }
    await req.user.remove();
    res.status(200).send(req.user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
