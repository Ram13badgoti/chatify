
import express from "express"
const app = express();
import cors from "cors"
import data from "./Data/data.js";
// import data from "./Data/data";

app.use(cors())
app.get("/",(req,res)=>{
    // console.log("hi")
    res.send("hello")
})
app.get("/api/chat",(req,res)=>{
    // console.log("chat app")
    console.log(data)
    res.send(data).status(200);
   
})



app.listen(5000, () => console.log(`Server running on port 5000`));