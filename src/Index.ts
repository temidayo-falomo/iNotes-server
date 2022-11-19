import express, { Application, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user-routes";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "https://inotes-mini.netlify.app"],
  })
);
app.use(express.json());
app.use("/api", userRouter);

mongoose
  .connect(`${process.env.MONGODB_URL}`)
  .then(() => {
    app.listen(process.env.PORT);
  })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log(err);
  });
