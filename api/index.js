import express from "express";
import dotenv from "dotenv";         // we use dotenv library to load these enviroment variable from ".env" file
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"     
import usersRoute from "./routes/users.js"     
import roomsRoute from "./routes/rooms.js"     
import hotelsRoute from "./routes/hotels.js"     
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();               // create an instance of an express application;

dotenv.config()

const connect = async () =>{        // Here we connect the instance of mongoose.connect
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongooseDB")
    } catch (error) {
        throw error;
    } 
};

mongoose.connection.on("Connected",()=>{
    console.log("mongoDB Connected!")
})

mongoose.connection.on("disonnected",()=>{ 
    console.log("mongoDB disconnected!")
});

//Middlewares                           // Middleware is used to handle tasks that need to be executed in the middle of the request-response cycle.

app.use(cors())                         // We used it because we can convert the token into cookie

app.use(cookieParser())                 // We used it because we can convert the token into cookie

app.use(express.json())                 // which api you want to use like hotel,rooms,etc;

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/hotels", hotelsRoute);

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    });
});



app.listen(8800, ()=>{               //method in Express to start your server on port 8800
    connect()
    console.log("Connected to backend!")
})

