import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import router from './src/routes/task.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.use('/api', router);

async function startServer() {
  try {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📊 Environment: ${process.env.NODE_ENV || "development"}`);
      console.log(`🌐 API URL: http://localhost:${PORT}`);
    });
    console.log("⏳ Connecting to database...");
    await connectDB();
    console.log("✅ Database connected successfully!");
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
}


process.on("SIGINT", async () => {
   await mongoose.disconnect();
    console.log("\n⛔ MongoDB disconnected due to app termination"); 
  process.exit(0);
});
startServer();


