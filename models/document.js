const mongoose = require("mongoose");

// Document Schema
const documentSchema = mongoose.Schema(
  {
    title: {
      type: String,
      default: "Untitled",
    },
    data: {
      type: Object,
    },
    mode: {
      type: String,
      default: "private",
      enum: ["private", "public", "restricted"],
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    editors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    // Holds the id of the user which last edited this document
    lastEditedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  // Adds createdAt and updatedAt fields each time
  { timestamps: true }
);

module.exports = mongoose.model("Document", documentSchema);
