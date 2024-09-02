import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  cors({
    origin: [],
  })
);

app.get("/", (req, res) => {
  res.send("Server Running....");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server Connected to the Port ${PORT}`);
});
