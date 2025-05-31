import express from "express";
import {
  getAllStations,
  createStation,
  updateStation,
  deleteStation,
} from "../controllers/stationController.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, getAllStations);
router.post("/", verifyToken, createStation);
router.put("/:id", verifyToken, updateStation);
router.delete("/:id", verifyToken, deleteStation);

export default router;
