const express = require('express');
const connection = require("./db");
const userRouter = require("./Routes/User.routes");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use('/auth', userRouter);
app.use(cors());


app.listen(PORT, async() => {
    try{
        await connection;
        console.log("Connection Successfull");
    }
    catch {
        console.log("SOmething Went Wrong");
    }
    console.log("Server Started");
})