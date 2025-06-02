import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import stationRoutes from "./routes/stations.js";

dotenv.config();

const app = express();
const allowedOrigins = [
  "https://charging-stations-frontend.vercel.app",
  "https://charging-stations-frontend-e6hr6bxb5-shvetghareworks-projects.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin like Postman or curl
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
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
app.use("/api/auth/stations", stationRoutes);

// Connect DB & Start Server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`✅ Server running on http://localhost:${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("❌ DB Connection Error:", err));
