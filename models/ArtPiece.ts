import mongoose from "mongoose";
import { User } from "@/models/User";

export interface ArtPiece extends mongoose.Document {
  title: string;
  artist: User["_id"]; // Reference to the User model
  description: string;
  image: string;
  tags: string[];
  price: number;
}

const artPieceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const ArtPiece =
  mongoose.models.ArtPiece || mongoose.model("ArtPiece", artPieceSchema);

export default ArtPiece;
