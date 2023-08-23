import express from "express";
import dotenv from "dotenv";
import connectDB from "../backend/config/db.js";
import userRoutes from "../backend/routes/userRoutes.js";
import cookieParser from "cookie-parser";
import {
  errorHandler,
  logHandler,
  notFound,
} from "./middleware/errorHandler.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Parses the request type for cookies
app.use(cookieParser());

app.use("/", userRoutes);

//Returns an error when an invalid route is passed
app.use(notFound);

//Logs an error message to the console
app.use(logHandler);

//Default error message for server
app.use(errorHandler);
const PORT = process.env.PORT || 3000;

//Connects to the database
connectDB();
app.listen(PORT, () => console.log(`Server listening on: ${PORT}`));
