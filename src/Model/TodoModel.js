import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,

    },
    date: {
        type: Date,
        default: Date.now
    },
    tags: [String],
    priority: {
        type: String,
        enum: ["high", "medium", "low"],
        default: "medium"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    },


}, { timestamps: true });

const Todo =  new mongoose.model("Todo", TodoSchema);

export default Todo;