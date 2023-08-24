import mongoose from "mongoose";
import color from "colors"


 const connection = async (MONGO_URL)=>{
   
    try {
     const conn=   await mongoose.connect(MONGO_URL,{
          
            useNewUrlParser: true,
            useUnifiedTopology: true,
          
          });
        //   console.log(`database connected to ${conn.connection.host}`.red.underline)
        console.log("database connected succefull".red)
    } catch (error) {
        console.log("Error while connecting with the databse",error);
    }
}



export default connection