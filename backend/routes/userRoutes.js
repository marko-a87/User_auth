/*
POST method
GET method
PUT method
DELETE method
*/

import {
  loginUser,
  logoutUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";
import express from "express";
const router = express.Router();

//Registers a user information
router.post("/register", registerUser);

//Login a user
router.post("/login", loginUser);

//Logout a user
router.post("/logout", logoutUser);

//Protects user route using a token and gets user profile and updates information
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
