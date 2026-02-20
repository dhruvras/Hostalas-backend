import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRouter from "./routes/user.router.js";
import productRouter from "./routes/product.router.js";
import emailRouter from "./routes/email.router.js";
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/sendEmail", emailRouter);

app.get("/", (req, res) => {
    res.send("Welcome to the Hostalas API!");
});



export default app;