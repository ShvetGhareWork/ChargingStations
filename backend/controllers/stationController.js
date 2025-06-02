import ChargingStation from "../models/ChargingStation.js";

// Get all stations for the logged-in user
export const getAllStations = async (req, res) => {
  try {
    const stations = await ChargingStation.find({ userId: req.user._id });
    res.json(stations);
  } catch (err) {
    res.status(500).json({ message: "Error: " + err.message });
  }
};

// Get station by ID (only if it belongs to the user)
export const getStationById = async (req, res) => {
  try {
    const station = await ChargingStation.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!station) return res.status(404).json({ message: "Station Not Found" });
    res.json(station);
  } catch (err) {
    res.status(500).json({ message: "Error: " + err.message });
  }
};

// Create a new station for the logged-in user
export const createStation = async (req, res) => {
  try {
    const station = new ChargingStation({
      ...req.body,
      userId: req.user._id,
    });

    await station.save();
    res.status(201).json(station);
  } catch (err) {
    res.status(500).json({ message: "Error: " + err.message });
  }
};

// Update a station (only if it belongs to the user)
export const updateStation = async (req, res) => {
  try {
    const updated = await ChargingStation.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Station Not Found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error: " + err.message });
  }
};

// Delete a station (only if it belongs to the user)
export const deleteStation = async (req, res) => {
  try {
    const deleted = await ChargingStation.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!deleted) return res.status(404).json({ message: "Station Not Found" });
    res.json({ message: "Station Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error: " + err.message });
  }
};
