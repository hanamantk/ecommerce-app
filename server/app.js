import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import userRoute from "./routes/userRoute";
import paymentRoute from "./routes/paymentRoute";
import productRoute from "./routes/productRoute";
import config from "./config";
import mongoose from 'mongoose';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());


//DB connection
const mongodbUrl = config.MONGODB_URL;
mongoose
.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
.catch((error) => console.log(error.reason));


//Routes
app.use("/api/user", userRoute);
app.use("/api/products",productRoute);
app.use("/api/payment",paymentRoute);

export default app;
