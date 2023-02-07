import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

//QAmzPB0qUtS9aO5I
const app: Express = express();

const PORT = process.env.DB_PORT;

app.use(cors());
app.use(express.json());
// app.use('/books', getAllRouter)

mongoose.set("strictQuery", true);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PW}@cluster0.eeavtgs.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("Mongoose connected"))
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => console.log(err));
