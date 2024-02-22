import Todo from "../Model/TodoModel.js"
export const addTodo  = {
    path:"/api/addTodo",
    method:"post",
    handler: async (req, res) => {
        try{
           const {title, description, tags, priority} = req.body;
           if(!title || !description || !tags || !priority){
               return res.status(400).json({message:"All fields are required"})
           }
           const todo = new Todo({
                title,
                description,
                tags,
                priority,
                user:req.user._id
           })
           todo.
           res.status(201).json({message:"Todo added successfully"});
        }catch(err){
            console.log(err)
            res.status(500).json({message:"Cannot Save Todo Please Try Again"});
        }
    }
}