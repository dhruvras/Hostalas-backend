import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100
    },

    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500
    },

    price: {
      type: Number,
      required: true,
      min: 0
    },

    quantity: {
      type: Number,
      required: true,
      min: 1
    },

    category: {
      type: String,
      required: true,
      enum: ["food", "electronics", "clothes", "other"]
    },

    images: {
      type: [String], // image URLs
      default: []
    },

    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    isSold: {
      type: Boolean,
      default: false
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Product", productSchema);
