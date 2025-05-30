import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  newUser,
} from "../controllers/User.js";
import { adminOnly } from "../middlewares/Auth.js";

const app = express.Router();

// route - /api/v1/user/new
app.post("/new", newUser);

// Route - /api/v1/user/all
app.get("/all", adminOnly, getAllUsers);

// Route - /api/v1/user/dynamicID
app.route("/:id").get(getUser).delete(adminOnly, deleteUser);

export default app;
