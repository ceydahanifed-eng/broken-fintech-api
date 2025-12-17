import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`API running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error", err);
  });
