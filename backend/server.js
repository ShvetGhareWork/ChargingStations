import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import stationRoutes from "./routes/stations.js";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "https://charging-stations-frontend.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true, // if you use cookies or auth headers
  })
);
app.use(express.json());

app.options("*", cors()); // allow preflight for all routes

// Health-check route
app.get("/", (req, res) => {
  res.send("🚀 Charging Station API is running!");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/stations", stationRoutes);

// Connect DB & Start Server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`✅ Server running on http://localhost:${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("❌ DB Connection Error:", err));
