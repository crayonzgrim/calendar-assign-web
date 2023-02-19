import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import {
  getAllRouter,
  getCalendarRouter,
  addCalendarRouter,
  updateCalendarRouter,
  deleteCalendarRouter,
} from "./router";

dotenv.config();

const app: Express = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/", getAllRouter);

mongoose.set("strictQuery", true);

/** Connected name with crayonzgrim */
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PW}@cluster0.eeavtgs.mongodb.net/calendar?retryWrites=true&w=majority`
  )
  .then(() => console.log("Mongoose connected"))
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => console.log(err));
