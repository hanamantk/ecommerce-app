import { Router } from "express";
import User from "../models/userModal";
import getJsonToken from "../utils";
import jwt from "jsonwebtoken";
import { loginUser } from "../../client/src/actions/user";
const router = Router();

router.post("/register", async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const newUser = await user.save();
    if (newUser) {
      res.send({
        _id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      });
    }
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

router.post("/verifyUser", async (req, res) => {
  try {
    let header = req.header("Authorization");
    const TOKEN = header.split(" ");
    try {
      var validToken = jwt.verify(TOKEN[1], "anyscrete");
      if (validToken)
        res.send({
          msg: "Token matched",
          userVeryfied: true,
        });
    } catch (err) {
      res.status(400).send({ msg: "Invalid token sent", userVeryfied: false });
    }
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const loginUser = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    let user = {
      email: req.body.email,
      password: req.body.password,
    };
    let token = jwt.sign(
      {
        data: user,
      },
      "anyscrete",
      { expiresIn: "2d" }
    );
    res.send({
      email: loginUser.email,
      name: loginUser.name,
      token: token,
    });
    //  }
  } catch (error) {
    res.status(400).send({ msg: "Invalid credentials" });
  }
});

export default router;
