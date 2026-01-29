import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("🔗 MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }

  
};

process.on("SIGINT", async () => {
   await mongoose.disconnect();
    console.log("\n⛔ MongoDB disconnected due to app termination"); 
  process.exit(0);
});

export default connectDB;