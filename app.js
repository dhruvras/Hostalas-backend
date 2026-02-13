import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRouter from "./routes/user.router.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
    res.send("Welcome to the Hostalas API!");
});



export default app;