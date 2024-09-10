// models/Commission.ts
import mongoose, { Schema, model, models } from "mongoose";

// Define the schema for the Commission model
const CommissionSchema = new Schema(
  {
    clientName: { type: String, required: true },
    status: {
      type: String,
      enum: ["Accepted", "In Progress", "Done"], // Possible statuses
      default: "Accepted",
    },
  },
  { timestamps: true }
);

// Check if the model already exists to avoid recompilation
const Commission = models.Commission || model("Commission", CommissionSchema);

export default Commission;
