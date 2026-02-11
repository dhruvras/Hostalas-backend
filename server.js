import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  app.listen(PORT, ()=>{
    console.log(`Server is running on: http://localhost:${PORT}`);
  })
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
  process.exit(1);
});