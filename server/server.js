import app from "./src/app.js";
import { config } from "./src/config/config.js";
import { connectDB } from "./src/db/connectDB.js";

const PORT = config.PORT;

const start = async () => {
    try {
        connectDB();
        app.listen(PORT,()=>{
            console.log("Server is listening at PORT:",PORT);
        })
    } catch (error) {
       console.log(error.message) 
    }
}

start();