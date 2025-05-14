import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//common middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// Import routes
import healthCheckRouter from "./routes/healthcheck.routes.js";

// Use routes
app.use("/api/v1/healthcheck", healthCheckRouter);

export { app };

//http://localhost:8000/api/v1/healthcheck