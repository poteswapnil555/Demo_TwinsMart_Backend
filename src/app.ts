import express from "express";
import { connectDB, connectRedis } from "./utils/Features.js";
import { errorMiddleware } from "./middlewares/Error.js";
import { config } from "dotenv";
import morgan from "morgan";
import Stripe from "stripe";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";

// Importing Routes
import userRoute from "./routes/User.js";
import productRoute from "./routes/Products.js";
import orderRoute from "./routes/Order.js";
import paymentRoute from "./routes/Payment.js";
import dashboardRoute from "./routes/Stats.js";

config({
  path: "./.env",
});

const port = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URI || "";
const stripeKey = process.env.STRIPE_KEY || "";
const redisURI = process.env.REDIS_URI || "";
const clientURL = process.env.CLIENT_URL || "";
export const redisTTL = process.env.REDIS_TTL || 60 * 60 * 4;

connectDB(mongoURI);
export const redis = connectRedis(redisURI);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export const stripe = new Stripe(stripeKey);

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: [clientURL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("API Working with /api/v1");
});

// Using Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/dashboard", dashboardRoute);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Express is working on http://localhost:${port}`);
});
