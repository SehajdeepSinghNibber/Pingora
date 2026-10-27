import mongoose from "mongoose";
import { config } from "../config/config.js";

const MONGO_URI = config.MONGO_URI;

export const connectDB = async () =>{
    try {
        if (!MONGO_URI) {
            throw new Error("MONGO_URI is missing from environment configuration");
        }
        const conn = await mongoose.connect(MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        console.log(`Database: ${conn.connection.name}`);
        console.log("DB is Connected")
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}