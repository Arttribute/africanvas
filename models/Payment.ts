import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amountPaid: {
    type: Number,
    required: true,
  },
  profileImage: {
    type: String,
    default: "",
  },
});

export default mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);