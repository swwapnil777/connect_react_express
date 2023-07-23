import express from "express";
import connectDB from "./db/connectdb.js";
import web from "./routes/web.js";
import cors from "cors";

const DATABASE_URL = "mongodb://127.0.0.1:27017/schooldb";
const PORT = 8000;
const app = express();

app.use(cors()); // Call cors() as a function

app.use(express.json());
app.use("/api", web);
connectDB(DATABASE_URL); // Call the connectDB function with the database URL

app.listen(PORT, () => {
  console.log("server is listening");
});
