import express from "express";
import { requireAuth } from "../middleware/auth.middleware.js";
import { Transfer } from "../models/Transfer.js";

export const reportRouter = express.Router();

/**
 * Kullanıcının transfer geçmişi
 */
reportRouter.get("/history", requireAuth, async (req, res) => {
  const transfers = await Transfer.find({ fromUser: req.user.userId })
    .sort({ createdAt: -1 })
    .limit(20);

  res.json({ ok: true, transfers });
});
