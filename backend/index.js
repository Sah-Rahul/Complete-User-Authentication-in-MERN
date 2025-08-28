import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import { ConnectDB } from './config/db.js';
dotenv.config();


const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST","PUT","DELETE"],
    credentials: true,
  })
);

import userRoutes from "./routes/user.routes.js";

app.use("/api/v1/user", userRoutes);

app.get("/", (req, res) => {
  res.send("server is running ✅ ...");
});


app.listen(PORT, () => {
  ConnectDB()
  console.log(`server is running on http://localhost:${PORT}`);
});