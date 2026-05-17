const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const noteRoutes = require("./routes/noteRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
  return res.json({ message: "Notes API is running..." });
});

app.use((req, res) => {
  return res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`);
});
