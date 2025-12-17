import mongoose from "mongoose";

const TransferSchema = new mongoose.Schema(
  {
    fromUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    to: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true,
      min: 1
    }
  },
  { timestamps: true }
);

export const Transfer = mongoose.model("Transfer", TransferSchema);
