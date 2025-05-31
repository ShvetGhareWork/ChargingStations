import ChargingStation from "../models/ChargingStation.js";

export const getAllStations = async (req, res) => {
  try {
    const stations = await ChargingStation.find();
    res.json(stations);
  } catch (err) {
    res.status(500).json({ message: "Error: " + err.message });
  }
};

export const createStation = async (req, res) => {
  try {
    const station = new ChargingStation(req.body);
    await station.save();
    res.status(201).json(station);
  } catch (err) {
    res.status(500).json({ message: "Error: " + err.message });
  }
};

export const updateStation = async (req, res) => {
  try {
    const updated = await ChargingStation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Station Not Found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error: " + err.message });
  }
};

export const deleteStation = async (req, res) => {
  try {
    const deleted = await ChargingStation.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Station Not Found" });
    res.json({ message: "Station Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error: " + err.message });
  }
};
export const getStationById = async (req, res) => {
  try {
    const station = await ChargingStation.findById(req.params.id);
    if (!station) return res.status(404).json({ message: "Station Not Found" });
    res.json(station);
  } catch (err) {
    res.status(500).json({ message: "Error: " + err.message });
  }
};
