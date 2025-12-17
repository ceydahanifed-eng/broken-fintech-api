import express from "express";
import mongoose from "mongoose";
import { authRouter } from "./routes/auth.routes.js";
import { transferRouter } from "./routes/transfer.routes.js";
import { reportRouter } from "./routes/report.routes.js";

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.use("/auth", authRouter);
app.use("/transfer", transferRouter);
app.use("/report", reportRouter);

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
