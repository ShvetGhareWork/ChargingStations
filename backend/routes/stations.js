import express from "express";
import {
  getAllStations,
  getStationById,
  createStation,
  updateStation,
  deleteStation,
} from "../controllers/stationController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, getAllStations);
router.get("/:id", verifyToken, getStationById);
router.post("/", verifyToken, createStation);
router.put("/:id", verifyToken, updateStation);
router.delete("/:id", verifyToken, deleteStation);

export default router;
