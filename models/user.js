const mongoose = require("mongoose");

// User Schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Docs created by the user
  createdDocs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Document" }],
  // Docs that the user can edit
  editingDocs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Document" }],
});

module.exports = mongoose.model("User", userSchema);
