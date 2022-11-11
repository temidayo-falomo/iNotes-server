import express, { Application, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import userRouter from "../routes/user-routes";
import cors from "cors";

const app: Application = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(express.json());
app.use("/api", userRouter);

mongoose
  .connect(
    "mongodb+srv://temidayo:7zZKyWQYr2aOqOv1@inotes-cluster.rhbhyen.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(process.env.PORT);
  })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log(err);
  });
