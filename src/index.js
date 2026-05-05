import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
dotenv.config({
  path: "./env",
});
const port = process.env.PORT;
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`app is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Mongodb connection failed ", err);
  });
















  
// import express from "express"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// const app=express()

// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         app.on("error",(error)=>{
//             console.log("ERROR ",error)
//             throw error;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.log("ERROR ",error);
//         throw error;
//     }
// })()
