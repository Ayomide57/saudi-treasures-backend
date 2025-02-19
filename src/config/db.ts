import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const MONGOBD_URL = process.env?.MONGODB_URL;


const db = async()  => {
    
    try {
        const con = await mongoose.connect(MONGOBD_URL);
        console.log(`moongoose connected: ${con.connection.host}`);
    } catch (error) {
        console.error(error)
    }
}

export default db;