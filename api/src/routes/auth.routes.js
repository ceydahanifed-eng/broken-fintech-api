import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const authRouter = express.Router();

/**
 * Demo kullanıcı oluşturur
 * username: demo
 * password: demo1234
 */
authRouter.post("/seed", async (req, res) => {
  const username = "demo";
  const password = "demo1234";

  const passwordHash = await bcrypt.hash(password, 10);

  await User.updateOne(
    { username },
    { $setOnInsert: { username, passwordHash } },
    { upsert: true }
  );

  res.json({
    ok: true,
    username,
    password
  });
});

/**
 * Login endpoint
 */
authRouter.post("/login", async (req, res) => {
  const { username, password } = req.body || {};

  if (!username || !password) {
    return res.status(400).json({ error: "Eksik bilgi" });
  }

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).json({ error: "Hatalı kullanıcı adı veya şifre" });
  }

  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) {
    return res.status(401).json({ error: "Hatalı kullanıcı adı veya şifre" });
  }

  const token = jwt.sign(
    { userId: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
});
