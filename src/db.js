import mongoose from "mongoose";


const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/todo", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Database connected successfully");
    }
    catch(err){
        console.log("Cannot connect to database", err)
    }
}

export default connectDB;

// (async () => {
//     try{
//         await mongoose.connect("mongodb://127.0.0.1:27017/todo", {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         })
//         console.log("Database connected successfully");
//     }
//     catch(err){
//         console.log("Cannot connect to database", err)
//     }
   
// })()