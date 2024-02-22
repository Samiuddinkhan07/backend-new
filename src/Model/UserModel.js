import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    todos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Todo"
        }
    ]
})

const User = new mongoose.model("User", UserSchema);


export default User;