import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    optional: true
  },
  status: {
    type: String,
    enum: ["pending", "in-progress", "done"],
    default: "pending"
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium"
  }
});

export default mongoose.model("Task", taskSchema);