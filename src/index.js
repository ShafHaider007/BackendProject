// require("dotenv").config({path: "/.env"});

import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({path: "./.env"});


connectDB();








/*
import express from "express";
const app = express();
;(async ()=> {
    try{
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, )
            console.log("Conectado a la base de datos");
            app.on("error", (err) => {
                console.error(`Error: ${err}`);
                throw err;
            });
            app.listen(process.env.PORT, () => {
                console.log(`App is listening on port ${process.env.PORT}`);
            });
    }
    catch(error){
        console.error(error);
        throw error
    }
})()

*/