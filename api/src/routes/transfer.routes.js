import express from "express";
import { requireAuth } from "../middleware/auth.middleware.js";
import { Transfer } from "../models/Transfer.js";

export const transferRouter = express.Router();

/**
 * Korumalı transfer oluşturma
 */
transferRouter.post("/", requireAuth, async (req, res) => {
  const { to, amount } = req.body || {};

  if (!to || !amount) {
    return res.status(400).json({ error: "Eksik bilgi" });
  }

  const transfer = await Transfer.create({
    fromUser: req.user.userId,
    to,
    amount
  });

  res.json({ ok: true, transfer });
});
