
import express from "express"
const app = express();
import cors from "cors"
import data from "./Data/data.js";
// import data from "./Data/data";

import {errorHandler,notFound} from "./middleware/errorMiddleware.js"
import dotenv from "dotenv"
// import userRoutes from "./routes/userRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import chatRoutes from "./routes/chatRoutes.js"
import connection from "./config/db.js"
dotenv.config();
app.use(cors());


const MONGO_URL = process.env.MONGO_URL;
connection(MONGO_URL); 
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/chat",chatRoutes);
app.get("/",(req,res)=>{
     res.send("hello")
})

app.get("/api/chat",(req,res)=>{
//   console.log(data)
    res.send(data).status(200);
   
})


app.use(notFound)
app.use(errorHandler)



app.listen(5000, () => console.log(`Server running on port 5000`));